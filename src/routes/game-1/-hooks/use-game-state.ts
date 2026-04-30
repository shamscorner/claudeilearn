import { useEffect, useState } from "react";
import { LEVELS } from "../-data/levels";

export interface HistoryItem {
	type: "input" | "output" | "system" | "dialogue";
	text: string;
	speaker?: string;
	id: string;
}

export function useGameState() {
	const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(() => {
		const saved = localStorage.getItem("terminal_level_index");
		return saved ? parseInt(saved, 10) : 0;
	});

	const [history, setHistory] = useState<HistoryItem[]>(() => {
		const saved = localStorage.getItem("terminal_history");
		return saved ? JSON.parse(saved) : [];
	});

	const [isTyping, setIsTyping] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const [filesVisible, setFilesVisible] = useState(() => {
		return localStorage.getItem("terminal_files_visible") === "true";
	});

	const currentLevel = LEVELS[currentLevelIndex];

	// Persist state changes
	useEffect(() => {
		localStorage.setItem("terminal_level_index", currentLevelIndex.toString());
	}, [currentLevelIndex]);

	useEffect(() => {
		localStorage.setItem("terminal_history", JSON.stringify(history));
	}, [history]);

	useEffect(() => {
		localStorage.setItem("terminal_files_visible", filesVisible.toString());
	}, [filesVisible]);

	// Initial dialogue for the level
	useEffect(() => {
		if (!currentLevel) return;

		// Check if dialogue for this specific level was already added to history
		// We use a prefix in the ID to identify level-specific dialogues
		const hasDialogue = history.some((item) =>
			item.id.startsWith(`dialogue-${currentLevel.id}`),
		);
		if (hasDialogue) return;

		let isCancelled = false;

		const startLevel = async () => {
			const dialogueItems: HistoryItem[] = currentLevel.dialogue.map(
				(d, i) => ({
					id: `dialogue-${currentLevel.id}-${i}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
					type: "dialogue",
					speaker: d.speaker,
					text: d.text,
				}),
			);

			// Add dialogues one by one with a delay
			for (const item of dialogueItems) {
				if (isCancelled) break;
				await new Promise((r) => setTimeout(r, 1000));
				if (isCancelled) break;
				setHistory((prev) => [...prev, item]);
			}
		};

		startLevel();

		return () => {
			isCancelled = true;
		};
		// We strictly only run this when the level index changes.
		// The history check inside handles the reload case.
	}, [currentLevelIndex]);

	const resetGame = () => {
		localStorage.removeItem("terminal_level_index");
		localStorage.removeItem("terminal_history");
		localStorage.removeItem("terminal_files_visible");

		// Clear history first to prevent dialogue re-trigger issues
		setHistory([]);
		setCurrentLevelIndex(0);
		setFilesVisible(false);
		setIsSuccess(false);
		setIsTyping(false);
	};

	const handleCommand = async (command: string) => {
		// Reset success state when a new command is sent
		setIsSuccess(false);

		const inputItem: HistoryItem = {
			id: `input-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
			type: "input",
			text: command,
		};
		setHistory((prev) => [...prev, inputItem]);

		const matchCommand = (userInput: string, levelCommand: string) => {
			const input = userInput.trim().toLowerCase();
			const target = levelCommand.trim().toLowerCase();

			// Simple literal match
			if (input === target) return true;

			// Handle placeholders like <query>, [options], {path}
			// Replace anything like <...> or [...] or {...} with a wildcard
			const pattern = target
				.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") // Escape regex chars
				.replace(/\\<[^>]+\\>/g, ".+") // <query> -> one or more chars
				.replace(/\\\[[^\]]+\\\]/g, ".*") // [options] -> zero or more chars
				.replace(/\\\{[^}]+\\\}/g, ".+"); // {path} -> one or more chars

			try {
				const regex = new RegExp(`^${pattern}$`, "i");
				if (regex.test(input)) return true;
			} catch (_) {
				// Fallback to startsWith if regex fails
			}

			// Special case for "claude <query>" where user might not follow exact quote pattern
			if (target.startsWith('claude "') && input.startsWith("claude ")) {
				return true;
			}

			// Fallback for subcommands or simple prefixes
			if (input.startsWith(target)) return true;

			return false;
		};

		const isMatch = matchCommand(command, currentLevel.command);

		if (isMatch) {
			if (command.trim().toLowerCase() === "/clear") {
				setHistory([]);
				setIsSuccess(true);
				setTimeout(() => {
					setCurrentLevelIndex((prev) => prev + 1);
				}, 3000); // Shorter delay for level up, but keep isSuccess
				return;
			}

			setIsTyping(true);

			// Simulate processing delay
			await new Promise((r) => setTimeout(r, 800));

			const outputs = Array.isArray(currentLevel.output)
				? currentLevel.output
				: [currentLevel.output];

			for (const line of outputs) {
				await new Promise((r) => setTimeout(r, 150)); // Streaming effect
				setHistory((prev) => [
					...prev,
					{
						id: `output-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
						type: "output",
						text: line,
					},
				]);
			}

			setIsTyping(false);
			setIsSuccess(true);

			// Trigger side effects based on command or level
			if (currentLevel.command === "/init") setFilesVisible(true);

			// Move to next level after a delay
			setTimeout(() => {
				if (currentLevelIndex < LEVELS.length - 1) {
					setCurrentLevelIndex((prev) => prev + 1);
				}
			}, 3000);
		} else {
			// Wrong command
			setHistory((prev) => [
				...prev,
				{
					id: `error-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
					type: "output",
					text: `Error: Command "${command}" not recognized or inappropriate for the current task.`,
				},
			]);
		}
	};

	return {
		currentLevel,
		currentLevelIndex,
		history,
		handleCommand,
		resetGame,
		isTyping,
		isSuccess,
		filesVisible,
		totalLevels: LEVELS.length,
	};
}

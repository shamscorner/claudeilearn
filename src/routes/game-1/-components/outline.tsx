import { useEffect, useState } from "react";

interface OutputLineProps {
	key?: string;
	text: string;
	type: "input" | "output" | "system" | "dialogue";
	speaker?: string;
}

export const OutputLine = ({ text, type, speaker }: OutputLineProps) => {
	const [displayedText, setDisplayedText] = useState("");

	useEffect(() => {
		if (type === "input") {
			setDisplayedText(text);
			return;
		}

		let currentIndex = 0;
		// Faster typing for generic output, slightly slower for dramatic dialogue
		const speed = type === "dialogue" ? 25 : 10;

		setDisplayedText("");
		const intervalId = setInterval(() => {
			currentIndex++;
			setDisplayedText(text.slice(0, currentIndex));
			if (currentIndex >= text.length) {
				clearInterval(intervalId);
			}
		}, speed);

		return () => clearInterval(intervalId);
	}, [text, type]);

	if (type === "input") {
		return (
			<div className="flex gap-2 mb-1 text-[#DE7356]">
				<span className="text-terminal-accent opacity-70">❯</span>
				<span className="font-medium">{text}</span>
			</div>
		);
	}

	if (type === "dialogue") {
		const isUrgent = speaker === "Manager";
		const isSpeakerYou = speaker === "You";
		const isSlack = speaker === "Senior Dev";
		const isHandler = speaker === "Handler";
		const isSystem = speaker === "System";

		return (
			<div className="mb-4 pl-4 border-l-2 border-terminal-accent/30 py-1">
				<div className="flex items-center gap-2 mb-1">
					<span
						className={`text-[10px] uppercase tracking-wider font-bold ${
							isUrgent
								? "text-red-500"
								: isSlack
									? "text-blue-400"
									: isHandler
										? "text-cyan-400"
										: isSystem
											? "text-amber-500"
											: isSpeakerYou
												? "text-green-500"
												: "text-terminal-dim"
						}`}
					>
						{speaker}
					</span>
					{isSlack && (
						<span className="text-[10px] text-terminal-dim opacity-50 font-normal">
							via Slack
						</span>
					)}
				</div>
				<p
					className={`text-sm italic font-medium ${
						isUrgent
							? "text-white"
							: isSpeakerYou
								? "text-green-100/80"
								: isHandler
									? "text-cyan-100/80"
									: "text-terminal-text/80"
					}`}
				>
					"{displayedText}"
				</p>
			</div>
		);
	}

	const getOutputColor = (text: string) => {
		const lower = text.toLowerCase();
		// Success patterns
		if (
			text.startsWith("✔") ||
			lower.includes("success") ||
			lower.includes("complete") ||
			lower.includes("done") ||
			lower.includes("established")
		)
			return "text-green-400";
		// Error patterns
		if (
			text.startsWith("✖") ||
			lower.includes("error") ||
			lower.includes("fail") ||
			lower.includes("critical") ||
			lower.includes("denied") ||
			lower.includes("alert")
		)
			return "text-red-400";
		// Warning patterns
		if (
			lower.includes("warning") ||
			lower.includes("caution") ||
			lower.includes("deprecated") ||
			lower.includes("high load")
		)
			return "text-yellow-400";
		// Info/Action patterns
		if (
			text.startsWith("[") ||
			lower.includes("info:") ||
			lower.includes("analyzing") ||
			lower.includes("fetching")
		)
			return "text-blue-400";
		if (text.startsWith("→") || text.startsWith("➜") || text.startsWith("❯"))
			return "text-terminal-accent";

		// Default system text
		return "text-terminal-text opacity-90";
	};

	return (
		<div className={`mb-0.5 min-h-[1.2rem] ${getOutputColor(text)}`}>
			{displayedText || "\u00A0"}
		</div>
	);
};

import { Link } from "@tanstack/react-router";
import { Info, Shield, Terminal as TerminalIcon } from "lucide-react";
import { motion } from "motion/react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import type { HistoryItem } from "../-hooks/use-game-state";
import { OutputLine } from "./outline";

interface TerminalProps {
	history: HistoryItem[];
	onCommand: (cmd: string) => void;
	isTyping: boolean;
	isSuccess?: boolean;
	learningHook?: string;
	currentLevelTitle: string;
	commandInfo?: {
		description: string;
		example: string;
	};
}

export const Terminal = ({
	history,
	onCommand,
	isTyping,
	isSuccess,
	learningHook,
	currentLevelTitle,
	commandInfo,
	phaseColor,
}: TerminalProps & { phaseColor?: string }) => {
	const [input, setInput] = useState("");
	const scrollRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		}
	}, [history, isTyping, isSuccess]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (input.trim()) {
			onCommand(input);
			setInput("");
		}
	};

	useEffect(() => {
		const handleGlobalClick = () => inputRef.current?.focus();
		window.addEventListener("click", handleGlobalClick);
		return () => window.removeEventListener("click", handleGlobalClick);
	}, []);

	return (
		<div className="flex flex-col h-full bg-[#0d0d0d] border border-terminal-border/20 rounded-lg overflow-hidden shadow-2xl">
			{/* Terminal Header */}
			<div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-terminal-border/10">
				<div className="flex items-center gap-2">
					<Link to="/">
						<TerminalIcon
							size={14}
							className={phaseColor || "text-terminal-accent"}
						/>
					</Link>
					<Link
						to="/"
						className={`text-xs font-bold uppercase tracking-widest ${phaseColor || "text-terminal-accent"} hover:opacity-80 transition-opacity`}
					>
						V2.1.123
					</Link>
				</div>
				<div className="flex justify-between flex-1 items-center gap-4">
					<div className="flex items-center gap-1.5">
						<div
							className={`w-1.5 h-1.5 rounded-full ${isSuccess ? "bg-terminal-accent" : "bg-terminal-accent/50"} animate-pulse`}
						/>
						<span className="text-[10px] text-terminal-dim uppercase font-semibold">
							{isSuccess ? "Complete" : "Live"}
						</span>
					</div>
					<span className="text-[10px] text-terminal-dim font-mono">
						{currentLevelTitle}
					</span>
				</div>
			</div>

			{/* Context info bar */}
			{commandInfo && (
				<div className="bg-terminal-accent/5 border-b border-terminal-border/5 px-4 py-2 md:py-3 flex items-start gap-3">
					<div className="mt-0.5">
						<Info size={14} className={phaseColor || "text-terminal-accent"} />
					</div>
					<div className="flex-1">
						<p
							className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${phaseColor || "text-terminal-accent"}`}
						>
							{currentLevelTitle}
						</p>
						<p className="text-[10px] md:text-xs text-terminal-dim leading-relaxed mb-2 font-medium">
							{commandInfo.description}
						</p>
						<div className="flex items-center gap-2">
							<span className="text-[10px] text-terminal-dim font-bold uppercase tracking-tighter opacity-50">
								Pattern:
							</span>
							<code
								className={`text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/5 ${phaseColor || "text-terminal-accent"}`}
							>
								{commandInfo.example}
							</code>
						</div>
					</div>
				</div>
			)}

			{/* Terminal Body */}
			<div
				ref={scrollRef}
				className="flex-1 p-6 overflow-y-auto font-mono text-sm scroll-smooth"
			>
				<div className="flex-1 pb-4">
					{history.map((item) => (
						<OutputLine
							key={item.id}
							text={item.text}
							type={item.type}
							speaker={item.speaker}
						/>
					))}
				</div>

				{isTyping && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="flex items-center gap-2 text-terminal-accent"
					>
						<span className="animate-spin text-lg">◒</span>
						<span className="text-xs uppercase tracking-tighter italic">
							Claude is thinking...
						</span>
					</motion.div>
				)}
			</div>

			{/* Persistent Success Indicator */}
			{isSuccess && learningHook && (
				<div className="px-6 py-3 bg-terminal-accent/10 border-t border-terminal-accent/20">
					<div className="flex items-start gap-3">
						<div className="mt-1">
							<Shield size={14} className="text-terminal-accent" />
						</div>
						<div>
							<p className="text-[10px] uppercase font-black text-terminal-accent tracking-[0.2em] mb-1">
								Sub-Process Verified
							</p>
							<p className="text-xs text-terminal-accent/70 font-medium leading-relaxed italic">
								{learningHook}
							</p>
						</div>
					</div>
				</div>
			)}

			{/* Command Input Area */}
			<form
				onSubmit={handleSubmit}
				className="px-6 py-4 bg-[#111] border-t border-terminal-border/10"
			>
				<div className="flex items-center gap-3">
					<span className="text-terminal-accent font-bold">❯</span>
					<input
						ref={inputRef}
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="flex-1 bg-transparent border-none outline-none text-[#DE7356] font-medium placeholder:text-terminal-dim/30 placeholder:italic focus:ring-0"
						placeholder="Type command here..."
						autoFocus={true}
					/>
				</div>
			</form>
		</div>
	);
};

import {
	BarChart3,
	Box,
	ChevronDown,
	ChevronRight,
	Coffee,
	Cpu,
	Database,
	FolderTree,
} from "lucide-react";
import { motion } from "motion/react";

interface SidebarProps {
	visible: boolean;
	activePhase: string;
	phaseColor?: string;
	progress: number;
	onReset?: () => void;
}

export const Sidebar = ({
	visible,
	activePhase,
	phaseColor = "text-terminal-accent",
	progress,
	onReset,
}: SidebarProps) => {
	return (
		<aside className="w-80 h-full bg-[#111] border-r border-terminal-border/10 flex flex-col">
			{/* Header Profile */}
			<div className="p-6 border-b border-white/5 bg-linear-to-b from-[#1a1a1a] to-[#111]">
				<a href="/" className="flex items-center gap-4 mb-4">
					<div className="w-12 h-12 bg-terminal-accent/10 border border-terminal-accent/20 rounded-lg flex items-center justify-center">
						<Coffee className="text-terminal-accent" size={24} />
					</div>
					<div>
						<h3 className="text-sm font-bold text-white">Junior Developer</h3>
						<p className="text-[10px] text-terminal-dim uppercase tracking-tighter">
							Dhaka Logi-Startup #42
						</p>
					</div>
				</a>

				{/* Progress Tracker */}
				<div className="space-y-2">
					<div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-terminal-dim">
						<span>Career Path</span>
						<span>{Math.round(progress)}%</span>
					</div>
					<div className="w-full h-1.5 bg-black rounded-full overflow-hidden border border-white/5">
						<motion.div
							initial={{ width: 0 }}
							animate={{ width: `${progress}%` }}
							className="h-full bg-terminal-accent"
						/>
					</div>
				</div>
			</div>

			{/* Explorer / Phase Info */}
			<div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
				<div className="mb-8">
					<div className="flex items-center gap-2 mb-3 px-2">
						<Box size={14} className="text-terminal-accent" />
						<span className="text-[10px] font-black uppercase text-terminal-dim tracking-widest">
							Active Phase
						</span>
					</div>
					<div
						className={`px-3 py-2 bg-terminal-accent/5 border border-terminal-accent/10 rounded-md`}
					>
						<p className={`text-xs font-medium leading-relaxed ${phaseColor}`}>
							{activePhase}
						</p>
					</div>
				</div>

				{visible ? (
					<div className="space-y-4">
						<div className="flex items-center gap-2 px-2">
							<FolderTree size={14} className="text-terminal-accent" />
							<span className="text-[10px] font-black uppercase text-terminal-dim tracking-widest">
								Workspace
							</span>
						</div>

						<div className="space-y-1">
							<motion.div
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								className="flex items-center gap-2 px-2 py-1.5 hover:bg-white/5 rounded transition-colors group cursor-pointer"
							>
								<ChevronDown size={14} className="text-terminal-dim" />
								<span className="text-xs text-terminal-text">src</span>
							</motion.div>

							<div className="pl-4 space-y-1">
								{[
									{ name: "api", type: "folder" },
									{ name: "services", type: "folder" },
									{ name: "utils", type: "folder", empty: true },
								].map((item) => (
									<motion.div
										key={item.name}
										initial={{ opacity: 0, x: -5 }}
										animate={{ opacity: 1, x: 0 }}
										className="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded transition-colors cursor-pointer"
									>
										<ChevronRight size={14} className="text-terminal-dim/30" />
										<span className="text-xs text-terminal-dim group-hover:text-terminal-text">
											{item.name}
										</span>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				) : (
					<div className="mt-20 flex flex-col items-center justify-center text-center px-6 opacity-30 grayscale">
						<Cpu size={40} className="mb-4 text-terminal-dim" />
						<p className="text-[10px] uppercase font-bold tracking-widest leading-loose">
							Workspace Offline
							<br />
							Run /init to connect
						</p>
					</div>
				)}
			</div>

			{/* Footer Metrics & Reset */}
			<div className="p-4 bg-black/40 border-t border-white/5 space-y-4">
				<div className="space-y-3">
					<div className="flex items-center justify-between text-[10px] text-terminal-dim">
						<div className="flex items-center gap-1.5">
							<BarChart3 size={12} />
							<span>METRIC: URGENCY</span>
						</div>
						<span className="text-red-500 font-bold">CRITICAL</span>
					</div>
					<div className="flex items-center justify-between text-[10px] text-terminal-dim">
						<div className="flex items-center gap-1.5">
							<Database size={12} />
							<span>STORAGE: SHARED</span>
						</div>
						<span className="text-terminal-text">1.2GB</span>
					</div>
				</div>

				<button
					onClick={() => {
						if (
							window.confirm(
								"WARNING: This will purge all session data and local cache. Continue?",
							)
						) {
							onReset?.();
						}
					}}
					className="w-full py-2 bg-red-950/20 hover:bg-red-950/40 border border-red-900/30 text-red-500/80 hover:text-red-500 text-[10px] font-black uppercase tracking-[0.2em] rounded transition-all flex items-center justify-center gap-2 group"
				>
					<div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse group-hover:scale-125 transition-transform" />
					START_OVER.EXE
				</button>
			</div>
		</aside>
	);
};

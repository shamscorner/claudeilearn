interface SidebarProps {
	files?: string[];
	logs?: string[];
}

export function Sidebar({ files, logs }: SidebarProps) {
	return (
		<div className="w-64 h-full bg-[#0a0a0a] border-l border-[#222] flex flex-col">
			<div className="p-3 border-b border-[#222]">
				<h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
					Files
				</h3>
			</div>
			<div className="flex-1 overflow-auto p-2">
				{files && files.length > 0 ? (
					<div className="space-y-1">
						{files.map((file, idx) => (
							<div
								key={idx}
								className="text-xs text-gray-400 hover:text-[#00ff00] cursor-pointer py-1 px-2 hover:bg-[#151515] rounded"
							>
								{file}
							</div>
						))}
					</div>
				) : (
					<div className="text-xs text-gray-600 italic p-2">
						No files loaded
					</div>
				)}
			</div>

			<div className="p-3 border-t border-[#222]">
				<h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
					Logs
				</h3>
			</div>
			<div className="flex-1 overflow-auto p-2">
				{logs && logs.length > 0 ? (
					<div className="space-y-1">
						{logs.map((log, idx) => (
							<div key={idx} className="text-xs text-gray-500 py-1">
								{log}
							</div>
						))}
					</div>
				) : (
					<div className="text-xs text-gray-600 italic p-2">No logs</div>
				)}
			</div>
		</div>
	);
}

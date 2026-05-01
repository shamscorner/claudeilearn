import { Link } from "@tanstack/react-router";

export function Notfound() {
	return (
		<div className="min-h-dvh bg-[#0a0a0a] relative overflow-hidden">
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-20 left-10 w-2 h-2 bg-[#DE7356] rounded-full animate-pulse" />
				<div className="absolute top-40 right-20 w-1 h-1 bg-[#DE7356] rounded-full animate-pulse" />
				<div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#DE7356] rounded-full animate-pulse" />
				<div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#DE7356] rounded-full animate-pulse" />
			</div>

			<div className="absolute inset-0 bg-[linear-gradient(transparent_50%,_rgba(222,115,86,0.03)_50%)] bg-[length:100%_4px]" />

			<div className="min-h-dvh flex items-center justify-center p-8 relative z-10">
				<div className="flex flex-col items-center gap-8">
					<div className="text-center">
						<div className="mb-4 text-[#DE7356] text-sm font-mono tracking-[0.3em]">
							_/error/404_
						</div>
						<h1 className="text-7xl font-bold text-white tracking-tight">
							Page<span className="text-[#DE7356]">NotFound</span>
						</h1>
						<div className="mt-4 h-px w-48 bg-gradient-to-r from-transparent via-[#DE7356] to-transparent mx-auto" />
						<p className="mt-6 text-gray-400 text-lg font-mono">
							The requested path does not exist
						</p>
					</div>

					<Link
						to="/"
						className="group relative px-8 py-5 text-xl font-bold text-[#DE7356] border-2 border-[#DE7356] rounded overflow-hidden transition-all duration-300 hover:bg-[#DE7356] hover:text-black"
					>
						<span className="absolute inset-0 bg-[#DE7356]/10 animate-pulse opacity-0 group-hover:opacity-100" />
						<span className="relative z-10 flex items-center justify-between font-mono">
							<span>▶ RETURN HOME</span>
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

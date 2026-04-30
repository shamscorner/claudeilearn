import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Sidebar } from "./-components/sidebar";
import { Terminal } from "./-components/terminal";
import { useGameState } from "./-hooks/use-game-state";
import game2Css from "./styles.css?url";

export const Route = createFileRoute("/game-1/")({
	component: RouteComponent,
	head: () => ({
		links: [{ rel: "stylesheet", href: game2Css }],
	}),
});

function RouteComponent() {
	const {
		currentLevel,
		history,
		handleCommand,
		resetGame,
		isTyping,
		isSuccess,
		filesVisible,
		currentLevelIndex,
		totalLevels,
	} = useGameState();

	const progress = (currentLevelIndex / totalLevels) * 100;

	return (
		<div className="flex h-screen w-full bg-[#0d0d0d] overflow-hidden text-terminal-text selection:bg-terminal-accent/30 selection:text-white">
			{/* Background Ambience */}
			<div className="fixed inset-0 opacity-[0.03] pointer-events-none">
				<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
			</div>

			<Sidebar
				visible={filesVisible}
				activePhase={currentLevel.phase}
				phaseColor={currentLevel.phaseColor}
				progress={progress}
				onReset={resetGame}
			/>

			<main className="flex-1 flex flex-col p-6 min-h-0 relative">
				<div className="flex-1 min-h-0 relative z-0">
					<Terminal
						history={history}
						onCommand={handleCommand}
						isTyping={isTyping}
						isSuccess={isSuccess}
						learningHook={currentLevel.learningHook}
						currentLevelTitle={currentLevel.title}
						phaseColor={currentLevel.phaseColor}
						commandInfo={{
							description: currentLevel.commandDescription,
							example: currentLevel.commandExample,
						}}
					/>
				</div>

				{/* Ambient Overlay for Scenes */}
				<AnimatePresence>
					{currentLevel.scene.visualEffect === "glitch" && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.1 }}
							exit={{ opacity: 0 }}
							className="absolute inset-0 bg-red-500 pointer-events-none mix-blend-overlay animate-pulse"
						/>
					)}
				</AnimatePresence>
			</main>
		</div>
	);
}

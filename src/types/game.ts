export type DialogueEntryType = "narrative" | "urgent" | "internal" | "slack";

export interface DialogueEntry {
	speaker: string;
	text: string;
	type: DialogueEntryType;
}

export type VisualEffect = "glitch" | "rain" | "fade";

export interface Scene {
	description: string;
	visualEffect?: VisualEffect;
}

export interface Level {
	id: number;
	phase: string;
	title: string;
	command: string;
	commandDescription: string;
	commandExample: string;
	scene: Scene;
	dialogue: DialogueEntry[];
	output: string | string[];
	learningHook: string;
	hint?: string;
	autoSuccess?: boolean;
}

export interface GameState {
	currentLevel: number;
	history: string[];
	progress: number;
	isComplete: boolean;
	isDialogueOpen: boolean;
}

export type GameAction =
	| { type: "SUBMIT_COMMAND"; command: string }
	| { type: "NEXT_LEVEL" }
	| { type: "TOGGLE_DIALOGUE" }
	| { type: "RESET" };

export const initialGameState: GameState = {
	currentLevel: 1,
	history: [],
	progress: 0,
	isComplete: false,
	isDialogueOpen: true,
};

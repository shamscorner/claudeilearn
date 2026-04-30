export type Command = {
	id: string;
	name: string;
	description: string;
};

export type Scene = {
	description: string;
	visualEffect?: "glitch" | "rain" | "fade";
};

export type DialogueEntry = {
	speaker: string;
	text: string;
	type: "narrative" | "urgent" | "internal" | "slack";
};

export type Level = {
	id: number;
	phase: string;
	phaseColor?: string; // Tailwind color class like 'text-cyan-400'
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
};

export const LEVELS: Level[] = [
	{
		id: 1,
		phase: "THE BREACH",
		phaseColor: "text-cyan-400",
		title: "claude",
		command: "claude",
		commandDescription:
			"The master key. It opens the portal to the AI interface.",
		commandExample: "claude",
		scene: {
			description:
				"Rain lashes against the data center roof. You've bypassed the first layer of ICE. The screen is a void waiting for a spark.",
			visualEffect: "fade",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "You're in. The system is cold. Boot the CLI before the active tracers find your shadow.",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Time to see if the legends about Claude Code are true.",
				type: "internal",
			},
		],
		output: [
			"Claude Code Terminal v2.1.123-stable",
			"Core Loaded: Anthropic Reasoning Engine",
			"",
			"Welcome, Operator. System ready.",
		],
		learningHook:
			"Every journey into the machine starts with a single command.",
	},
	{
		id: 2,
		phase: "THE BREACH",
		phaseColor: "text-cyan-400",
		title: 'claude "<query>"',
		command: 'claude "<query>"',
		commandDescription:
			"A direct logic probe. Ask a question and get the ground truth.",
		commandExample: 'claude "analyze system"',
		scene: {
			description:
				"The terminal pulse glows. The room smells like ozone and server exhaust.",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "Don't just idle. Probe it. We need to know the architecture of this fortress.",
				type: "narrative",
			},
			{
				speaker: "You",
				text: "Running a general heuristic scan.",
				type: "internal",
			},
		],
		output: [
			"Analyzing system topology...",
			"Detected: 4 redundant nodes, 1 central database cluster.",
			"Threat Level: ELEVATED (Active surveillance detected).",
		],
		learningHook:
			"Query mode allows for immediate, context-free reconnaissance.",
	},
	{
		id: 3,
		phase: "THE BREACH",
		phaseColor: "text-cyan-400",
		title: "claude -p",
		command: "claude -p",
		commandDescription:
			"Headless query. High speed, low drag. Get out before they see you.",
		commandExample: 'claude -p "who is logged in"',
		scene: {
			description:
				"Multiple terminals flicker. You're juggling three connections at once.",
		},
		dialogue: [
			{
				speaker: "System",
				text: "[ALERT] Trace attempt identified. Connection duration exceeded thresholds.",
				type: "urgent",
			},
			{
				speaker: "Handler",
				text: "Shut down the interactive session! Use the pipe flag for quick hits only.",
				type: "slack",
			},
		],
		output: [
			"Headless request initiated...",
			"Result: admin_vault_keeper, root_daemon_v2",
			"Process terminated. Connection severed.",
		],
		learningHook:
			"-p (or --print) is for surgical strikes where you don't need a persistent session.",
	},
	{
		id: 4,
		phase: "THE BREACH",
		phaseColor: "text-cyan-400",
		title: "claude -c",
		command: "claude -c",
		commandDescription:
			"Timeline recovery. Pick up the pieces of a fragmented conversation.",
		commandExample: "claude -c",
		scene: {
			description: "The screen glitches. Data streams backward.",
			visualEffect: "glitch",
		},
		dialogue: [
			{
				speaker: "You",
				text: "Damn! Connection dropped. I didn't save the results of that grep scan.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Relax. The engine keeps a temporal shadow. Use the continue flag.",
				type: "narrative",
			},
		],
		output: [
			"Restoring last known good state...",
			"Conversation 'System Analysis' resumed at 16:04:22.",
			"Context parity: 100%",
		],
		learningHook: "The -c flag is your undo-the-disconnect button.",
	},
	{
		id: 5,
		phase: "THE BREACH",
		phaseColor: "text-cyan-400",
		title: "claude -r",
		command: "claude -r",
		commandDescription:
			"Targeted history retrieval. Load a specific node from your past.",
		commandExample: 'claude -r "incident-04"',
		scene: {
			description: "A list of old session IDs scrolls past like ghost data.",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "There was a breach last Tuesday—'incident-04'. We need the exact logic the AI used then.",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Re-activating the past. Let's see what the previous op missed.",
				type: "internal",
			},
		],
		output: [
			"Loading session 'incident-04'...",
			"Warning: This session contains unredacted root credentials.",
			"Ready for interaction.",
		],
		learningHook:
			"Named sessions allow you to jump back into specific workflows by name.",
	},
	{
		id: 6,
		phase: "THE BREACH",
		phaseColor: "text-cyan-400",
		title: "claude update",
		command: "claude update",
		commandDescription:
			"Evolution protocol. Sharpen your tools for the coming fight.",
		commandExample: "claude update",
		scene: { description: "The command line text feels outdated and slow." },
		dialogue: [
			{
				speaker: "System",
				text: "Your current build is vulnerable to latest Patch V4. Secure the link.",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Can't fight with a dull blade.",
				type: "internal",
			},
		],
		output: [
			"Fetching update manifest...",
			"Downloading Core V1.1.0 (Advanced Reasoning Module)...",
			"Update complete. Engine restarted.",
		],
		learningHook:
			"Keeping the CLI updated ensures access to the latest models and security fixes.",
	},
	{
		id: 7,
		phase: "THE BREACH",
		phaseColor: "text-cyan-400",
		title: "claude auth status",
		command: "claude auth status",
		commandDescription:
			"Identity verification. Confirm your presence in the machine.",
		commandExample: "claude auth status",
		scene: {
			description: "A retinal scanner beam passes over your input.",
			visualEffect: "fade",
		},
		dialogue: [
			{
				speaker: "You",
				text: "I'm hitting a wall on the /secrets directory. Do I even have the keys?",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Check your active token status. Maybe it expired during the jump.",
				type: "slack",
			},
		],
		output: [
			"Authentication Status:",
			"Account: shadows_of_dhaka@anthropic",
			"Status: ACTIVE",
			"Scopes: full_fs_access, network_relay",
		],
		learningHook:
			"Always check your credentials before attempting a high-clearance operation.",
	},
	{
		id: 8,
		phase: "THE BREACH",
		phaseColor: "text-cyan-400",
		title: "/help",
		command: "/help",
		commandDescription:
			"The ultimate cheat sheet. When in doubt, read the manual.",
		commandExample: "/help",
		scene: {
			description:
				"You stare at the blinking cursor. The architecture is too complex.",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "Don't just guess. The AI has built-in documentation. Use it.",
				type: "narrative",
			},
			{
				speaker: "You",
				text: "Let's see what else this monster can do.",
				type: "internal",
			},
		],
		output: [
			"Available Internal Commands:",
			"  /init    - Initialize context",
			"  /edit    - Modify logic",
			"  /doctor  - Health check",
			"Full list displayed.",
		],
		learningHook: "/help is context-aware and changes based on where you are.",
	},
	{
		id: 9,
		phase: "THE BREACH",
		phaseColor: "text-cyan-400",
		title: "/login",
		command: "/login",
		commandDescription:
			"Secure handshake. Synchronize with the Anthropic hive mind.",
		commandExample: "/login",
		scene: {
			description: "The terminal demands a secondary authentication factor.",
		},
		dialogue: [
			{
				speaker: "System",
				text: "Session timeout. Re-authentication required for root access.",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "I'm losing my grip on the server. Logging back in.",
				type: "internal",
			},
		],
		output: [
			"Handshake initiated...",
			"Waiting for browser approval...",
			"✔ Connection established. Welcome back, Operator.",
		],
		learningHook: "/login handles the OAuth flow to keep your session secure.",
	},
	{
		id: 10,
		phase: "THE BREACH",
		phaseColor: "text-cyan-400",
		title: "/doctor",
		command: "/doctor",
		commandDescription:
			"System diagnostic. Fix the tools so they can fix the code.",
		commandExample: "/doctor",
		scene: {
			description:
				"The terminal text is jittering. Something is misconfigured.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "The shell is acting up. It's not picking up my environment variables.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Run the doctor. It'll find the mismatch in the config.",
				type: "slack",
			},
		],
		output: [
			"Diagnostic Report:",
			"✔ Anthropic API: Reachable",
			"✔ Node.js Version: Compatible",
			"✔ Permissions: Correct",
			"All systems functional.",
		],
		learningHook:
			"When the CLI misbehaves, /doctor is the first line of defense.",
	},
	{
		id: 11,
		phase: "DEEP SCAN",
		phaseColor: "text-green-400",
		title: "/init",
		command: "/init",
		commandDescription:
			"Neural mapping. Deep-scan the project and generate a CLAUDE.md guide.",
		commandExample: "/init",
		scene: {
			description: "The file tree is a forest of millions of lines of code.",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "You're flying blind. You need to map the architecture before you can dismantle it.",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Let's give the AI eyes. Mapping the repo now.",
				type: "internal",
			},
		],
		output: [
			"Scanning directories...",
			"✔ Indexed 42,000 files.",
			"✔ Created CLAUDE.md guidelines.",
			"Context mapping complete.",
		],
		learningHook:
			"/init creates a persistence layer that helps Claude understand the project's 'soul'.",
	},
	{
		id: 12,
		phase: "DEEP SCAN",
		phaseColor: "text-green-400",
		title: "/add-dir",
		command: "/add-dir",
		commandDescription:
			"Expand sensor range. Bring external data into your neural net.",
		commandExample: "/add-dir ../secrets",
		scene: {
			description:
				"You're locked in a sandbox. The answers are in the parent folder.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "The config is in the root, but I'm stuck in the subfolder.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Link the directories. Don't let the file system limit your reach.",
				type: "narrative",
			},
		],
		output: [
			"Accessing external path: ../secrets",
			"✔ Directory added to active context.",
			"Searching for sensitive data...",
		],
		learningHook:
			"/add-dir allows Claude to see files outside its initial scope.",
	},
	{
		id: 13,
		phase: "DEEP SCAN",
		phaseColor: "text-green-400",
		title: "/agents",
		command: "/agents",
		commandDescription:
			"Summon clones. Deploy specialized sub-agents for parallel processing.",
		commandExample: "/agents",
		scene: { description: "A hundred tasks need to happen simultaneously." },
		dialogue: [
			{
				speaker: "Handler",
				text: "One mind is not enough. You need specialized agents for testing, style, and security.",
				type: "urgent",
			},
			{ speaker: "You", text: "Deploying the swarm.", type: "internal" },
		],
		output: [
			"Active Agents:",
			"  - security_auditor (IDLE)",
			"  - test_runner (IDLE)",
			"Deploying sub-agents...",
		],
		learningHook:
			"Agents allow you to delegate complex tasks to specialized sub-routines.",
	},
	{
		id: 14,
		phase: "DEEP SCAN",
		phaseColor: "text-green-400",
		title: "/autofix-pr",
		command: "/autofix-pr",
		commandDescription:
			"Automated vigilante. Monitor the pipeline and push fixes as they happen.",
		commandExample: "/autofix-pr",
		scene: { description: "GitHub actions are failing in a sea of red text." },
		dialogue: [
			{
				speaker: "Team",
				text: "The CI is broken! We're losing billions every minute!",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "I'll let Claude watch the PR and repair it in real-time.",
				type: "internal",
			},
		],
		output: [
			"Monitoring PR #402...",
			"Detected failure in 'unit-tests'.",
			"Analyzing error... Applying fix... Done.",
		],
		learningHook:
			"Autofix-PR creates a loop where tests guide the AI to a solution.",
	},
	{
		id: 15,
		phase: "SURGICAL STRIKE",
		phaseColor: "text-yellow-400",
		title: "/batch",
		command: "/batch",
		commandDescription:
			"Mass manipulation. Apply a logic pattern across a thousand nodes.",
		commandExample: '/batch "update encryption"',
		scene: {
			description: "Every file in the system is using an old, weak cipher.",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "The encryption is compromised across the entire stack. We need total replacement, now.",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Applying the patch globally. Let the AI handle the grunt work.",
				type: "internal",
			},
		],
		output: [
			"Batch job: 'Update Encryption'",
			"Files affected: 890",
			"Status: [||||||||||] 100% complete.",
		],
		learningHook:
			"/batch is for when you need to do the same thing in many places without repeating yourself.",
	},
	{
		id: 16,
		phase: "SURGICAL STRIKE",
		phaseColor: "text-yellow-400",
		title: "/branch",
		command: "/branch",
		commandDescription:
			"Temporal fork. Create a safe timeline to test a dangerous theory.",
		commandExample: "/branch plan-b",
		scene: {
			description: "You have a high-risk idea that might crash the whole grid.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "I want to try rewiring the database, but if it fails, we're dead.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Fork the conversation. If plan B fails, we just delete the timeline.",
				type: "narrative",
			},
		],
		output: [
			"Conversation branched to 'plan-b'.",
			"Original timeline 'main' preserved.",
			"Working on ephemeral context...",
		],
		learningHook:
			"/branch lets you experiment without polluting your main conversation history.",
	},
	{
		id: 17,
		phase: "SURGICAL STRIKE",
		phaseColor: "text-yellow-400",
		title: "/btw",
		command: "/btw",
		commandDescription:
			"Contextual detour. Ask a side quest question without losing your place.",
		commandExample: '/btw "what does AES mean"',
		scene: {
			description: "In the middle of a complex hack, a term confuses you.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "Wait, the handler mentioned AES-256. What does that actually mean?",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Don't stop the flow! Ask Claude on the side.",
				type: "slack",
			},
		],
		output: [
			"Quick Query (BTW):",
			"AES: Advanced Encryption Standard. 256 refers to the key size.",
			"Resuming main task...",
		],
		learningHook:
			"/btw is perfect for quick definitions or facts that don't need full context.",
	},
	{
		id: 18,
		phase: "SURGICAL STRIKE",
		phaseColor: "text-yellow-400",
		title: "/chrome",
		command: "/chrome",
		commandDescription:
			"Peripheral sync. Link the terminal to your browser for ultimate oversight.",
		commandExample: "/chrome",
		scene: {
			description: "The GUI is showing a different error than the backend.",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "Sync your browser. Let Claude see what the end user sees.",
				type: "narrative",
			},
			{
				speaker: "You",
				text: "Linking Chrome sessions. Crossing the streams.",
				type: "internal",
			},
		],
		output: [
			"Opening Chrome Settings...",
			"✔ Extension synchronized.",
			"Web context now accessible to Claude.",
		],
		learningHook:
			"/chrome bridges the gap between terminal and browser-based development.",
	},
	{
		id: 19,
		phase: "SURGICAL STRIKE",
		phaseColor: "text-yellow-400",
		title: "/claude-api",
		command: "/claude-api",
		commandDescription:
			"Developer's Bible. Instant access to the SDK and API blueprints.",
		commandExample: "/claude-api",
		scene: {
			description: "You're writing a script to automate the AI itself.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "How do I trigger a streaming response via the SDK?",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Pull the API reference directly into the shell.",
				type: "slack",
			},
		],
		output: [
			"Loading Claude API Documentation...",
			"Reference: [google/genai] v1.0.2",
			"Sections: Models, Streaming, Functions.",
		],
		learningHook:
			"/claude-api puts the documentation for your most powerful tool right where you work.",
	},
	{
		id: 20,
		phase: "SURGICAL STRIKE",
		phaseColor: "text-yellow-400",
		title: "/clear",
		command: "/clear",
		commandDescription:
			"Cognitive reset. Wipe the noise and focus the AI on a new objective.",
		commandExample: "/clear",
		scene: {
			description:
				"The screen is a mess of old logs, errors, and irrelevant data.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "Too much trash in the history. Claude is getting confused by old context.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Burn it all. Start a clean thread.",
				type: "narrative",
			},
		],
		output: [
			"Purging active context...",
			"History cleared. Neural net reset.",
			"Awaiting fresh input.",
		],
		learningHook:
			"/clear is essential for removing 'context drift' and focusing on new problems.",
	},

	{
		id: 21,
		phase: "SURGICAL STRIKE",
		phaseColor: "text-yellow-400",
		title: "/keybindings",
		command: "/keybindings",
		commandDescription:
			"Reflex optimization. Customize your interface for combat speed.",
		commandExample: "/keybindings",
		scene: {
			description: "The tracer is catching up. Every millisecond counts.",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "You're typing like a junior! Bind your frequent commands to shortcuts if you want to survive the next layer.",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Opening the mapping file. I need /grep on a hotkey.",
				type: "internal",
			},
		],
		output: [
			"Loading keybindings.json...",
			"✔ Layout loaded.",
			"Hint: Use Alt+S for quick status checks.",
		],
		learningHook:
			"Custom keybindings allow you to execute complex AI workflows with simple keystrokes.",
	},
	{
		id: 22,
		phase: "SURGICAL STRIKE",
		phaseColor: "text-yellow-400",
		title: "/color",
		command: "/color",
		commandDescription:
			"Atmospheric shift. Change the visual frequency of your command bar.",
		commandExample: "/color red",
		scene: {
			description: "You enter the high-security 'Red Zone' of the server grid.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "It's getting intense. I need a visual reminder that I'm in a dangerous environment.",
				type: "internal",
			},
			{
				speaker: "System",
				text: "[WARNING] Entering production shell. Error margin: ZERO.",
				type: "urgent",
			},
		],
		output: ["Prompt theme updated: CRITICAL RED", "Mood set: High Alert."],
		learningHook:
			"Color cues help prevent 'accidental production edits' by giving you immediate visual feedback.",
	},
	{
		id: 23,
		phase: "THE CORE HACK",
		phaseColor: "text-orange-400",
		title: "/compact",
		command: "/compact",
		commandDescription:
			"Information distillation. Compress the conversation to save neural bandwidth.",
		commandExample: "/compact",
		scene: {
			description:
				"Claude is starting to stutter. The context window is overflowing with data.",
		},
		dialogue: [
			{
				speaker: "System",
				text: "Memory threshold reached. Performance may degrade.",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "We've talked too much. Summarize everything and keep only the essentials.",
				type: "internal",
			},
		],
		output: [
			"Compacting history...",
			"Tokens reduced from 120k to 15k.",
			"Critical context preserved: [System Topology, Encrypted Keys, plan-b].",
		],
		learningHook:
			"/compact helps you stay within the model's 'best performance' range by summarizing long histories.",
	},
	{
		id: 24,
		phase: "THE CORE HACK",
		phaseColor: "text-orange-400",
		title: "/config",
		command: "/config",
		commandDescription:
			"The control room. Fine-tune the engine's behavior and ethics.",
		commandExample: "/config",
		scene: {
			description:
				"Claude is being too verbose. You need short, tactical responses.",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "The AI is lecturing you on best practices! We don't have time! Set the verbosity to 'concise'.",
				type: "slack",
			},
			{ speaker: "You", text: "Opening the brain settings.", type: "internal" },
		],
		output: [
			"Interactive Config Menu Opened.",
			"Options: Verbosity, Theme, Command Confirmation.",
			"✔ Saved: Conciseness set to MAX.",
		],
		learningHook:
			"/config allows you to customize the personality and safety guardrails of the AI assistant.",
	},
	{
		id: 25,
		phase: "THE CORE HACK",
		phaseColor: "text-orange-400",
		title: "/logout",
		command: "/logout",
		commandDescription:
			"Sever the link. Ghost the session and leave no traces.",
		commandExample: "/logout",
		scene: {
			description:
				"Tracer sirens blare. Blue and red lights sweep across the data logs.",
			visualEffect: "glitch",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "THEY'RE IN THE PIPELINE! DUMP THE CREDENTIALS AND RUN!",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Emergency disconnect! Kill the tokens!",
				type: "internal",
			},
		],
		output: [
			"Revoking active tokens...",
			"Clearing local session cookies...",
			"Disconnected. Ghost mode active.",
		],
		learningHook:
			"/logout is the proper way to ensure your development secrets aren't left on an untrusted machine.",
	},
	{
		id: 26,
		phase: "THE CORE HACK",
		phaseColor: "text-orange-400",
		title: "/loop",
		command: "/loop",
		commandDescription:
			"Recurrent vigilance. Automate a prompt to watch for specific state changes.",
		commandExample: '/loop 1m "check server status"',
		scene: {
			description:
				"You need to wait for the database migration to finish, but you can't stare at the logs forever.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "I'll let Claude ping the migration status every 60 seconds while I work on the frontend.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Smart move. Set it and forget it.",
				type: "narrative",
			},
		],
		output: [
			"Scheduling loop...",
			"Prompt: 'check server status'",
			"Interval: 1m",
			"Current Status: [PENDING]",
		],
		learningHook:
			"/loop is a powerful way to create 'custom observability' tools using natural language.",
	},
	{
		id: 27,
		phase: "THE CORE HACK",
		phaseColor: "text-orange-400",
		title: "/context",
		command: "/context",
		commandDescription:
			"Neural visualization. See exactly what the AI 'knows' right now.",
		commandExample: "/context",
		scene: {
			description:
				"You're not sure if Claude 'remembered' the fix you made in the other file.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "Is the AI aware of the new auth middleware?",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Check its vision grid. See which files are loaded in its active memory.",
				type: "slack",
			},
		],
		output: [
			"Context Visualization:",
			"✔ src/auth/middleware.ts (ACTIVE)",
			"✔ src/api/routes.ts (ACTIVE)",
			"Memory Pressure: LOW (2,402 tokens used)",
		],
		learningHook:
			"/context help you debug 'why the AI forgot something' by showing you its active attention span.",
	},
	{
		id: 28,
		phase: "THE CORE HACK",
		phaseColor: "text-orange-400",
		title: "/copy",
		command: "/copy",
		commandDescription:
			"Artifact extraction. Snap the AI's last output to your system clipboard.",
		commandExample: "/copy",
		scene: {
			description:
				"Claude just generated a complex regex that you need to paste into your IDE.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "That's it! That's the perfect script. I need to move it to the deployment pipeline.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Quick, copy the artifact before the session times out.",
				type: "narrative",
			},
		],
		output: [
			"Captured last assistant response.",
			"✔ Copied 1,240 characters to clipboard.",
			"Ready to paste.",
		],
		learningHook:
			"/copy is a quality-of-life command that speeds up the transfer of AI-generated assets.",
	},
	{
		id: 29,
		phase: "THE CORE HACK",
		phaseColor: "text-orange-400",
		title: "/mcp",
		command: "/mcp",
		commandDescription:
			"Universal bridge. Connect to Model Context Protocol servers for external tools.",
		commandExample: "/mcp",
		scene: {
			description:
				"You need to access a proprietary database that Claude doesn't know about natively.",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "Link up with the Central Logistics MCP. It'll give Claude direct SQL access.",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Bridging the protocols. Connecting the silos.",
				type: "internal",
			},
		],
		output: [
			"Connecting to MCP Servers...",
			"✔ Postgres Connector (ONLINE)",
			"✔ GitHub Toolset (ONLINE)",
			"Shared capabilities updated.",
		],
		learningHook:
			"MCP is the standard way to give Claude 'hands'—tools like SQL, Brave Search, or GitHub access.",
	},
	{
		id: 30,
		phase: "THE CORE HACK",
		phaseColor: "text-orange-400",
		title: "/memory",
		command: "/memory",
		commandDescription:
			"Permanent imprint. Update persistent guides so the AI never forgets your rules.",
		commandExample: "/memory",
		scene: {
			description:
				"You've established a new coding standard, and you want it to stick forever.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "From now on, all APIs must use JSDoc. I don't want to explain this again.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Write it into the memory. Teach the AI your philosophy.",
				type: "narrative",
			},
		],
		output: [
			"Updating persistent guidelines...",
			"✔ Modified CLAUDE.md",
			"✔ Updated .claude/memory.json",
			"Knowledge locked in.",
		],
		learningHook:
			"/memory is how you ensure Claude stays consistent across different shell sessions.",
	},
	{
		id: 31,
		phase: "THE CORE HACK",
		phaseColor: "text-orange-400",
		title: "/cost",
		command: "/cost",
		commandDescription:
			"Financial audit. Track your token burn rate and session metadata.",
		commandExample: "/cost",
		scene: {
			description:
				"You've been hacking for 12 hours straight. The API bill is looming.",
		},
		dialogue: [
			{
				speaker: "FinOps",
				text: "Watch your spend! You're using Opus for basic tasks!",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Let's check the damage. How many tokens did that batch refactor cost?",
				type: "internal",
			},
		],
		output: [
			"Session Financial Report:",
			"Tokens In: 1.2M",
			"Tokens Out: 400k",
			"Total Estimated Cost: $14.50",
			"Usage is within monthly quota.",
		],
		learningHook:
			"/cost (alias for /usage) keeps you aware of the real-world resources the AI is consuming.",
	},
	{
		id: 32,
		phase: "THE CORE HACK",
		phaseColor: "text-orange-400",
		title: "/mobile",
		command: "/mobile",
		commandDescription:
			"Untethered access. Move the session to your personal device for mobile ops.",
		commandExample: "/mobile",
		scene: {
			description:
				"You have to evacuate the safehouse now, but the hack is only 50% done.",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "Sourcing! The building is compromised. Take the session to go!",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Generating the handover code. I'll finish this on the train.",
				type: "internal",
			},
		],
		output: [
			"Generating mobile bridge link...",
			"Scan QR to resume on iOS/Android.",
			"[QR Image Placeholder]",
			"Connection state mirrored.",
		],
		learningHook:
			"/mobile allows for seamless handoff between the desktop CLI and the mobile web app.",
	},
	{
		id: 33,
		phase: "THE CORE HACK",
		phaseColor: "text-orange-400",
		title: "/debug",
		command: "/debug",
		commandDescription:
			"Matrix vision. See the raw JSON traffic between the CLI and the AI.",
		commandExample: "/debug",
		scene: {
			description: "Claude is giving a weird response that doesn't make sense.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "Something is getting lost in translation. I need to see the raw request.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Turn on the debug logs. See the hidden conversation.",
				type: "slack",
			},
		],
		output: [
			"Debug Mode: ENABLED",
			"Logging level: TRACE",
			"Dump: { 'model': 'claude-3-5-sonnet', 'system': '...' }",
		],
		learningHook:
			"/debug is for developers who want to troubleshoot tool calls and network issues.",
	},
	{
		id: 34,
		phase: "THE CORE HACK",
		phaseColor: "text-orange-400",
		title: "/desktop",
		command: "/desktop",
		commandDescription:
			"GUI escalation. Switch to the full richness of the Claude Desktop app.",
		commandExample: "/desktop",
		scene: {
			description:
				"The terminal text is too limiting for a massive architectural diagram.",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "You need to see the visualizations. Switch to the desktop app HUD.",
				type: "narrative",
			},
			{
				speaker: "You",
				text: "Terminating CLI. Moving to the cockpit.",
				type: "internal",
			},
		],
		output: [
			"Locating Claude Desktop...",
			"✔ Synchronizing local files.",
			"✔ Handing over active conversation...",
			"Process detached. See you on the other side.",
		],
		learningHook:
			"/desktop transitions you from the CLI to a more visual, multi-modal editing environment.",
	},
	{
		id: 35,
		phase: "THE CORE HACK",
		phaseColor: "text-orange-400",
		title: "/model",
		command: "/model",
		commandDescription:
			"Neural swap. Switch between different brains for speed or deep reasoning.",
		commandExample: "/model",
		scene: {
			description:
				"The problem is getting too complex for Sonnet. You need the big guns.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "It's hitting a wall on the logic puzzle. I need to switch to Opus.",
				type: "internal",
			},
			{ speaker: "Handler", text: "Do it. Use more power.", type: "urgent" },
		],
		output: [
			"Available Models:",
			"  - claude-3-5-sonnet (CURRENT)",
			"  - claude-3-opus",
			"✔ Switched to Opus. Cognitive capacity increased.",
		],
		learningHook:
			"/model lets you pick the right balance of cost, speed, and intelligence for specific sub-tasks.",
	},
	{
		id: 36,
		phase: "THE CORE HACK",
		phaseColor: "text-orange-400",
		title: "/diff",
		command: "/diff",
		commandDescription:
			"Safe comparison. Review the AI's proposed changes before they touch your disks.",
		commandExample: "/diff",
		scene: {
			description:
				"Claude wrote 500 lines of code. You need to be sure it's not a Trojan.",
		},
		dialogue: [
			{
				speaker: "System",
				text: "[SECURITY CHECK] Un-reviewed changes pending in memory buffer.",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Show me the delta. Line by line.",
				type: "internal",
			},
		],
		output: [
			"Opening Interactive Diff Viewer...",
			"[-] const result = query();",
			"[+] const result = await secureQuery();",
			"Ready for approval.",
		],
		learningHook:
			"/diff ensures that you remain in control of every single character added to your project.",
	},
	{
		id: 37,
		phase: "THE CORE HACK",
		phaseColor: "text-orange-400",
		title: "/passes",
		command: "/passes",
		commandDescription:
			"Recruitment protocol. Share the power of Claude Code with a fellow operative.",
		commandExample: "/passes",
		scene: {
			description:
				"A fellow dev is struggling with a legacy codebase and needs a hand.",
		},
		dialogue: [
			{
				speaker: "Colleague",
				text: "Man, I'm drowning in this spaghetti code. I wish I had your tools.",
				type: "slack",
			},
			{
				speaker: "You",
				text: "I'll send you a pass. Welcome to the future.",
				type: "internal",
			},
		],
		output: [
			"Generating 7-day Pro access link...",
			"Link created: anthropic.com/passes/xK89...",
			"Usage: 1/3 available.",
		],
		learningHook:
			"Passes allow you to invite team members to try the Pro features of Claude Code for free.",
	},
	{
		id: 38,
		phase: "SECURE THE PERIMETER",
		phaseColor: "text-red-400",
		title: "/permissions",
		command: "/permissions",
		commandDescription:
			"Trust management. Decide exactly what tools the AI is allowed to touch.",
		commandExample: "/permissions",
		scene: {
			description:
				"Claude is asking to run a bash script that deletes old logs.",
			visualEffect: "fade",
		},
		dialogue: [
			{
				speaker: "You",
				text: "The AI wants shell access. That's a huge risk.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Check your settings. Ensure 'allow_shell_execute' is off unless you trust the prompt.",
				type: "urgent",
			},
		],
		output: [
			"Global Permissions Settings:",
			"  - File Read: ALWAYS",
			"  - Shell Execute: ASK",
			"  - API Access: ALWAYS",
			"Updates saved.",
		],
		learningHook:
			"/permissions is the firewall between the AI and your operating system.",
	},
	{
		id: 39,
		phase: "SECURE THE PERIMETER",
		phaseColor: "text-red-400",
		title: "/effort",
		command: "/effort",
		commandDescription:
			"Cognitive overdrive. Force the model to spend more time thinking for higher quality.",
		commandExample: "/effort max",
		scene: {
			description: "The bug is so deep it requires 'transcendental' reasoning.",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "Normal thinking isn't finding the race condition. Turn up the effort. Let it burn cycles.",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Setting cognitive effort to MAX. Get me that solution.",
				type: "internal",
			},
		],
		output: [
			"Effort mode: MAXIMIZED",
			"Reasoning budget: 120s per response.",
			"Warning: This increased response latency.",
		],
		learningHook:
			"/effort allows you to throttle the model's 'depth of thought' for complex debugging.",
	},
	{
		id: 40,
		phase: "SECURE THE PERIMETER",
		phaseColor: "text-red-400",
		title: "/plan",
		command: "/plan",
		commandDescription:
			"Strategic visualization. Ask for a blueprint before any code is written.",
		commandExample: '/plan "restore database"',
		scene: { description: "The database is down. Panic is setting in." },
		dialogue: [
			{
				speaker: "You",
				text: "Claude, don't write it yet. Just give me the plan. We can't afford a single mistake.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Safety first. Review the steps before hitting execute.",
				type: "narrative",
			},
		],
		output: [
			"Phase 1: Backup current WAL logs.",
			"Phase 2: Verify snapshot integrity.",
			"Phase 3: Roll forward from point-in-time.",
			"Proceed? (y/n)",
		],
		learningHook:
			"/plan forces the AI to think out loud, allowing you to catch errors in its logic early.",
	},

	{
		id: 41,
		phase: "SECURE THE PERIMETER",
		phaseColor: "text-red-400",
		title: "/plugin",
		command: "/plugin",
		commandDescription:
			"Modular augmentation. Install specialized toolsets for cloud or database ops.",
		commandExample: "/plugin",
		scene: {
			description:
				"You need a specific AWS toolset that isn't in the base terminal.",
			visualEffect: "fade",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "Download the AWS security plugin. We need to audit their S3 buckets.",
				type: "narrative",
			},
			{
				speaker: "You",
				text: "Installing the extension. Let's see what's in the cloud.",
				type: "internal",
			},
		],
		output: [
			"Plugin Registry: ONLINE",
			"✔ AWS-Toolbelt (VERSION 2.1.0) installed.",
			"New commands available: aws-s3-scan, aws-iam-audit.",
		],
		learningHook:
			"Plugins (and MCP) are how you extend Claude's knowledge to specific third-party services.",
	},
	{
		id: 42,
		phase: "SECURE THE PERIMETER",
		phaseColor: "text-red-400",
		title: "/exit",
		command: "/exit",
		commandDescription:
			"Emergency extraction. Shutdown the terminal and disconnect from the network.",
		commandExample: "/exit",
		scene: {
			description:
				"The tracer is too close. The room is turning red from the security lockdown.",
			visualEffect: "glitch",
		},
		dialogue: [
			{
				speaker: "System",
				text: "[CRITICAL] Physical breach detected at Data Center Node 4.",
				type: "urgent",
			},
			{
				speaker: "Handler",
				text: "THEY'RE IN THE ROOM! EXIT! EXIT NOW!",
				type: "urgent",
			},
		],
		output: [
			"Terminating child processes...",
			"Shredding local session temp files...",
			"Connection severed. Goodbye, Operator.",
		],
		learningHook:
			"/exit is the standard way to end a session and cleanup temporary CLI resources.",
	},
	{
		id: 43,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/powerup",
		command: "/powerup",
		commandDescription:
			"Skill training. Interactive sim-data to level up your terminal expertise.",
		commandExample: "/powerup",
		scene: {
			description:
				"You're in a safehouse, waiting for the heat to die down. Time to train.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "I need to get faster with these sub-agents. Let's run a training sim.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Good idea. Sharpness is life in the terminal.",
				type: "narrative",
			},
		],
		output: [
			"Loading PowerUp Tutorial: 'Advanced Agent Orchestration'",
			"Lesson 1: Redirecting tool outputs.",
			"Progress: [>          ] 10%",
		],
		learningHook:
			"/powerup starts interactive lessons to help you master new features of Claude Code.",
	},
	{
		id: 44,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/export",
		command: "/export",
		commandDescription:
			"Data persistence. Save the conversation history to a permanent flat file.",
		commandExample: "/export log.txt",
		scene: {
			description:
				"You've successfully mapped the hack. Now you need to document it for the rebellion.",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "We need a readable record of the AI's logic for the trial. Export it.",
				type: "slack",
			},
			{
				speaker: "You",
				text: "Saving the logs. This will be the evidence that brings them down.",
				type: "internal",
			},
		],
		output: [
			"Compressing history for export...",
			"✔ File written to: log.txt",
			"Security Level: AES-256 Encrypted (Optional).",
		],
		learningHook:
			"/export is used to share conversation histories or keep them for external analysis.",
	},
	{
		id: 45,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/extra-usage",
		command: "/extra-usage",
		commandDescription:
			"Overclock protocol. Increase your rate limits for high-intensity operations.",
		commandExample: "/extra-usage",
		scene: { description: "You're in a race against a self-destruct timer." },
		dialogue: [
			{
				speaker: "System",
				text: "[LIMIT] API rate limit reached. Delaying next query by 40s.",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "I don't have 40 seconds! Overclock the usage now!",
				type: "internal",
			},
		],
		output: [
			"Authorizing extra usage tier...",
			"✔ Rate limits expanded by 500%.",
			"Caution: This may incur additional per-token surcharges.",
		],
		learningHook:
			"/extra-usage allows power users to bypass standard rate limits for mission-critical tasks.",
	},
	{
		id: 46,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/pr-comments",
		command: "/pr-comments",
		commandDescription:
			"Collaborative synthesis. Read the peer reviews directly in your CLI.",
		commandExample: "/pr-comments",
		scene: {
			description:
				"The senior architect has some notes on your emergency security patch.",
		},
		dialogue: [
			{
				speaker: "Lead",
				text: "Your logic at line 42 is risky. See my comment on the PR.",
				type: "slack",
			},
			{
				speaker: "You",
				text: "Pulling the comments into the terminal. Claude, analyze the feedback.",
				type: "internal",
			},
		],
		output: [
			"Fetching comments for PR #104...",
			"  - @senior_dev: 'Potential NullPointerException here.'",
			"  - @security_bot: 'Missing CSRF protection.'",
			"Claude ready to apply suggested fixes.",
		],
		learningHook:
			"/pr-comments helps you stay in the flow by bringing code review feedback into your development environment.",
	},
	{
		id: 47,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/privacy-settings",
		command: "/privacy-settings",
		commandDescription:
			"Data shielding. Manage how your code is handled by Anthropic's servers.",
		commandExample: "/privacy-settings",
		scene: {
			description: "You are dealing with a top-secret black-budget codebase.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "I can't let this source code be used for training. It's too dangerous.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Enable the privacy shield. Maximum isolation.",
				type: "urgent",
			},
		],
		output: [
			"Privacy Configuration:",
			"  - Training Data Opt-Out: ENABLED",
			"  - Persistence Level: EPHEMERAL",
			"Data protection: ACTIVE.",
		],
		learningHook:
			"/privacy-settings gives you control over your data footprint and how the AI learns from your work.",
	},
	{
		id: 48,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/fast",
		command: "/fast",
		commandDescription:
			"Low-latency mode. Sacrifice deep reasoning for sub-second responses.",
		commandExample: "/fast on",
		scene: {
			description:
				"You're doing repetitive syntax cleanup. Deep thought is a waste of time.",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "We're just fixing typos now. We need throughput, not a philosopher.",
				type: "narrative",
			},
			{
				speaker: "You",
				text: "Switching to high-speed mode. Let's blaze through this file.",
				type: "internal",
			},
		],
		output: [
			"Fast Mode: ENABLED",
			"Target latency: <500ms",
			"Model: claude-3-haiku-optimized",
		],
		learningHook:
			"/fast is best for simple edits, translations, or boilerplate generation where speed is king.",
	},
	{
		id: 49,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/recap",
		command: "/recap",
		commandDescription:
			"Mission briefing. Generate a concise executive summary of the entire session.",
		commandExample: "/recap",
		scene: {
			description:
				"You've been working for 8 hours. You're losing track of the big picture.",
		},
		dialogue: [
			{
				speaker: "Manager",
				text: "Give me a status report. What have we actually accomplished today?",
				type: "slack",
			},
			{
				speaker: "You",
				text: "Claude, summarize the progress across all files and timelines.",
				type: "internal",
			},
		],
		output: [
			"Session Summary:",
			"  1. Patched 14 authentication vulnerabilities.",
			"  2. Migrated the legacy database connector.",
			"  3. Created 4 new sub-agents for automated testing.",
		],
		learningHook:
			"/recap is a lifesaver for documenting your work at the end of a long day.",
	},
	{
		id: 50,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/feedback",
		command: "/feedback",
		commandDescription:
			"Direct uplink. Send your experiences directly to the tool's creators.",
		commandExample: "/feedback",
		scene: {
			description:
				"Claude just did something amazing—or something really stupid.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "That refactor was actually brilliant. I should tell the engineers.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Send a report. Help them make the tool better for the next op.",
				type: "narrative",
			},
		],
		output: [
			"System Feedback Portal...",
			"Subject: Refactor Success",
			"✔ Feedback transmitted to Anthropic HQ.",
		],
		learningHook:
			"/feedback connects you with the developers of Claude Code to report bugs or suggest features.",
	},
	{
		id: 51,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/release-notes",
		command: "/release-notes",
		commandDescription:
			"Weapon update. Read about the new features added to your arsenal.",
		commandExample: "/release-notes",
		scene: { description: "A notification pops up: 'Version 1.2.0 is out'." },
		dialogue: [
			{
				speaker: "Handler",
				text: "Check the notes. They added a new /rewind command that could change everything.",
				type: "narrative",
			},
			{
				speaker: "You",
				text: "Let's see what's new in the toolkit.",
				type: "internal",
			},
		],
		output: [
			"Claude Code v1.2.0 Changelog:",
			"  - NEW: /rewind command added.",
			"  - IMPROVED: Faster tool calling.",
			"  - FIX: Resolved MCP handshake timeout.",
		],
		learningHook:
			"/release-notes keeps you up to date on the constant evolution of the CLI.",
	},
	{
		id: 52,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/fewer-permission-prompts",
		command: "/fewer-permission-prompts",
		commandDescription:
			"Trust escalation. Reduce friction by automatically approving safe operations.",
		commandExample: "/fewer-permission-prompts",
		scene: {
			description:
				"The 'Are you sure?' prompts are breaking your concentration pulse.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "Yes, I'm sure! I'm always sure! How do I make it stop asking?",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Escalate your trust levels. Let the AI work more smoothly.",
				type: "slack",
			},
		],
		output: [
			"Analyzing command history...",
			"✔ Whitelisted: `npm test`, `git status`, `ls`.",
			"Permission prompts reduced by 80%.",
		],
		learningHook:
			"/fewer-permission-prompts streamlines your workflow by learning which commands you always approve.",
	},
	{
		id: 53,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/reload-plugins",
		command: "/reload-plugins",
		commandDescription:
			"Refresh augmentations. Cold-reboot your plugins without restarting the CLI.",
		commandExample: "/reload-plugins",
		scene: {
			description: "Your custom MCP connector is hanging. It needs a kick.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "The database tool isn't responding. I think the plugin crashed.",
				type: "internal",
			},
			{
				speaker: "System",
				text: "[ERROR] Plugin 'sql-connector' not responding.",
				type: "urgent",
			},
		],
		output: [
			"Purging plugin subprocesses...",
			"Re-initializing 4 active plugins...",
			"✔ All plugins online and responsive.",
		],
		learningHook:
			"/reload-plugins is your 'soft reset' for any external tool integrations that get stuck.",
	},
	{
		id: 54,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/focus",
		command: "/focus",
		commandDescription:
			"HUD optimization. Hide the distractions and enter a flow state.",
		commandExample: "/focus",
		scene: {
			description:
				"Too many logs, too many dialogues. You need to zone in on the code.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "Hide everything else. Just me, the prompt, and the logic.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Focusing. Blocking out the digital noise.",
				type: "narrative",
			},
		],
		output: [
			"Focus Mode: ACTIVE",
			"Sidebar: Hidden",
			"Historical Logs: Minimalist",
			"Awaiting tactical input.",
		],
		learningHook:
			"/focus is designed for when you're in 'the zone' and want a clean, minimalist terminal UI.",
	},
	{
		id: 55,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/remote-control",
		command: "/remote-control",
		commandDescription:
			"Proxy escalation. Allow the web-based Claude to interact with your local terminal.",
		commandExample: "/remote-control",
		scene: {
			description:
				"You want to use the high-end GUI tools on claude.ai to edit your local files.",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "Link the local shell to the orbital platform. Let the web GUI drive.",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Initiating remote bridge. Handing over control.",
				type: "internal",
			},
		],
		output: [
			"Remote Control Gateway: OPEN",
			"✔ Paired with claude.ai session.",
			"Warning: Local file writes are now authorized from the web.",
		],
		learningHook:
			"/remote-control allows for a hybrid workflow between the local CLI and the web interface.",
	},
	{
		id: 56,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/heapdump",
		command: "/heapdump",
		commandDescription:
			"Memory forensics. Capture a snapshot of the process's memory for leak analysis.",
		commandExample: "/heapdump",
		scene: {
			description:
				"The CLI is consuming massive amounts of RAM in the background.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "The terminal is getting sluggish. Something is leaking memory.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Snapshot it. Let's see what's clogging the tubes.",
				type: "slack",
			},
		],
		output: [
			"Building memory heap snapshot...",
			"✔ Written to: ./heap-160422.heapsnapshot",
			"Size: 420MB. Ready for analysis.",
		],
		learningHook:
			"/heapdump is a professional debugging tool for identifying memory issues in long-running CLI sessions.",
	},
	{
		id: 57,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/remote-env",
		command: "/remote-env",
		commandDescription:
			"Cloud staging. Configure the environment variables for your remote workers.",
		commandExample: "/remote-env",
		scene: {
			description:
				"Your remote agents need the API keys for the production database.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "I need to pass the secrets to the cloud environment safely.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Configure the remote environment. Encrypt them at rest.",
				type: "narrative",
			},
		],
		output: [
			"Remote Environment Configuration:",
			"  - DB_HOST: Set",
			"  - API_KEY: [REDACTED]",
			"✔ Synchronized to remote workers.",
		],
		learningHook:
			"/remote-env manages the settings for agents running in non-local environments.",
	},
	{
		id: 58,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/hooks",
		command: "/hooks",
		commandDescription:
			"Automation inspection. View the scripts that trigger on every command.",
		commandExample: "/hooks",
		scene: {
			description: "A strange script is running every time you type a command.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "Who installed this pre-command hook? It's scanning my keystrokes.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Inspect the hooks. See what's actually running under the hood.",
				type: "urgent",
			},
		],
		output: [
			"Active Tool Hooks:",
			"  - pre-eval: security_scan.sh",
			"  - post-eval: cleanup.sh",
			"Status: Verified.",
		],
		learningHook:
			"/hooks allows you to audit the automated scripts integrated into your CLI workflow.",
	},
	{
		id: 59,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/rename",
		command: "/rename",
		commandDescription:
			"History organization. Give a meaningful name to an anonymous session.",
		commandExample: '/rename "hack-recovery"',
		scene: {
			description:
				"Your history is full of 'Session 42', 'Session 109'. It's unreadable.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "I need to find that recovery logic later. I'll name this session properly.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Good. Order in the terminal is order in the mind.",
				type: "narrative",
			},
		],
		output: [
			"Current Session ID: 0x9f2a",
			"✔ Renamed to: 'hack-recovery'",
			"Session can now be resumed by name.",
		],
		learningHook:
			"/rename helps you build a library of named workflows for easy retrieval later.",
	},
	{
		id: 60,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/resume",
		command: "/resume",
		commandDescription:
			"Time travel. Jump back into any previous session by its ID or name.",
		commandExample: "/resume",
		scene: {
			description:
				"You need to pull a snippet from a conversation you had three days ago.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "Wait, didn't I already solve this in the 'alpha-test' session?",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Resume it. Pull the context forward into the present.",
				type: "slack",
			},
		],
		output: [
			"Scanning session history...",
			"1. 'hack-recovery' (2h ago)",
			"2. 'alpha-test' (3d ago)",
			"✔ Resuming 'alpha-test'...",
		],
		learningHook:
			"/resume is the portal back into your historical knowledge base.",
	},

	{
		id: 61,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/ide",
		command: "/ide",
		commandDescription:
			"Environment bridging. Integrate the CLI's intelligence directly into your editor.",
		commandExample: "/ide",
		scene: {
			description: "You're tired of switching between terminal and VS Code.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "I want Claude to see my cursor position in real-time.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Bridge the environments. Enable the IDE link.",
				type: "narrative",
			},
		],
		output: [
			"Detecting active editors...",
			"✔ Linked with VS Code (Process 4022).",
			"Claude is now aware of your active file buffer.",
		],
		learningHook:
			"/ide allows Claude to follow your navigation in editors like VS Code or Vim.",
	},
	{
		id: 62,
		phase: "SYSTEM OPTIMIZATION",
		phaseColor: "text-purple-400",
		title: "/insights",
		command: "/insights",
		commandDescription:
			"Efficiency metrics. Analyze your interaction patterns and tool usage.",
		commandExample: "/insights",
		scene: {
			description:
				"The board wants to know if the AI is actually improving productivity.",
		},
		dialogue: [
			{
				speaker: "Manager",
				text: "Show me the metrics. How many human-hours did the AI save us this week?",
				type: "slack",
			},
			{
				speaker: "You",
				text: "Claude, crunch the metadata. Give me the breakdown.",
				type: "internal",
			},
		],
		output: [
			"Interaction Insights:",
			"  - Human keystrokes saved: 1.2M",
			"  - Automated refactors: 42",
			"  - Most used tool: `ls` (144 calls)",
			"Efficiency Gain: +402%.",
		],
		learningHook:
			"/insights helps you understand how you're using the AI and where you can improve your workflow.",
	},
	{
		id: 63,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/rewind",
		command: "/rewind",
		commandDescription:
			"Temporal collapse. Undo every change and conversation turn back to a specific state.",
		commandExample: "/rewind",
		scene: {
			description:
				"Claude just deleted the production database by mistake. The world is ending.",
			visualEffect: "glitch",
		},
		dialogue: [
			{
				speaker: "You",
				text: "UNDO! UNDO! REWIND THE TIMELINE NOW!",
				type: "urgent",
			},
			{
				speaker: "Handler",
				text: "Calm down. The engine state is versioned. Rewinding 3 minutes.",
				type: "narrative",
			},
		],
		output: [
			"Initiating temporal rewind...",
			"✔ Files restored to 12:04:00.",
			"✔ Conversation pointer reset.",
			"Crisis averted. Don't do that again.",
		],
		learningHook:
			"/rewind is the ultimate 'undo' button for both conversation and file changes.",
	},
	{
		id: 64,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/sandbox",
		command: "/sandbox",
		commandDescription:
			"Containment field. Run a dangerous script in a restricted virtual environment.",
		commandExample: "/sandbox",
		scene: {
			description: "You've captured a piece of the megacorp's malware.",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "Don't run that on the bare metal. Contain it in the AI sandbox.",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Activating the cage. Let's see what this virus actually does.",
				type: "internal",
			},
		],
		output: [
			"Sandbox Environment: ISOLATED",
			"Network: Disabled",
			"Filesystem: Virtualized",
			"Ready for execution.",
		],
		learningHook:
			"Sandbox mode ensures that AI-generated scripts can't accidentally damage your host machine.",
	},
	{
		id: 65,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/install-github-app",
		command: "/install-github-app",
		commandDescription:
			"Autonomous reviewer. Let Claude join your GitHub team as a regular dev.",
		commandExample: "/install-github-app",
		scene: {
			description: "The project is getting too big for one human to manage.",
		},
		dialogue: [
			{
				speaker: "Team",
				text: "We need 24/7 code review coverage. Install the bot.",
				type: "slack",
			},
			{
				speaker: "You",
				text: "Handing over the keys to the repo. Claude is joining the organization.",
				type: "internal",
			},
		],
		output: [
			"Redirecting to GitHub OAuth...",
			"✔ Application installed in: 'Rebel-Devs-Org'.",
			"Claude will now comment on all new PRs.",
		],
		learningHook:
			"The GitHub App allows Claude to act contextually on commits, PRs, and issues outside the CLI.",
	},
	{
		id: 66,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/install-slack-app",
		command: "/install-slack-app",
		commandDescription:
			"Communication hub. Bring the AI into your Slack channels for collaborative hacking.",
		commandExample: "/install-slack-app",
		scene: { description: "The handlers want to talk to the AI directly." },
		dialogue: [
			{
				speaker: "Handler",
				text: "Bring Claude into the #ops channel. We need it to help with deployment alerts.",
				type: "narrative",
			},
			{
				speaker: "You",
				text: "Syncing the comms. Claude is now on the team chat.",
				type: "internal",
			},
		],
		output: [
			"Slack Workspace Found: 'DHAKA-HACKER-NET'",
			"✔ Bot invited to: #ops, #general.",
			"New trigger: `@claude fix the build`.",
		],
		learningHook:
			"Slack integration makes the AI's intelligence available to your entire team via chat.",
	},
	{
		id: 67,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/schedule",
		command: "/schedule",
		commandDescription:
			"Automated routine. Set a recurring task for the AI to execute while you're offline.",
		commandExample: "/schedule",
		scene: {
			description: "The server needs a health check at 4 AM every morning.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "I'm going to sleep. Claude, check the logs at 4 AM and alert me if the CPU spikes.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Setting the cron routine. Sleep well, Operator.",
				type: "narrative",
			},
		],
		output: [
			"Routine Schedule:",
			"  - Name: '4am-Healthcheck'",
			"  - Command: `claude -p 'check cpu'`",
			"  - Frequency: Daily at 04:00",
			"✔ Registered.",
		],
		learningHook:
			"/schedule allows you to build autonomous routines for maintenance and monitoring.",
	},
	{
		id: 68,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/security-review",
		command: "/security-review",
		commandDescription:
			"Penetration protocol. Run a deep multi-agent scan for hidden vulnerabilities.",
		commandExample: "/security-review",
		scene: { description: "Final check before we launch the payload." },
		dialogue: [
			{
				speaker: "Security Chief",
				text: "If there's one leak, we're all dead. Run the final deep scan.",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Claude, don't hold back. Try to hack my own code.",
				type: "internal",
			},
		],
		output: [
			"Penetration Test Initiated...",
			"✔ SQL Injection: NO VULN",
			"✔ XSS: NO VULN",
			"✔ Logic Flaw in Auth: FOUND (Patched automatically).",
			"System Secure.",
		],
		learningHook:
			"/security-review uses specialized models to hunt for bugs that regular linters miss.",
	},
	{
		id: 69,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/setup-bedrock",
		command: "/setup-bedrock",
		commandDescription:
			"Infra-pivot (AWS). Shift your neural backend to Amazon's Bedrock.",
		commandExample: "/setup-bedrock",
		scene: {
			description:
				"The Anthropic API is being throttled by the megacorp. We need to pivot to AWS.",
		},
		dialogue: [
			{
				speaker: "DevOps",
				text: "Switch the backend to Bedrock. We have a direct line there that can't be traced.",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Re-routing the neural traffic through AWS. Changing the handshake.",
				type: "internal",
			},
		],
		output: [
			"Configuring AWS credentials...",
			"Region: us-east-1",
			"Model: anthropic.claude-3-sonnet-v1",
			"✔ Connection active via Bedrock.",
		],
		learningHook:
			"/setup-bedrock allows enterprises to use Claude Code while keeping data within their AWS perimeter.",
	},
	{
		id: 70,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/setup-vertex",
		command: "/setup-vertex",
		commandDescription:
			"Infra-pivot (GCP). Shift your neural backend to Google's Vertex AI.",
		commandExample: "/setup-vertex",
		scene: {
			description:
				"AWS is down. The world is burning. Google is our only hope.",
		},
		dialogue: [
			{
				speaker: "DevOps",
				text: "Move it to Vertex. Now! The whole US-EAST-1 is offline!",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Switching to Google infrastructure. Let's hope their lattice holds.",
				type: "internal",
			},
		],
		output: [
			"Configuring Vertex AI credentials...",
			"Project: 'hacker-rebellion-v4'",
			"Model: claude-3-sonnet",
			"✔ Connection active via Vertex.",
		],
		learningHook:
			"/setup-vertex is for users who prefer to use Google Cloud for their AI infrastructure.",
	},
	{
		id: 71,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/simplify",
		command: "/simplify",
		commandDescription:
			"Code purification. Strip away the complexity and return to raw logic.",
		commandExample: "/simplify",
		scene: {
			description:
				"The legacy code is so complex it's becoming sentient. It needs to be pruned.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "This 2000-line function is a nightmare. Claude, make it 50 lines of clean logic.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Careful. Don't break the edge cases.",
				type: "narrative",
			},
		],
		output: [
			"Analyzing Cyclomatic Complexity...",
			"[-] 2,104 lines of spaghetti.",
			"[+] 42 lines of pure TypeScript.",
			"✔ Logic preserved. Tests passing.",
		],
		learningHook:
			"/simplify is a powerful tool for refactoring tech debt and making code maintainable.",
	},
	{
		id: 72,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/skills",
		command: "/skills",
		commandDescription:
			"Capability audit. List the specialized expertise modules currently loaded.",
		commandExample: "/skills",
		scene: {
			description:
				"You need to know if the AI can handle D3.js or high-end crypto.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "Does this agent even know how to write smart contracts?",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Check its skills. See what knowledge bases are active.",
				type: "narrative",
			},
		],
		output: [
			"Current Skill Inventory:",
			"  - React Expert (Level 5)",
			"  - Rust Systems Hacking (Level 4)",
			"  - Solidity Auditor (Level 3)",
		],
		learningHook:
			"/skills shows you the specialized 'personas' or 'guidelines' Claude is currently following.",
	},
	{
		id: 73,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/stats",
		command: "/stats",
		commandDescription:
			"Performance telemetry. Visualize your growth as a terminal operator.",
		commandExample: "/stats",
		scene: {
			description:
				"You want to see how much faster you've become since you started.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "I feel like a god in this shell now. Let's see the numbers.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "The numbers don't lie. You're 10x faster than the average op.",
				type: "slack",
			},
		],
		output: [
			"User Statistics:",
			"  - Total Commands: 4,022",
			"  - Bugs Smashed: 890",
			"  - Lines of Code Shipped: 1.2M",
			"Developer Tier: CODE_WIZARD",
		],
		learningHook:
			"/stats (and /insights) gives you positive feedback on your usage patterns.",
	},
	{
		id: 74,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/status",
		command: "/status",
		commandDescription:
			"Pulse check. Confirm the version, model, and connectivity health.",
		commandExample: "/status",
		scene: { description: "Everything feels laggy. Is the API down?" },
		dialogue: [
			{
				speaker: "You",
				text: "Status check. Is the heartbeat still there?",
				type: "internal",
			},
			{
				speaker: "System",
				text: "[INFO] Latency: 42ms. Model: Sonnet 3.5.",
				type: "narrative",
			},
		],
		output: [
			"CLI Version: v1.1.2-stable",
			"Network: CONNECTED",
			"Latency: 22ms",
			"Model: claude-3-5-sonnet",
		],
		learningHook:
			"/status is your quick 'is it plugged in?' check for the CLI.",
	},
	{
		id: 75,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/statusline",
		command: "/statusline",
		commandDescription:
			"HUD customization. Change what information appears in your terminal's footer.",
		commandExample: "/statusline",
		scene: {
			description:
				"You want to see your battery life and git branch at all times.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "I'm working on a critical branch. I need to see it in my HUD.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Customize the status line. Professional ops always tune their HUDs.",
				type: "narrative",
			},
		],
		output: [
			"Statusline Configuration:",
			"  - Left: Branch Name",
			"  - Center: Token Count",
			"  - Right: System Time",
			"✔ HUD updated.",
		],
		learningHook:
			"/statusline lets you personalize the persistent UI at the bottom of the Terminal.",
	},
	{
		id: 76,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/stickers",
		command: "/stickers",
		commandDescription:
			"Victory spoils. Order physical proof of your devotion to the machine.",
		commandExample: "/stickers",
		scene: {
			description:
				"The hack is complete. The megacorp is down. You deserve a reward.",
		},
		dialogue: [
			{
				speaker: "Handler",
				text: "Great work, Kid. You saved the network. Here, get some gear.",
				type: "slack",
			},
			{
				speaker: "You",
				text: "Stickers? Nice. I'll put one on my deck.",
				type: "internal",
			},
		],
		output: [
			"Accessing Exclusive Operator Shop...",
			"✔ 3 Premium Sticker Packs Available.",
			"✔ Shipped to: [SECURE SAFE HOUSE].",
		],
		learningHook:
			"/stickers is a fun command to get real-world Anthropic/Claude Code stickers.",
	},
	{
		id: 77,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/tasks",
		command: "/tasks",
		commandDescription:
			"Subprocess overview. Monitor the active background agents and batch jobs.",
		commandExample: "/tasks",
		scene: {
			description:
				"Twelve agents are currently rewriting the encryption layer in the background.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "Are the long-running refactors done yet?",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Check the task manager. See the progress bars.",
				type: "narrative",
			},
		],
		output: [
			"Active Background Tasks:",
			"  - Task #902: Unit Tests (30% complete)",
			"  - Task #905: Encryption Rewrite (FAILED - requires manual fix)",
			"  - Task #912: Documentation Generation (IDLE)",
		],
		learningHook:
			"/tasks keeps you informed about asynchronous operations happening in the background.",
	},
	{
		id: 78,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/team-onboarding",
		command: "/team-onboarding",
		commandDescription:
			"Legacy creation. Generate a guide to bring new recruits up to speed on the project.",
		commandExample: "/team-onboarding",
		scene: {
			description: "The rebellion is growing. You need to train the recruits.",
		},
		dialogue: [
			{
				speaker: "Manager",
				text: "We have five new junior hackers starting today. They need a roadmap.",
				type: "slack",
			},
			{
				speaker: "You",
				text: "Claude, tell them how we work. Write the onboarding guide.",
				type: "internal",
			},
		],
		output: [
			"Analyzing repo history and style...",
			"✔ ONBOARDING.md generated.",
			"Topics included: Setup, Coding Standards, Deployment API.",
		],
		learningHook:
			"/team-onboarding is an automated way to document a codebase for new developers.",
	},
	{
		id: 79,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/teleport",
		command: "/teleport",
		commandDescription:
			"Contextual bridge. Pull a conversation from the web interface into your local shell.",
		commandExample: "/teleport",
		scene: {
			description:
				"You were working on your phone, then got home and sat at the terminal.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "I had a great chat with Claude on the bus. I need those code snippets here.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Teleport the context. Bring the future into the now.",
				type: "narrative",
			},
		],
		output: [
			"Fetching recent web sessions...",
			"Found: 'Mobile-Architecture-Design'",
			"✔ Synchronizing context to local machine.",
			"Ready to continue.",
		],
		learningHook:
			"/teleport allows for a seamless 'omni-channel' development experience.",
	},
	{
		id: 80,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/terminal-setup",
		command: "/terminal-setup",
		commandDescription:
			"Shell optimization. Fix keyboard mapping and terminal emulation issues.",
		commandExample: "/terminal-setup",
		scene: {
			description:
				"The arrow keys aren't working right in your obscure Linux distro.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "My terminal keeps sending weird escape sequences. I can't move the cursor.",
				type: "internal",
			},
			{
				speaker: "System",
				text: "[ERROR] Unknown TERM type: 'vt100-hacked'.",
				type: "urgent",
			},
		],
		output: [
			"Running Terminal Compatibility Wizard...",
			"✔ Fixed Shift+Arrow mappings.",
			"✔ Applied Xterm-256color support.",
			"Control regained.",
		],
		learningHook:
			"/terminal-setup is for configuring low-level terminal behaviors that interfere with AI interaction.",
	},
	{
		id: 81,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/theme",
		command: "/theme",
		commandDescription:
			"Aesthetic modulation. Change the color palette to match your environment.",
		commandExample: "/theme",
		scene: {
			description:
				"You're hacking in a dimly lit basement. The screen is too bright.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "My eyes are burning. Give me a true-black 'OLED' theme.",
				type: "internal",
			},
			{ speaker: "Handler", text: "Good choice. Stealthy.", type: "narrative" },
		],
		output: [
			"Available Themes:",
			"  - Light",
			"  - Dark",
			"  - OLED (ACTIVE)",
			"System palette updated.",
		],
		learningHook:
			"/theme allows you to customize the visual aesthetics of the Claude Code interface.",
	},
	{
		id: 82,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/tui",
		command: "/tui",
		commandDescription:
			"Rendering mode. Switch between scrolling logs and full-screen TUI rendering.",
		commandExample: "/tui fullscreen",
		scene: {
			description:
				"You want a richer UI experience with pinned panels and persistent status bars.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "The scrolling log is too primitive. I want a full-blown dashboard.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Switch to the full Terminal UI launcher.",
				type: "narrative",
			},
		],
		output: [
			"Switching Renderer...",
			"✔ Alt-Screen Buffer: ENABLED",
			"✔ Mouse Support: ON",
			"Entering Fullscreen TUI mode.",
		],
		learningHook:
			"/tui toggles the advanced 'dashboard' view for users who want more than a simple scrolling log.",
	},
	{
		id: 83,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/ultraplan",
		command: "/ultraplan",
		commandDescription:
			"Architectural blueprinting. Generate a document detailing a massive multi-step migration.",
		commandExample: '/ultraplan "migrate to v2"',
		scene: {
			description: "The whole system needs to be rewritten from the ground up.",
		},
		dialogue: [
			{
				speaker: "CTO",
				text: "We need an Ultraplan for the V2 migration. Don't miss a single dependency.",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Claude, think through every single step of this migration. Don't skip a single file.",
				type: "internal",
			},
		],
		output: [
			"Generating ULTRAPLAN...",
			"Step 1-20: Database Schema Versioning.",
			"Step 21-50: API Endpoint Delta.",
			"Step 51-80: Frontend Hydration Fixes.",
			"Complexity score: 9.8/10. Ready to execute.",
		],
		learningHook:
			"/ultraplan is for high-stakes, multi-day architectural tasks that require rigorous planning.",
	},
	{
		id: 84,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/ultrareview",
		command: "/ultrareview",
		commandDescription:
			"Adversarial auditing. Multiple agents review the code to find hidden logic flaws.",
		commandExample: "/ultrareview",
		scene: {
			description:
				"The V2 code is done. If it has one bug, we lose everything.",
		},
		dialogue: [
			{
				speaker: "Lead Programmer",
				text: "Run an Ultrareview. I want three different agents to try and break it.",
				type: "urgent",
			},
			{
				speaker: "You",
				text: "Deploying the triplets. Let them fight over the logic.",
				type: "internal",
			},
		],
		output: [
			"Agent 1 (Architect): Clean.",
			"Agent 2 (Security): Potential Race Condition on line 89.",
			"Agent 3 (Style): LGTM.",
			"✔ Re-running review on fix... All clear. SHIP IT.",
		],
		learningHook:
			"/ultrareview is the most rigorous audit level available in Claude Code.",
	},
	{
		id: 85,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/upgrade",
		command: "/upgrade",
		commandDescription:
			"Capacity expansion. Open the portal to upgrade to a higher usage tier.",
		commandExample: "/upgrade",
		scene: {
			description:
				"You've outgrown the basic agent. You need more monthly bandwidth.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "I'm doing too much. I need a higher quota.",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Go Pro. Unlock the full power of the reasoning engine.",
				type: "narrative",
			},
		],
		output: [
			"Checking Current Tier: Pro Plan.",
			"Opening Upgrade Portal for Enterprise access...",
			"✔ Redirected to Anthropic Billing.",
		],
		learningHook:
			"/upgrade is how you manage your monthly subscription and usage limits.",
	},
	{
		id: 86,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/vim",
		command: "/vim",
		commandDescription:
			"Legacy input mode. Enable Vim-style modal editing for the command bar.",
		commandExample: "/vim",
		scene: {
			description:
				"You are an old-school hacker who can't use a keyboard without HJKL.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "I can't believe I have to use arrow keys. Can I at least have Vim mode?",
				type: "internal",
			},
			{
				speaker: "Handler",
				text: "Old habits die hard. Toggling the Vim bindings.",
				type: "slack",
			},
		],
		output: [
			"Vim Emulation: ENABLED",
			"Mode: COMMAND",
			"Type :i to enter text.",
		],
		learningHook:
			"/vim helps users who prefer modal editing to use their existing muscle memory.",
	},
	{
		id: 87,
		phase: "THE FINAL UPLOAD",
		phaseColor: "text-magenta-400",
		title: "/voice",
		command: "/voice",
		commandDescription:
			"Acoustic input. Use your voice to dictate prompts directly into the shell.",
		commandExample: "/voice",
		scene: {
			description:
				"Your hands are broken from too much typing. You have to use your voice.",
		},
		dialogue: [
			{
				speaker: "You",
				text: "Claude... finish the script... I can't... type... anymore...",
				type: "urgent",
			},
			{
				speaker: "Handler",
				text: "Initiating voice record. Speak the final command.",
				type: "narrative",
			},
		],
		output: [
			"Listening...",
			"Transcribed: 'claude finish the deployment and shut down all traces.'",
			"✔ Command executed. Mission complete.",
		],
		learningHook:
			"/voice is for hands-free interaction when you're thinking faster than you can type.",
	},
];

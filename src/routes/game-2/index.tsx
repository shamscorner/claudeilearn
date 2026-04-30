import { createFileRoute } from "@tanstack/react-router";
import { Terminal } from "./-components/Terminal";
import game2Css from "./styles/styles.css?url";

export const Route = createFileRoute("/game-2/")({
	component: RouteComponent,
	head: () => ({
		links: [{ rel: "stylesheet", href: game2Css }],
	}),
});

function RouteComponent() {
	return <Terminal />;
}

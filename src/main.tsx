import "./style.css";

// biome-ignore lint/correctness/noUnusedImports: h is technically unused but required for JSX syntax
import { h, mountReactive, reactive } from "nirina.js";

const MaJolieApplication = () => {
	const counter = reactive({ count: 0 });
	const increment = () => counter.count++;
	const decrement = () => counter.count--;
	return (
		<div>
			<h1>coucou {() => counter.count}</h1>
			<button type="button" onClick={increment}>
				+
			</button>
			<span>{counter.count}</span>
			<button type="button" onClick={decrement}>
				-
			</button>
		</div>
	);
};

mountReactive(
	MaJolieApplication,
	document.querySelector<HTMLDivElement>("#app")!,
);

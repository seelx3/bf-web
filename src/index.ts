import { bfInterpreter } from "./bfInterpreter"

function exec() {
	const bfCode = (document.getElementById("sourceCodeArea") as HTMLInputElement).value;
	const result = bfInterpreter(bfCode);
	(document.getElementById("executionResult") as HTMLInputElement).value = result;
}

(window as any).exec = exec;
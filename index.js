function exec() {
	const bfCode = document.getElementById("sourceCodeArea").value;
	const result = bfInterpreter(bfCode);
	document.getElementById("executionResult").value = result;
}

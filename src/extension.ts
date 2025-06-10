import * as vscode from "vscode";

async function command() {
  const fetchResponse = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    body: JSON.stringify({ model: "gemma3", prompt: "hi" }),
  });
  if (!fetchResponse.body) {
    console.warn(`Fetch response had no body. Status ${fetchResponse.status}`);
    return;
  }
  const decoded = fetchResponse.body.pipeThrough(new TextDecoderStream());
  let accumulatedOutput = "";
  for await (const streamResponse of decoded) {
    const jsonl = streamResponse.trim().split("\n");
    for (const json of jsonl) {
      const { response } = JSON.parse(json);
      accumulatedOutput += response;
    }
  }
  vscode.window.showInformationMessage(accumulatedOutput);
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "playground.helloWorld",
    command
  );
  context.subscriptions.push(disposable);
}

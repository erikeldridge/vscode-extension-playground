# VSCode Extension Playground

This project provides a playground in which I can get experience with VSCode
extensions.

<img
alt="Screencast showing the extension calling Ollama and displaying the response."
src="https://github.com/erikeldridge/vscode-extension-playground/blob/main/demo.gif"
width="500px"/>

## Use

1. Install Gemma3 on Mac
   1. Download Ollama app from https://github.com/ollama/ollama
   2. Drag app to Applications folder
   3. Double-click application to run installer
   4. Install Gemma3 in Ollama: `ollama pull gemma3`
1. Package the extension: `npm run package`
1. Note the `.vsix` file output
1. Install the extension
   1. Open Command Palette
   2. Run `Extensions: Install From VSIX...`
1. Run the extension
1. Open Command Palette
1. Run `Playground: Hello World`
1. Observe small popup with the result

## Develop

### Project Organization

- `package.json` - this is the manifest file in which you declare your extension
  and command.
  - The sample plugin registers a command and defines its title and command
    name. With this information VS Code can show the command in the command
    palette. It doesn’t yet need to load the plugin.
- `src/extension.ts` - this is the main file where you will provide the
  implementation of your command.
  - The file exports one function, `activate`, which is called the very first
    time your extension is activated (in this case by executing the command).
    Inside the `activate` function we call `registerCommand`.
  - We pass the function containing the implementation of the command as the
    second parameter to `registerCommand`.
- `src/test/` - defines unit tests

### Set Up

1. Clone this repo

   1. Install Ollama on Mac
   1. Download app from https://github.com/ollama/ollama
   1. Drag app to Applications folder
   1. Double-click application to run installer
   1. Verify by running `ollama --version` in a terminal

1. Install Gemma in Ollama: `ollama pull gemma3`

   1. Verify by curling model:

      ```sh
      curl http://localhost:11434/api/generate -d '{"model":"gemma3", "prompt":"hi"}'
      ```

### Iterate

1. Open this repo in VSCode (Host Window)
2. Open Command Palette and run `Debug: Start Debugging` to launch a new
   "Extension Development Host Window" (Dev Window)
3. In Dev Window, open command palette and run `Playground: Hello World`
4. From Dev Window, run `Developer: Reload Window` or `Cmd+R` to pull in changes
5. Set breakpoints in your code inside `src/extension.ts` to debug
6. Find logs in the Host Window's debug console

### Test

Run unit tests: `npm test`.

## Release

An extension must be
[packaged](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions)
into a `.vsix` file before it can be installed.

The VSCode Marketplace abstracts this, but this project isn't intended to be
published to the Marketplace. Instead, "release" the
extension manually.

1. Bump the version in `package.json`.
   (VSCode only installs new versions. Alternatively, we could
   uninstall/reinstall the package, but documenting major changes seems
   helpful too.)
2. Update the Releases table below
3. Run `npm run package`
4. Observe `.vsix` file output into package root
5. In VSCode, run command `Extensions: Install From VSIX...`
6. Verify installation by running `Playground: Hello World`

## Releases

| Version | Description                        |
| ------- | ---------------------------------- |
| 0.0.1   | Hello world                        |
| 0.0.2   | Hello world with Gemma3 via Ollama |

## References

- See
  [VSCode's Getting Started > Your First Extension doc](https://code.visualstudio.com/api/get-started/your-first-extension)
  for a "hello world"-level introduction.

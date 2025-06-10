# VSCode Extension Playground

This project provides a playground in which I can get experience with VSCode
extensions.

## Organization

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

## Develop

1. Clone this repo
2. Open this repo in VSCode (Host Window)
3. Open Command Palette and run `Debug: Start Debugging` to launch a new
   "Extension Development Host Window" (Dev Window)
4. In Dev Window, open command palette and run `Playground: Hello World`
5. From Dev Window, run `Developer: Reload Window` or `Cmd+R` to pull in changes
6. Set breakpoints in your code inside `src/extension.ts` to debug
7. Find logs in the Host Window's debug console

## Test

Run unit tests: `npm test`.

## Install

An extension must be
[packaged](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions)
into a `.vsix` file before it can be installed.

The VSCode Marketplace abstracts this, but this project isn't intended to be
published to the Marketplace. Instead, package and install the
extension manually.

1. Run `npm run package`
2. Observe `.vsix` file output into package root
3. In VSCode, run command `Extensions: Install From VSIX...`
4. Verify installation by running `Playground: Hello World`

## References

- See
  [VSCode's Getting Started > Your First Extension doc](https://code.visualstudio.com/api/get-started/your-first-extension)
  for a "hello world"-level introduction.

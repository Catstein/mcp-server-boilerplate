# MCP Server boilerplate

Here are a boilerplate to mcp server with just a "hello" tool example.

I realized that the internet is making it quite complicated to show the simplicity of an MCP server, so I created this repository to show that in less than 20 minutes you can configure a simple MCP.

## Lets get started
### To run this mcp server with (vscode experimental update) you can follow the instructions bellow:

POC requirements:
  - vscode with github copilot enabled on settings.

Step 1 (clone project and install dependencies):

- In your terminal:
  1. `git clone https://github.com/Catstein/mcp-server-boilerplate.git`

  2. `cd mcp-server-boilerplate`

  3. `npm install`

Step 2 (add mcp.json content and change args path):

- Inside the file `vscode/mcp.json` add this content updating just the "args" value:

```
{
  "servers": {
    "mcp-server-boilerplate": {
      "command": "node",
      "args": ["__path to `build/index.js` file__"],
    }
  }
}
```

Step 3 (start server and test):
- Run `npm run dev`

- Expected output:
![testing mcp output on vscode copilot](/docs/assets/copilot-test.png)

- now you can create anything with that start mcp project.

---

### If this was helpful to you in any way leave your star!

## Feel free to contribute with this project or leave your issue.

### Documentation references to do this project:

- [Use MCP servers in VS Code (Preview)
](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)
- [typescript MCP Server](https://github.com/modelcontextprotocol/typescript-sdk?tab=readme-ov-file#tools)

powered by catstein dev
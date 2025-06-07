import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
const server = new McpServer({
    name: "Catstein MCP Demo",
    version: "1.0.0",
});
server.tool("hello", {
    name: z.string().describe("name of the person to say hello"),
}, async ({ name }) => {
    return {
        content: [
            {
                type: "text",
                text: `Hello, ${name}!`,
            },
        ],
    };
});
const transport = new StdioServerTransport();
await server.connect(transport);

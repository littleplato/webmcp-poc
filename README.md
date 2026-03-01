# lively-mushroom

A demo React app that exposes browser-side MCP tools via [WebMCP](https://github.com/mcp-b/webmcp), allowing an AI agent (e.g. Claude Desktop) to interact with the page directly through the browser extension.

## Tools

- **`increase_count`** — Increments the on-page counter by a given amount.
- **`decrypt_rot3`** — A little surprise. Try it and see.

## Usage

1. Install the [MCP Browser extension](https://github.com/mcp-b/webmcp) in Chrome.
2. Start the dev server: `pnpm dev`
3. Open the app in Chrome and connect Claude Desktop to the MCP Browser extension.
4. Ask Claude to interact with the page using the available tools.

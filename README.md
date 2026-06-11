# Naveen Rajesh Portfolio

A responsive portfolio site built with Vite and React. The site is organized around resume content in `src/resumeData.js`, so the final facts can be updated without touching the layout code.

## Run Locally

```bash
npm install
npm run dev
```

## Resume Content

The portfolio content is populated from:

```text
/Users/naveenrajesh/Desktop/Resumes/Infosys/22PC22-Naveen.pdf
```

The PDF is copied into `public/Naveen-R-Resume.pdf` so the site can link to it directly.

Update `src/resumeData.js` when you want to refine:

- project links
- LinkedIn URL
- expanded role descriptions or measurable impact
- newer resume details

## Stitch MCP

Do not commit API keys into this repo. Add the Stitch MCP server configuration to your local Codex or MCP client config instead, using an environment variable for the key when your client supports it.

```toml
[mcp_servers.stitch]
url = "https://stitch.googleapis.com/mcp"

[mcp_servers.stitch.http_headers]
"X-Goog-Api-Key" = "$STITCH_API_KEY"
```

If the local client requires literal headers, keep that config outside source control.

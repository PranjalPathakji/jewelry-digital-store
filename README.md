# Jewelry Digital Store

A React, TypeScript, and Vite storefront for the jewelry catalogue.

## Local development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Deploy to Cloudflare Workers

1. Push this repository to GitHub or GitLab.
2. In the Cloudflare dashboard, open **Workers & Pages**, choose **Create application**, then **Workers > Connect to Git**.
3. Select this repository and use these build settings:

   - **Deploy command:** `npm run deploy`
   - **Root directory:** `/`
   - **Node.js version:** `22` (or the current version supported by the project)

4. Choose **Save and Deploy**.

The `wrangler.jsonc` file points the Worker at the generated `dist` directory and enables SPA fallback handling, so React Router routes work when a visitor opens a nested URL directly.

### Custom domain

After the first deployment, open the Worker in Cloudflare, choose **Settings > Domains & Routes**, and add a custom domain. Cloudflare will provision HTTPS automatically.
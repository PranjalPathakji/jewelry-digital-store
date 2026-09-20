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

## Deploy to Cloudflare Pages

1. Push this repository to GitHub or GitLab.
2. In the Cloudflare dashboard, open **Workers & Pages**, choose **Create application**, then **Pages > Connect to Git**.
3. Select this repository and use these build settings:

   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `22` (or the current version supported by the project)

4. Choose **Save and Deploy**.

The `public/_redirects` file keeps React Router routes working when a visitor opens a nested URL directly. Cloudflare Pages copies it into the generated `dist` directory during the Vite build.

### Custom domain

After the first deployment, open the project in Cloudflare Pages, choose **Custom domains**, and follow the prompts to connect the domain. Cloudflare will provision HTTPS automatically.
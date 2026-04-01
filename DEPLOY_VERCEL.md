# Deploy to Vercel

Quick options to deploy this React app to Vercel.

1) Using the Vercel CLI (recommended for local deploys)

```bash
# install (one-time)
npm install -g vercel

# login
vercel login

# from project root
vercel

# to deploy a production release
vercel --prod
```

Follow the interactive prompts. Default detected build command: `npm run build`. Output directory: `build`.

2) Using the Vercel Dashboard (CI)

- Push this repo to GitHub.
- In the Vercel dashboard choose "New Project" → import from GitHub.
- Set Build Command: `npm run build` and Output Directory: `build` (these are usually detected for Create React App).
- Optionally set environment variables in the Vercel project settings.

Files added to this repo to help Vercel:

- `vercel.json` — configures the static build and rewrites all routes to `/index.html` for client-side routing.

If you want, I can run the `vercel` CLI here (requires you to authenticate interactively), or I can connect the repo to Vercel and configure the project in the dashboard for you.

# GitHub Secrets Setup for Cloudflare Pages

To enable automatic deployments, you need to add these secrets to your GitHub repository:

## Steps:

1. Go to your GitHub repository: https://github.com/abhaypsingh/infinite-canvas-graphic-novels
2. Click on **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret** button
5. Add the following secrets:

### Secret 1: CLOUDFLARE_API_TOKEN
- **Name:** `CLOUDFLARE_API_TOKEN`
- **Value:** `UiWMmAKHTcfU0NnZmEIlM9Df6napk6SAOrLVr0zJ`

### Secret 2: CLOUDFLARE_ACCOUNT_ID  
- **Name:** `CLOUDFLARE_ACCOUNT_ID`
- **Value:** You need your actual Account ID (NOT your email)
  - Go to https://dash.cloudflare.com
  - Log in with email: abhay.singh@gmail.com
  - On the dashboard home page, look in the right sidebar
  - Find "Account ID" - it will be a 32-character string like: `f037e56e89293a057740de681ac9abbe`
  - Copy this value (NOT your email address)

## Your Deployment URLs:

- **Production URL:** https://infinite-canvas-graphic-novels.pages.dev
- **Preview URL:** https://740326b2.infinite-canvas-graphic-novels.pages.dev

## Deployment Schedule:

- **Automatic:** On every push to main/master branch
- **Scheduled:** Daily at 2 AM UTC
- **Manual:** Can be triggered from GitHub Actions tab

## Manual Deployment Command:
```bash
npx wrangler pages deploy . --project-name=infinite-canvas-graphic-novels
```
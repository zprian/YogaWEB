# Deployment Guide

## One-time setup (takes ~15 minutes)

### 1. Push to GitHub
1. Create a new repository at https://github.com/new (name it e.g. `yoga-website`)
2. In this folder, run:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/yoga-website.git
   git push -u origin main
   ```

### 2. Deploy to Netlify
1. Go to https://app.netlify.com → "Add new site" → "Import an existing project"
2. Connect to GitHub and select your repository
3. Build settings are auto-detected from `netlify.toml` (build: `npm run build`, publish: `dist`)
4. Click **Deploy site**

### 3. Enable Netlify Identity (for the admin panel)
1. In Netlify dashboard → **Site configuration** → **Identity** → Enable Identity
2. Under **Registration** → set to **Invite only** (so only you can create admin accounts)
3. Under **Services** → **Git Gateway** → Enable Git Gateway
4. Invite yourself: **Identity** → **Invite users** → enter your email
5. Check your email and accept the invite — this creates your admin login

### 4. Access the admin panel
Go to `https://your-site.netlify.app/admin/`
Log in with the account you created above.

### 5. Custom domain (optional)
In Netlify → **Domain management** → Add your custom domain.
Netlify provides free SSL automatically.

---

## Day-to-day content editing (for non-technical users)

1. Go to `https://your-site.com/admin/`
2. Log in
3. Use the sidebar to edit:
   - **News & Events** — add/edit posts
   - **Class Schedule** — modify class times and details
   - **Essential Oils** — add/edit oil descriptions
4. Click **Publish** — the site rebuilds and updates automatically in ~1 minute

---

## Local development

```bash
npm install
npm run dev
```
Open http://localhost:4321

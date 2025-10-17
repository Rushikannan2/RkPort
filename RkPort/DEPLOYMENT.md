# Netlify Deployment Guide

## Method 1: Manual Upload (Easiest - 100% Works)

1. Go to [netlify.com](https://netlify.com)
2. Sign in to your account
3. Click "Add new site" → "Deploy manually"
4. Drag and drop the `dist` folder from `C:\Users\hp\Desktop\RkPort\RkPort\dist`
5. Your site will be live in seconds!

## Method 2: GitHub Integration (Fixed Settings)

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Use these build settings:
   - **Base directory:** Leave empty (or set to `.`)
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

## Method 3: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

## Build Settings for Netlify (CORRECTED)

- **Base directory:** Leave empty (or `.`)
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18

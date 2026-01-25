# Styling Fix for Coolify Deployment

## Problem Identified

The site was loading without CSS/styling on Coolify (soteriamodel.com) but working correctly on GitHub Pages.

**Root Cause:** VitePress `base` configuration mismatch between deployment environments.

- **GitHub Pages** needs: `base: '/soteria-model/'` (subdirectory deployment)
- **Coolify** needs: `base: '/'` (root domain deployment)

The site was configured with `base: '/soteria-model/'` for both, causing Coolify to look for assets at:
- ❌ `https://soteriamodel.com/soteria-model/assets/style.css` (404 - doesn't exist)

Instead of:
- ✅ `https://soteriamodel.com/assets/style.css`

## Solution Implemented

Environment-based configuration using `VITE_BASE_PATH` environment variable.

### Files Modified

1. **`docs/content/.vitepress/config.js`**
   - Changed `base: '/soteria-model/'` to `base: process.env.VITE_BASE_PATH || '/soteria-model/'`
   - Defaults to GitHub Pages path if env var not set

2. **`Dockerfile`**
   - Added `ENV VITE_BASE_PATH=/` before build step
   - Ensures Coolify builds use root path

3. **`.github/workflows/deploy.yml`**
   - Added `VITE_BASE_PATH: /soteria-model/` to build step
   - Ensures GitHub Pages builds use subdirectory path

## How It Works

### Coolify Deployment (soteriamodel.com)
```bash
# Dockerfile sets VITE_BASE_PATH=/
ENV VITE_BASE_PATH=/
RUN npm run build
# → Builds with base: '/'
# → Assets load from https://soteriamodel.com/assets/
```

### GitHub Pages Deployment
```yaml
# GitHub Actions sets VITE_BASE_PATH=/soteria-model/
env:
  VITE_BASE_PATH: /soteria-model/
# → Builds with base: '/soteria-model/'
# → Assets load from https://username.github.io/soteria-model/assets/
```

## Testing

### Test Locally with Docker (Coolify simulation)

```bash
# Start Docker Desktop first, then:
docker build -t soteria-docs-test .
docker run -p 8080:80 soteria-docs-test

# Visit http://localhost:8080
# Should show full styling ✅
```

### Test GitHub Pages Build Locally

```bash
cd docs
VITE_BASE_PATH=/soteria-model/ npm run build
npm run serve

# Visit http://localhost:4173/soteria-model/
# Should show full styling ✅
```

## Deployment

### To Deploy to Coolify

```bash
git add .
git commit -m "Fix: Configure base path for Coolify deployment"
git push origin main
```

Coolify will automatically:
1. Detect the push via webhook
2. Build with `VITE_BASE_PATH=/` (from Dockerfile)
3. Deploy with correct asset paths
4. Site should now have full styling at https://soteriamodel.com ✅

### GitHub Pages

No changes needed - the workflow will continue to work automatically with the correct base path.

## Verification

After deployment, check:

1. **Coolify (https://soteriamodel.com)**
   - Open browser DevTools → Network tab
   - Verify CSS/JS files load from `https://soteriamodel.com/assets/...`
   - No 404 errors
   - Full styling visible

2. **GitHub Pages**
   - Should continue working as before
   - Assets load from `https://username.github.io/soteria-model/assets/...`

## Alternative Solutions (Not Implemented)

### Option 2: Use Custom Domain for GitHub Pages
If you configure a custom domain in GitHub Pages settings, you could use `base: '/'` for both deployments.

### Option 3: Separate Config Files
Create `config.prod.js` and `config.github.js` - more complex, not recommended.

## Rollback

If issues occur, revert these changes:

```bash
git revert HEAD
git push origin main
```

Then set `base: '/soteria-model/'` in config.js and remove env vars.


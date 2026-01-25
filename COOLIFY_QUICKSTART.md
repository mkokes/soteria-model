# Coolify Deployment - Quick Start

## 🚀 5-Minute Setup

### 1. Test Locally (Optional but Recommended)

```bash
# Build and test the Docker image
docker build -t soteria-docs .
docker run -p 8080:80 soteria-docs

# Or use docker-compose
docker-compose up

# Visit http://localhost:8080
```

### 2. Set Up in Coolify

1. **Create New Application**
   - Dashboard → **+ New Resource** → **Application**
   - Choose **Public Repository** or connect GitHub

2. **Configure Repository**
   - Repository URL: `https://github.com/YOUR_USERNAME/soteria-model`
   - Branch: `main`
   - Build Pack: **Docker** (auto-detected)

3. **Enable Auto-Deploy**
   - Go to **Source** tab
   - Toggle **Automatic Deployment on Push**
   - Coolify creates GitHub webhook automatically

4. **Deploy**
   - Click **Deploy** button
   - Wait for build to complete (~2-5 minutes)

5. **Access Your Site**
   - Use Coolify-provided URL or configure custom domain
   - Enable HTTPS in **Domains** tab (automatic SSL)

### 3. Push to Deploy

```bash
git add .
git commit -m "Add Coolify deployment configuration"
git push origin main
```

Coolify will automatically detect the push and deploy! 🎉

## 📁 Files Created

- `Dockerfile` - Multi-stage build configuration
- `nginx.conf` - Web server configuration
- `docker-compose.yml` - Local testing
- `.dockerignore` - Optimize build
- `.coolify` - Coolify settings (optional)
- `COOLIFY_DEPLOYMENT.md` - Full documentation

## 🔧 Coolify Configuration Summary

| Setting | Value |
|---------|-------|
| Build Pack | Docker |
| Dockerfile | `./Dockerfile` |
| Port | 80 |
| Health Check | `/` |
| Node Version | 20 (in Dockerfile) |
| Build Context | `.` (root) |

## 🌐 Deployment Strategy

**Recommended: Keep Both Deployments**

- **GitHub Pages**: Free CDN, automatic
- **Coolify**: Custom domain, full control

Both deployments are independent:
- GitHub Actions handles GitHub Pages
- Coolify webhook handles Coolify deployment

## ⚡ Quick Commands

```bash
# Local testing
docker-compose up -d          # Start
docker-compose logs -f        # View logs
docker-compose down           # Stop

# Manual build
docker build -t soteria-docs .
docker run -p 8080:80 soteria-docs

# Check running containers
docker ps

# View container logs
docker logs <container-id>
```

## 🐛 Troubleshooting

**Build fails?**
- Check Coolify build logs
- Verify `docs/package-lock.json` exists
- Ensure Dockerfile is in repository root

**Site not loading?**
- Check port 80 is exposed in Coolify
- Verify health check passes
- Check nginx logs in Coolify dashboard

**404 on routes?**
- nginx.conf handles SPA routing
- Check VitePress base configuration

## 📚 Next Steps

1. ✅ Test Docker build locally
2. ✅ Create Coolify application
3. ✅ Enable auto-deployment
4. ✅ Configure custom domain (optional)
5. ✅ Test deployment by pushing to main

## 📖 Full Documentation

See `COOLIFY_DEPLOYMENT.md` for comprehensive guide including:
- Detailed configuration options
- Environment-specific setups
- Security considerations
- Monitoring and maintenance
- Advanced troubleshooting

## 🆘 Need Help?

- Coolify Docs: https://coolify.io/docs
- VitePress Docs: https://vitepress.dev
- Project Issues: GitHub repository


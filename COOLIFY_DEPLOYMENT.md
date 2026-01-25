# Coolify Deployment Guide

This guide explains how to deploy the Soteria Model VitePress documentation site to your self-hosted Coolify instance.

## Prerequisites

- A running Coolify instance
- GitHub repository access
- Docker installed (for local testing)

## Project Structure

The VitePress documentation is located in the `docs/` subdirectory:
- Source files: `docs/content/`
- Build output: `docs/content/.vitepress/dist`
- Dependencies: `docs/package.json`

## Deployment Options

### Option 1: Automatic Deployment via GitHub Integration (Recommended)

This option automatically deploys when you push to the `main` branch.

#### Step 1: Connect GitHub Repository to Coolify

1. Log in to your Coolify dashboard
2. Click **+ New Resource** → **Application**
3. Select **Public Repository** or connect your GitHub account
4. Enter repository URL: `https://github.com/YOUR_USERNAME/soteria-model`
5. Select branch: `main`
6. Click **Continue**

#### Step 2: Configure Build Settings

Coolify should auto-detect the Dockerfile. If not, configure manually:

- **Build Pack**: Docker
- **Dockerfile Location**: `./Dockerfile`
- **Docker Build Context**: `.`
- **Port**: `80`

#### Step 3: Set Up Automatic Deployments

1. In your application settings, go to **Source** tab
2. Enable **Automatic Deployment on Push**
3. Coolify will create a webhook in your GitHub repository
4. Every push to `main` will trigger a new deployment

#### Step 4: Configure Domain (Optional)

1. Go to **Domains** tab
2. Add your custom domain or use the Coolify-provided domain
3. Enable **HTTPS** (Coolify handles SSL certificates automatically)

### Option 2: Manual Deployment

1. In Coolify dashboard, go to your application
2. Click **Deploy** button
3. Coolify will pull latest code and rebuild

### Option 3: Deploy via Coolify CLI

```bash
# Install Coolify CLI (if available)
coolify deploy --app soteria-docs --branch main
```

## Local Testing

Before deploying to Coolify, test the Docker build locally:

### Build and Run with Docker

```bash
# Build the Docker image
docker build -t soteria-docs .

# Run the container
docker run -p 8080:80 soteria-docs

# Access at http://localhost:8080
```

### Build and Run with Docker Compose

```bash
# Start the service
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the service
docker-compose down

# Access at http://localhost:8080
```

## Configuration Files

### Dockerfile
Multi-stage build that:
1. Builds VitePress site with Node.js 20
2. Serves static files with nginx

### nginx.conf
Nginx configuration with:
- SPA routing support
- Gzip compression
- Security headers
- Static asset caching

### docker-compose.yml
Local development/testing configuration

### .coolify
Coolify-specific configuration (optional)

## Deployment Strategy Recommendations

### Keep Both GitHub Pages and Coolify

**Pros:**
- Redundancy and high availability
- GitHub Pages as free CDN backup
- Coolify for custom domain and control

**Cons:**
- Maintain two deployment pipelines
- Potential sync issues

**Implementation:**
Keep the existing `.github/workflows/deploy.yml` as-is. Coolify deployment is independent and triggered by its own webhook.

### Replace GitHub Pages with Coolify Only

**Pros:**
- Single deployment target
- Full control over infrastructure
- Custom server configurations

**Cons:**
- No free CDN
- Self-hosted maintenance

**Implementation:**
Delete or disable `.github/workflows/deploy.yml`

### Recommended Approach: Dual Deployment

Keep both deployments:
- **GitHub Pages**: `https://YOUR_USERNAME.github.io/soteria-model/` (primary/public)
- **Coolify**: `https://docs.yourdomain.com` (custom domain/staging)

## Environment-Specific Configurations

If you need different configurations for each environment:

1. Create environment-specific config files in `docs/content/.vitepress/`
2. Use environment variables in Coolify to switch configs
3. Modify Dockerfile to accept build arguments:

```dockerfile
ARG DEPLOY_ENV=production
ENV DEPLOY_ENV=${DEPLOY_ENV}
```

## Troubleshooting

### Build Fails

- Check Coolify build logs
- Verify Node.js version (should be 20)
- Ensure `docs/package-lock.json` is committed

### Site Not Loading

- Check nginx logs in Coolify
- Verify port 80 is exposed
- Check health check status

### 404 Errors on Routes

- Verify nginx.conf has correct SPA routing
- Check VitePress base URL configuration

### Slow Build Times

- Coolify caches Docker layers
- First build is slower; subsequent builds are faster
- Consider using build cache optimization

## Monitoring and Maintenance

1. **Health Checks**: Coolify automatically monitors via health check endpoint
2. **Logs**: Access via Coolify dashboard → Application → Logs
3. **Rollback**: Coolify keeps previous deployments; rollback via UI
4. **Updates**: Push to `main` branch to trigger automatic deployment

## Security Considerations

- Coolify handles SSL/TLS certificates automatically
- Nginx security headers are pre-configured
- Keep dependencies updated: `npm audit` in docs directory
- Review Coolify security settings regularly

## Next Steps

1. Test Docker build locally
2. Set up application in Coolify
3. Configure GitHub webhook
4. Test automatic deployment
5. Configure custom domain (optional)
6. Set up monitoring/alerts in Coolify

## Support

- Coolify Documentation: https://coolify.io/docs
- VitePress Documentation: https://vitepress.dev
- Project Issues: GitHub repository issues


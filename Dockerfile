# Multi-stage Dockerfile for VitePress Documentation Site
# Optimized for Coolify deployment

# Stage 1: Build the VitePress site
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files from docs directory
COPY docs/package*.json ./

# Install dependencies including devDependencies (needed for VitePress build)
# Skip prepare scripts like husky which aren't needed in Docker
RUN npm ci --ignore-scripts

# Copy the entire docs directory
COPY docs/ ./

# Build the VitePress site
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files from builder stage
COPY --from=builder /app/content/.vitepress/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]


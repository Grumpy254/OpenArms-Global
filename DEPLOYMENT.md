# Open Arms Global - Deployment Guide

This guide covers deploying the Open Arms Global website to production.

## Technology Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (recommended) or any Node.js hosting

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Connect Repository**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository: `Grumpy254/OpenArms-Global`

2. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `yarn build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

3. **Environment Variables** (Optional)
   - Add any environment variables from `.env.example`
   - `NEXT_PUBLIC_SITE_URL`: Your production URL

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site
   - You'll get a production URL like: `open-arms-global.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to Production
vercel --prod
```

## Custom Domain Setup

1. In Vercel Dashboard, go to your project
2. Navigate to Settings → Domains
3. Add your domain: `openarmsglobal.org`
4. Follow DNS configuration instructions
5. Add the following DNS records:

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

## Alternative Deployment Options

### Deploy to Netlify

1. Connect your GitHub repository
2. Build settings:
   - Build command: `yarn build`
   - Publish directory: `.next`
3. Deploy!

### Deploy to Your Own Server

```bash
# Build the application
yarn build

# Start the production server
yarn start

# Or use PM2 for process management
npm install -g pm2
pm2 start yarn --name "open-arms" -- start
pm2 save
pm2 startup
```

### Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t open-arms-global .
docker run -p 3000:3000 open-arms-global
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_SITE_URL=https://openarmsglobal.org
NEXT_PUBLIC_SITE_NAME="Open Arms Global"
```

## Build Verification

Before deploying, always verify the build locally:

```bash
# Install dependencies
yarn install

# Run build
yarn build

# Test production build locally
yarn start
```

Visit `http://localhost:3000` to verify everything works.

## Performance Optimization

The site is configured with:
- ✅ Static page generation
- ✅ Image optimization
- ✅ Code splitting
- ✅ SWC minification
- ✅ Standalone output mode

## Monitoring & Analytics

Consider adding:
- Google Analytics
- Vercel Analytics (built-in if using Vercel)
- Error tracking (Sentry)

## Support & Maintenance

### Update Dependencies

```bash
# Check for outdated packages
yarn outdated

# Update dependencies
yarn upgrade-interactive
```

### Common Issues

**Build fails with font errors:**
- The app now uses runtime font loading to avoid build-time network issues

**Images not loading:**
- Ensure images are in the `public/images` directory
- Update `next.config.js` image domains if using external images

**404 on refresh:**
- Ensure your hosting supports Next.js routing
- Vercel and Netlify handle this automatically

## Production Checklist

- [ ] All dependencies installed
- [ ] Build completes successfully
- [ ] Environment variables configured
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Analytics tracking added
- [ ] Contact forms tested
- [ ] Mobile responsiveness verified
- [ ] Performance tested (Lighthouse)
- [ ] SEO metadata verified

## Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Project Repository](https://github.com/Grumpy254/OpenArms-Global)

---

**Need Help?** Contact: hello@openarmsglobal.org

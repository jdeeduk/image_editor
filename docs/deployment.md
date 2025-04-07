# Deployment Information

## GitHub Repository
- Repository: [image_editor](https://github.com/jdeeduk/image_editor)
- Main Branch: `main`

## Cloudflare Pages Configuration
- Project Name: image-editor
- Build Command: `npm run build`
- Build Output Directory: `.next`
- Node.js Version: 18.x
- Framework Preset: Next.js
- Production Branch: main

## Environment Variables
No environment variables are required for the current setup.

## Build Configuration
The project uses the following build configuration:
- `next.config.js` with standalone output
- Cloudflare Pages configuration in `.cloudflare/pages.json`
- Optimized for edge deployment

## Development Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/jdeeduk/image_editor.git
   cd image_editor
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

## Production Build
To create a production build locally:
```bash
npm run build
```

## Deployment URLs
- Production: https://image-editor.pages.dev
- Preview: https://<branch>-image-editor.pages.dev

## Features
- Image upload
- Text overlay with customizable properties
- Real-time editing
- Image download with modifications
- Responsive design
- Fast global CDN delivery through Cloudflare

## Monitoring
The application is monitored through Cloudflare's analytics dashboard, providing insights into:
- Traffic patterns
- Error rates
- Performance metrics
- Cache hit rates

## Deployment Process
1. Push changes to the main branch
2. Cloudflare Pages automatically triggers a build
3. Build process:
   - Installs dependencies
   - Builds Next.js application
   - Deploys to global CDN
4. Deployment status available in Cloudflare dashboard

## Rollback Process
If needed, you can roll back to a previous deployment through the Cloudflare Pages dashboard.
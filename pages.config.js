module.exports = {
  // Build output directory
  distDir: '.next',
  
  // Build Command
  buildCommand: 'npm run build',
  
  // The directory to serve static assets from
  publicDir: 'public',
  
  // Framework preset
  framework: 'nextjs',
  
  // Build settings
  build: {
    command: 'npm run build',
    environment: {
      NODE_VERSION: '18'
    }
  }
}
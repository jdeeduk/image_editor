export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Serve static assets from the static directory
    if (url.pathname.startsWith('/static/')) {
      return env.ASSETS.fetch(request);
    }

    try {
      // Serve the static site
      return env.ASSETS.fetch(request);
    } catch (e) {
      return new Response('Not Found', { status: 404 });
    }
  },
};
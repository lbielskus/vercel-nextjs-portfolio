const { withSentryConfig } = require('@sentry/nextjs');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withStyles = require('@webdeb/next-styles');

const nextConfig = {
  // Your Next.js configuration options...

  // Enable Static Site Generation (SSG) output
  target: 'experimental-serverless-trace',
  // Specify the directory where the static HTML files will be exported
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // Add more paths as needed
    };
  },
  // Your other Next.js configuration options...

  // Enable Static Site Generation (SSG) output
  output: 'export',

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = withStyles(
  withPWA(
    withSentryConfig(nextConfig, {
      // Sentry configuration options...
    }),
    {
      pwa: {
        dest: 'public',
        runtimeCaching,
      },
    }
  ),
  {
    sass: true, // use .scss files
    modules: true, // style.(m|module).css & style.(m|module).scss for module files
  }
);

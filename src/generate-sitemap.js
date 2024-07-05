const { SitemapStream, streamToPromise } = require('sitemap');

async function generateSitemap() {
  const smStream = new SitemapStream({
    hostname: 'https://lbweb.lt', // Replace with your website's hostname
  });

  // Add URLs to your sitemap
  smStream.write({ url: '/', changefreq: 'weekly', priority: 0.8 });

  // Add more URLs as needed

  smStream.end();

  // Generate XML string
  const xmlString = await streamToPromise(smStream).toString();

  // Write sitemap to file
  const fs = require('fs');
  fs.writeFileSync('./public/sitemap.xml', xmlString);

  console.log('Sitemap generated successfully.');
}

generateSitemap().catch(console.error);

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/xml');
  res.write(`<?xml version="1.0" encoding="UTF-8"?>`);
  res.write(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`);
  res.write(
    `<url><loc>https://lbielskus.vercel.app/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>`
  );
  res.write(
    `<url><loc>https://lbielskus.vercel.app/education</loc><changefreq>daily</changefreq><priority>1.0</priority></url>`
  );
  res.write(
    `<url><loc>https://lbielskus.vercel.app/experience</loc><changefreq>daily</changefreq><priority>1.0</priority></url>`
  );
  res.write(
    `<url><loc>https://lbielskus.vercel.app/contact</loc><changefreq>daily</changefreq><priority>1.0</priority></url>`
  );

  res.write(`</urlset>`);
  res.end();
}

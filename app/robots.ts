import { MetadataRoute } from 'next'

const SITE_URL = 'https://www.homesteadwestlasvegas.com'

export default function robots(): MetadataRoute.Robots {
  return {
    host: SITE_URL,
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/favicon.ico',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/favicon.ico',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/favicon.ico',
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}

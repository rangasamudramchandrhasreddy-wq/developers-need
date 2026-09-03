import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site/siteConfig';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/.next/'],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

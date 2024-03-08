import { MetadataRoute } from 'next';
import getUrl from '@/lib/utils';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: '/',
      userAgent: '*',
      disallow: '/private/',
    },
    sitemap: getUrl('/sitemap.xml'),
  };
}

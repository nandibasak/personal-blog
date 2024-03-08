import { SITE_DESCRIPTION, SITE_NAME } from '@/config/site';
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    dir: 'ltr',
    display: 'standalone',
    start_url: '/',
    screenshots: [
      {
        src: '/site.png',
        type: 'image/png',
        sizes: '1428x727',
      },
    ],
    icons: [
      {
        src: '/favicon.ico',
        purpose: 'any',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/apple-icon.png',
        purpose: 'any',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}

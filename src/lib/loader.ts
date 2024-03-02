import { env } from '@/validations/env';
import { ImageLoaderProps } from 'next/image';

export function ImageLoader({
  src,
  width,
  quality = 75,
  mode,
}: ImageLoaderProps & { mode: 'local' | 'external' }) {
  if (mode === 'local') {
    return `${env.NEXT_PUBLIC_SITE_URL}/${src}?w=${width}&q=${quality}`;
  }

  return `${src}?w=${width}&q=${quality}`;
}

'use client';

import { useState } from 'react';

import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { Skeleton } from './skeleton';
import { cn } from '@/lib/utils';

type ImageProps = {
  mode?: 'local' | 'external';
} & Omit<NextImageProps, 'loader'>;

const Image = ({ mode = 'local', src, className, height, width, ...props }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const imageUrl = mode === 'local' ? `/assets${src}` : src;

  return (
    <>
      <NextImage
        src={imageUrl}
        height={height}
        width={width}
        onLoad={() => setIsLoading(false)}
        className={cn(
          'opacity-100 transition-opacity duration-300',
          {
            'opacity-0': isLoading,
          },
          className
        )}
        {...props}
      />

      {isLoading && <Skeleton aria-disabled='true' className={cn('absolute left-0', className)} />}
    </>
  );
};

export default Image;

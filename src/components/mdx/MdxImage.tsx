import { ComponentProps } from 'react';

import Image from '@/components/ui/Image';
import { cn } from '@/lib/utils';

type MdxImageProps = {
  alt?: string;
} & Omit<ComponentProps<typeof Image>, 'alt'>;

const MdxImage = ({ src, alt, className, ...props }: MdxImageProps) => {
  const mode = src.toString().startsWith('https') ? 'external' : 'local';

  return (
    <Image
      src={src}
      mode={mode}
      alt={alt ?? 'Post Image'}
      className={cn(
        'mx-auto my-8 rounded-md object-fill shadow-lg shadow-zinc-400 dark:shadow-zinc-900',
        className
      )}
      {...props}
    />
  );
};

export default MdxImage;

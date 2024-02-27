import { posts } from '@/data/posts';
import { format } from 'date-fns';

import { CalendarIcon } from '@radix-ui/react-icons';
import { AspectRatio } from './ui/aspect-ratio';
import Image from './ui/Image';

type PostPreviewProps = {
  post: (typeof posts)[number];
  priority?: boolean;
  thumbnail?: boolean;
};

const PostPreview = ({ post, thumbnail = true, priority = false }: PostPreviewProps) => {
  return (
    <article className='group flex cursor-pointer flex-col transition duration-300 hover:scale-[1.02]'>
      {thumbnail && (
        <AspectRatio ratio={3 / 1} className='relative'>
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority={priority}
            className='h-full w-full rounded-md object-fill'
          />
        </AspectRatio>
      )}

      <h2 className='group-hover:text-rose mt-3 text-xl font-bold transition-colors xs:text-2xl sm:text-xl'>
        {post.title}
      </h2>
      <p
        className='inline-flex gap-x-1.5 py-2 text-xs font-medium
        text-zinc-700 dark:text-zinc-400'
      >
        <CalendarIcon />
        <span>{format(new Date(), 'MMM, dd, yyyy')}</span>
      </p>

      <p className='mt-4 line-clamp-2 text-sm text-zinc-700 dark:text-zinc-400'>
        {post.description}
      </p>
    </article>
  );
};

export default PostPreview;

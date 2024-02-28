import { FeaturedPost } from '@/types/post.types';

import Image from './ui/Image';
import { Separator } from './ui/separator';

type TrendingPostsProps = {
  posts: FeaturedPost[];
};

const TrendingPosts = ({ posts }: TrendingPostsProps) => {
  return (
    <div className='space-y-2 md:space-y-0'>
      <span className='text-xs font-medium uppercase dark:text-zinc-300'>This Week&apos;s</span>
      <h1 className='my-0 mt-1 text-xl font-semibold'>Popular Posts</h1>

      <div className='grid gap-x-4 sm:grid-cols-2 md:grid-cols-1'>
        {posts.map((post) => (
          <article
            key={post.id}
            className='relative mt-4 flex cursor-pointer gap-x-1.5 rounded-sm p-1 px-1.5 transition-colors hover:bg-zinc-300 dark:hover:bg-gray-900 sm:space-x-3'
          >
            <Image
              src={post.coverImg.url}
              alt={post.title}
              mode='external'
              height={65}
              width={60}
              className='h-[65px] w-[60px] rounded-sm object-cover shadow-lg shadow-zinc-400 dark:shadow-gray-900'
            />

            <div className='flex flex-col justify-between sm:gap-2'>
              <span className='text-xs font-medium uppercase text-violet-600'>{post.category}</span>
              <h2 className='line-clamp-2 text-sm font-medium'>{post.title}</h2>

              {posts[posts.length - 1].id !== post.id && (
                <Separator className='hidden h-[0.5px] md:flex' />
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;

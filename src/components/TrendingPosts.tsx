import { FeaturedPost } from '@/types/post.types';

import Image from './ui/Image';
import { Separator } from './ui/separator';
import Link from './ui/Link';

type TrendingPostsProps = {
  posts: FeaturedPost[];
};

const TrendingPosts = ({ posts }: TrendingPostsProps) => {
  return (
    <div className='space-y-2 md:space-y-0'>
      <span className='text-xs font-medium uppercase dark:text-zinc-400'>This Week&apos;s</span>
      <h1 className='my-0 mt-1 text-xl font-semibold'>Popular Posts</h1>

      <div className='grid gap-x-4 sm:grid-cols-2 md:grid-cols-1'>
        {posts.slice(0, 4).map((post, index) => (
          <Link key={post.id} href={`/categories/${post.category}/${post.slug}`}>
            <article className='relative mt-4 flex cursor-pointer items-start gap-2 rounded-sm p-1 px-1.5 transition-colors hover:bg-zinc-300 dark:hover:bg-gray-900 sm:space-x-3'>
              <Image
                src={post.coverImg.url}
                alt={post.title}
                mode='external'
                height={65}
                width={60}
                className='h-[65px] w-[60px] rounded-sm object-cover shadow-lg shadow-zinc-400 dark:shadow-gray-900'
              />

              <div className='flex flex-col justify-between gap-2.5'>
                <span className='text-xs font-medium uppercase text-violet-600 xs:text-sm sm:text-xs'>
                  {post.category}
                </span>
                <h2 className='line-clamp-2 text-sm font-medium xs:text-[0.95rem] sm:text-sm'>
                  {post.title}
                </h2>

                {index !== 3 && <Separator className='hidden h-[0.5px] md:flex' />}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;

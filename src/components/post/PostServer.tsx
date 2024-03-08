import { Post } from '@/types/post.types';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import Author from '../Author';
import { Separator } from '../ui/separator';
import Image from '../ui/Image';
import { AspectRatio } from '../ui/aspect-ratio';
import Mdx from '../mdx/Mdx';
import SharePost from './SharePost';
import getUrl from '@/lib/utils';

type PostServerProps = {
  getPosts: () => Promise<Post>;
};

const PostServer = async ({ getPosts }: PostServerProps) => {
  const post = await getPosts();

  if (!post) return notFound();

  return (
    <>
      <h1 className='mb-6 text-3xl font-bold leading-normal xs:mb-10 xs:text-4xl xs:leading-normal'>
        {post.title}
      </h1>
      <p className='line-clamp-3 text-sm font-medium leading-relaxed xs:text-base sm:text-base md:leading-relaxed'>
        {post.excerpt.text}
      </p>

      <div className='mt-6 flex w-full flex-col justify-between gap-4 sm:flex-row sm:items-center'>
        <p className='pb-4 pt-2 text-xs font-medium xs:text-sm'>
          Published: {format(post.publishDate, 'MMM dd, yyyy')}
        </p>

        <Author
          name={post.author}
          image='/favicon.ico'
          date={new Date(post.publishDate)}
          classNames={{
            name: 'text-black dark:text-white',
            date: 'text-zinc-600 dark:text-zinc-400',
          }}
        />
      </div>
      <Separator className='mt-1 h-[0.5px] w-full' />

      <AspectRatio ratio={16 / 9} className='mt-6'>
        <Image
          className='rounded-md object-cover shadow-xl shadow-zinc-400 dark:shadow-gray-900'
          mode='external'
          src={post.coverImg.url}
          alt={post.title}
          fill
        />
      </AspectRatio>

      <Mdx className='mt-12 font-medium dark:font-normal' markdown={post.content.markdown} />

      <div className='mt-8'>
        <Separator className='mt-1 h-[0.5px] w-full' />
        <SharePost
          className='mt-2'
          text='Hey check out this post.'
          url={getUrl(`/categories/${post.category[0]}/${post.slug}`)}
        />
      </div>
    </>
  );
};

export default PostServer;

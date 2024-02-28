import { Post } from '@/types/post.types';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import Author from '../Author';
import { Separator } from '../ui/separator';
import Image from '../ui/Image';
import { AspectRatio } from '../ui/aspect-ratio';
import Mdx from '../mdx/Mdx';

type PostServerProps = {
  getPosts: () => Promise<Post>;
};

const PostServer = async ({ getPosts }: PostServerProps) => {
  const post = await getPosts();

  if (!post) return notFound();

  console.log(post.category);

  return (
    <>
      <h1 className='mb-6 text-4xl font-bold xs:mb-8'>{post.title}</h1>
      <p className='py-2 text-sm font-semibold leading-8 md:text-base'>{post.excerpt.text}</p>

      <div className='mt-4 flex items-center justify-between'>
        <p className='pb-4 pt-2 text-sm font-medium'>
          Published: {format(post.publishDate, 'MMM dd, yyyy')}
        </p>

        <Author
          name={post.author}
          image='https://avatars.githubusercontent.com/soham-basak'
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
    </>
  );
};

export default PostServer;
import { FeaturedPost } from '@/types/post.types';

import { Card, CardFooter, CardHeader } from './ui/card';
import Image from '@/components/ui/Image';
import Author from './Author';

type FeaturedPostProps = {
  post: FeaturedPost;
};

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <Card className='relative flex min-h-[24rem] cursor-pointer flex-col justify-between border-0 shadow-xl shadow-purple_color/35 transition-all duration-300 hover:scale-[0.99] hover:shadow-purple_color'>
      <Image
        className='absolute z-0 h-full w-full rounded-md object-cover'
        priority
        mode='external'
        src={post.coverImg.url}
        alt={post.title}
        fill
      />

      <CardHeader className='z-10'>
        <Author
          name={post.author}
          date={new Date(post.publishDate)}
          image='https://avatars.githubusercontent.com/soham-basak'
        />
      </CardHeader>

      <CardFooter className='relative z-10 mb-2 flex flex-col items-start backdrop:blur-lg'>
        <h1 className='text-3xl font-bold leading-snug text-white sm:w-3/4 sm:text-4xl'>
          {post.title}
        </h1>
        <p className='line-clamp-2 w-2/3 text-sm leading-loose text-zinc-200'>
          {post.excerpt.text}
        </p>
      </CardFooter>
    </Card>
  );
};

export default FeaturedPost;

import { posts } from '@/data/posts';

import { Card, CardFooter, CardHeader } from './ui/card';
import Image from '@/components/ui/Image';
import Author from './Author';

type FeaturedPostProps = {
  post: (typeof posts)[number];
};

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <Card className='shadow-purple_color/35 hover:shadow-purple_color relative flex min-h-[24rem] cursor-pointer flex-col justify-between border-0 shadow-xl transition-all duration-300 hover:scale-[0.99]'>
      <Image
        className='absolute z-0 h-full w-full rounded-md object-cover'
        priority
        src={post.image}
        alt={post.title}
        fill
      />

      <CardHeader className='z-10'>
        <Author
          name='Soham Basak'
          date={new Date()}
          image='https://avatars.githubusercontent.com/soham-basak'
          link='https://github.com/soham-basak'
        />
      </CardHeader>

      <CardFooter className='relative z-10 mb-2 flex flex-col items-start leading-snug backdrop:blur-lg'>
        <h1 className='text-3xl font-bold leading-snug text-white sm:w-3/4 sm:text-4xl'>
          {post.title}
        </h1>
        <p className='w-2/3 text-sm text-zinc-200 sm:text-base'>{post.description}</p>
      </CardFooter>
    </Card>
  );
};

export default FeaturedPost;

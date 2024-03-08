import { FeaturedPost } from '@/types/post.types';

import { Card, CardFooter, CardHeader } from './ui/card';
import Image from '@/components/ui/Image';
import Author from './Author';
import Link from './ui/Link';

type FeaturedPostProps = {
  post: FeaturedPost;
};

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <Link href={`/categories/${post.category}/${post.slug}`}>
      <Card className='relative flex min-h-[25rem] cursor-pointer flex-col justify-between border-0 shadow-xl shadow-purple_color/35 transition-all duration-300 hover:scale-[0.99] hover:shadow-purple_color sm:h-full'>
        <Image
          className='absolute z-0 h-full w-full rounded-md object-cover brightness-50 dark:opacity-60 dark:brightness-100 dark:md:opacity-30'
          priority
          mode='external'
          src={post.coverImg.url}
          alt={post.title}
          fill
        />

        <CardHeader className='z-10'>
          <Author name={post.author} date={new Date(post.publishDate)} image='/favicon.ico' />
        </CardHeader>

        <CardFooter className='relative z-10 flex flex-col items-start gap-6 sm:gap-0'>
          <h1 className='text-3xl font-bold leading-snug text-white shadow-2xl sm:w-3/4 sm:text-4xl'>
            {post.title}
          </h1>
          <p className='line-clamp-3 w-2/3 text-sm leading-relaxed text-zinc-200'>
            {post.excerpt.text}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default FeaturedPost;

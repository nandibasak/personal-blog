import { Post } from '@/types/post.types';

import { Separator } from '../ui/separator';
import PostPreview from '../PostPreview';
import GridWrapper from '../GridWrapper';
import Link from '../ui/Link';
import { Fragment } from 'react';
import { cn } from '@/lib/utils';

type PostsByCategoriesServerProps = {
  getPosts: () => Promise<{
    posts: Omit<Post, 'content'>[];
    categories: { name: string; path: string }[];
  }>;
};

const PostsByCategoriesServer = async ({ getPosts }: PostsByCategoriesServerProps) => {
  const result = await getPosts();

  return (
    <>
      <div className='flex flex-col gap-y-2'>
        {result.categories.map(({ path, name }, index) => {
          const posts = result.posts
            .filter((post) => post.category[0] === path.replace('/', ''))
            .slice(0, 4);

          return (
            <Fragment key={path}>
              <h1
                className={cn('w-fit text-3xl font-bold capitalize xs:text-4xl', {
                  'mt-24': index !== 0,
                })}
              >
                {name}
                <Separator className='mt-1.5 w-full' />
              </h1>

              <GridWrapper className='mt-8'>
                {posts.map((post) => (
                  <Link key={post.id} href={`/categories/${post.category}/${post.slug}`}>
                    <PostPreview post={post} />
                  </Link>
                ))}
              </GridWrapper>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};
export default PostsByCategoriesServer;

import { Post } from '@/types/post.types';
import { categories } from '@/config/site-links';

import { Separator } from '../ui/separator';
import GridWrapper from '../GridWrapper';
import PostPreview from '../PostPreview';
import Link from '../ui/Link';
import { Fragment } from 'react';
import { cn } from '@/lib/utils';

type CatergoryListServerProps = {
  getPostsByCategories: () => Promise<Omit<Post, 'content'>[]>;
};

const CatergoryListServer = async ({ getPostsByCategories }: CatergoryListServerProps) => {
  const allPosts = await getPostsByCategories();

  return (
    <div className='flex flex-col gap-y-2'>
      {categories.map(({ path, name }, index) => {
        const posts = allPosts
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

            <GridWrapper>
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
  );
};

export default CatergoryListServer;

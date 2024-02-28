import { Suspense } from 'react';
import { getPost, getPosts } from '@/lib/gql/post';

import { Separator } from '@/components/ui/separator';
import GridWrapper from '@/components/GridWrapper';
import FeaturedPostServer from '@/components/home/FeaturedPostServer';
import TrendingPostsServer from '@/components/home/TrendingPostsServer';
import PostsByCategoriesServer from '@/components/home/PostsByCategoriesServer';

const HomePage = () => {
  return (
    <>
      <section className='grid grid-cols-1 gap-6 md:grid-cols-[2.5fr,1fr]'>
        <Suspense fallback='loading...'>
          <FeaturedPostServer
            getFeaturedPost={async () => {
              return getPost();
            }}
          />
        </Suspense>

        <Suspense fallback='loading...'>
          <TrendingPostsServer
            getTrendingPosts={async () => {
              return getPosts();
            }}
          />
        </Suspense>
      </section>

      <div className='mt-28 space-y-16'>
        <section>
          <span className='text-sm font-medium uppercase dark:text-zinc-300'>Hand-Picked</span>
          <h1 className='my-0 w-fit text-2xl font-bold leading-loose text-rose-600'>
            Curated Posts
            <Separator className='-mt-1 h-[0.5px] w-full' />
          </h1>

          <GridWrapper className='mt-8'>
            <PostsByCategoriesServer
              getPosts={async () => {
                return getPosts();
              }}
            />
          </GridWrapper>
        </section>
      </div>
    </>
  );
};

export default HomePage;

import { Suspense } from 'react';
import { getFeaturedPost, getPosts, getPostsByCategory } from '@/lib/gql/post';

import FeaturedPostServer from '@/components/home/FeaturedPostServer';
import TrendingPostsServer from '@/components/home/TrendingPostsServer';
import PostsByCategoriesServer from '@/components/home/PostsByCategoriesServer';
import { categories } from '@/config/site-links';

const HomePage = () => {
  return (
    <>
      <section className='grid grid-cols-1 gap-6 md:grid-cols-[2.5fr,1fr]'>
        <Suspense fallback='loading...'>
          <FeaturedPostServer
            getFeaturedPost={async () => {
              return getFeaturedPost();
            }}
          />
        </Suspense>

        <Suspense fallback='loading...'>
          <TrendingPostsServer
            getTrendingPosts={async () => {
              const posts = await getPosts();
              return posts;
            }}
          />
        </Suspense>
      </section>

      <section className='mt-28'>
        <PostsByCategoriesServer
          getPosts={async () => {
            const postsPromise = categories
              .slice(0, 3)
              .map(async ({ path }) => await getPostsByCategory(path.replace('/', '')));

            const posts = (await Promise.all(postsPromise)).flat();
            return {
              categories: categories.slice(0, 3),
              posts,
            };
          }}
        />
      </section>
    </>
  );
};

export default HomePage;

import { Suspense } from 'react';
import { getPost, getPosts, getPostsByCategory } from '@/lib/gql/post';

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

      <section className='mt-28'>
        <PostsByCategoriesServer
          getPosts={async () => {
            const postsPromise = [{ name: 'hacking' }, { name: 'tech' }]
              .slice(0, 3)
              .map(async ({ name }) => await getPostsByCategory(name));

            const posts = (await Promise.all(postsPromise)).flat().map((post) => ({
              post,
              category: post.category,
            }));
            return posts;
          }}
        />
      </section>
    </>
  );
};

export default HomePage;

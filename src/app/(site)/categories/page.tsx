import { Suspense } from 'react';
import { getPostsByCategory } from '@/lib/gql/post';
import { categories } from '@/config/site-links';
import { constructMetadata } from '@/lib/metadata';

import CatergoryListServer from '@/components/categories/CatergoryListServer';

export const metadata = constructMetadata({
  title: 'Categories',
  description: 'All categories with their latest posts from our site.',
});

const CategoryPage = () => {
  return (
    <Suspense fallback='loading...'>
      <CatergoryListServer
        getPostsByCategories={async () => {
          const postsPromise = categories.slice(0, 3).map(async ({ path }) => {
            const posts = await getPostsByCategory(path.replace('/', ''));
            return posts;
          });
          return (await Promise.all(postsPromise)).flat();
        }}
      />
    </Suspense>
  );
};

export default CategoryPage;

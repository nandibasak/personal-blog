import { Suspense } from 'react';
import { getPostsByCategory } from '@/lib/gql/post';
import { categories } from '@/config/site-links';

import CatergoryListServer from '@/components/categories/CatergoryListServer';

const CategoryPage = () => {
  return (
    <Suspense fallback='loading...'>
      <CatergoryListServer
        getPostsByCategories={async () => {
          const postsPromise = [
            { name: 'tech', path: '' },
            { name: 'hacking', path: '' },
          ]
            .slice(0, 3)
            .map(async ({ name, path }) => {
              const posts = await getPostsByCategory(name.toLowerCase());
              return posts;
            });
          return (await Promise.all(postsPromise)).flat();
        }}
      />
    </Suspense>
  );
};

export default CategoryPage;

import { getPostsByCategory } from '@/lib/gql/post';
import { categories } from '@/config/site-links';

import CategoryServer from '@/components/categories/CategoryServer';

export async function generateStaticParams() {
  return categories.map(({ path }) => ({
    category: path.replace('/', ''),
  }));
}

type CategoryPageProps = {
  params: {
    category: string;
  };
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { category } = params;

  return (
    <CategoryServer
      getPosts={async () => {
        return getPostsByCategory(category);
      }}
    />
  );
};

export default CategoryPage;

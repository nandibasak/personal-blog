import { getPostsByCategory } from '@/lib/gql/post';

import CategoryServer from '@/components/categories/CategoryServer';

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

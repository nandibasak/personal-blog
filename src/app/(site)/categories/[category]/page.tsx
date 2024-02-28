import { getPostByCategory } from '@/lib/gql/post';

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
        return getPostByCategory(category);
      }}
    />
  );
};

export default CategoryPage;

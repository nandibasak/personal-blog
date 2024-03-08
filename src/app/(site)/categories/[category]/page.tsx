import { getPostsByCategory } from '@/lib/gql/post';
import { categories } from '@/config/site-links';
import { constructMetadata } from '@/lib/metadata';

import CategoryServer from '@/components/categories/CategoryServer';

export function generateMetadata({ params }: CategoryPageProps) {
  const category = categories.find(({ path }) => path.replace('/', '') === params.category);

  if (!category || !category.name) return constructMetadata({ notFound: true });

  return constructMetadata({
    title: category.name,
    description: category.description,
  });
}

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

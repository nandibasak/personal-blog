import { categories } from '@/config/site-links';
import { getPostBySlug, getPostsByCategory } from '@/lib/gql/post';
import { constructMetadata } from '@/lib/metadata';

import PostServer from '@/components/post/PostServer';

export async function generateMetadata({ params }: PostPageProps) {
  const post = await getPostBySlug(params);

  if (!post) {
    return constructMetadata({ notFound: true });
  }

  return constructMetadata({
    title: post.title,
    description: post.excerpt.text,
    image: post.coverImg.url,
  });
}

export async function generateStaticParams() {
  const postsPrmomise = categories.map(async ({ path }) => {
    const category = path.replace('/', '');
    const posts = await getPostsByCategory(category);

    return posts.map(({ slug }) => ({
      category,
      slug,
    }));
  });

  const posts = await Promise.all(postsPrmomise);

  return posts.flat();
}

type PostPageProps = {
  params: {
    slug: string;
    category: string;
  };
};

const PostPage = ({ params }: PostPageProps) => {
  return (
    <PostServer
      getPosts={async () => {
        return getPostBySlug(params);
      }}
    />
  );
};

export default PostPage;

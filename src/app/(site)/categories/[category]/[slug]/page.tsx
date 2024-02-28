import PostServer from '@/components/post/PostServer';
import { getPostBySlug } from '@/lib/gql/post';

type PostPageProps = {
  params: {
    slug: string;
  };
};

const PostPage = ({ params }: PostPageProps) => {
  const { slug } = params;

  return (
    <PostServer
      getPosts={async () => {
        return getPostBySlug(slug);
      }}
    />
  );
};

export default PostPage;

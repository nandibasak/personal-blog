import PostServer from '@/components/post/PostServer';
import { getPostBySlug } from '@/lib/gql/post';

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

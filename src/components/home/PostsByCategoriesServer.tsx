import { Post } from '@/types/post.types';

import PostPreview from '../PostPreview';

type PostsByCategoriesServerProps = {
  getPosts: () => Promise<Post[]>;
};

const PostsByCategoriesServer = async ({ getPosts }: PostsByCategoriesServerProps) => {
  const posts = await getPosts();

  return (
    <>
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostsByCategoriesServer;

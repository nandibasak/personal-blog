import { Post } from '@/types/post.types';

import FeaturedPost from '../FeaturedPost';

type FeaturedPostServerProps = {
  getFeaturedPost: () => Promise<Omit<Post, 'content'>>;
};

const FeaturedPostServer = async ({ getFeaturedPost }: FeaturedPostServerProps) => {
  const post = await getFeaturedPost();

  return <FeaturedPost post={post} />;
};

export default FeaturedPostServer;

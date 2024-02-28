import { TrendingPost } from '@/types/post.types';

import TrendingPosts from '../TrendingPosts';

type TrendingPostsServerProps = {
  getTrendingPosts: () => Promise<TrendingPost[]>;
};

const TrendingPostsServer = async ({ getTrendingPosts }: TrendingPostsServerProps) => {
  const posts = await getTrendingPosts();

  return <TrendingPosts posts={posts} />;
};

export default TrendingPostsServer;

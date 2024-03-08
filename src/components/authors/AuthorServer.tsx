import { Post } from '@/types/post.types';
import { notFound } from 'next/navigation';

import GridWrapper from '../GridWrapper';
import Link from '../ui/Link';
import PostPreview from '../PostPreview';

type AuthorServerProps = {
  getAuthorPosts: () => Promise<Omit<Post, 'content'>[]>;
};

const AuthorServer = async ({ getAuthorPosts }: AuthorServerProps) => {
  const posts = await getAuthorPosts();

  if (!posts || posts.length === 0) return notFound();

  return (
    <GridWrapper className='mt-8'>
      {posts.map((post) => (
        <Link key={post.id} href={`/categories/${post.category[0]}/${post.slug}`}>
          <PostPreview post={post} />
        </Link>
      ))}
    </GridWrapper>
  );
};

export default AuthorServer;

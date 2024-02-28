import { Post } from '@/types/post.types';
import { notFound } from 'next/navigation';
import GridWrapper from '../GridWrapper';
import Link from '../ui/Link';
import PostPreview from '../PostPreview';
import { Separator } from '../ui/separator';

type CategoryServerProps = {
  getPosts: () => Promise<Omit<Post, 'content'>[]>;
};

const CategoryServer = async ({ getPosts }: CategoryServerProps) => {
  const posts = await getPosts();

  if (!posts || posts.length === 0) notFound();

  const category = posts[0].category[0];

  return (
    <div>
      <h1 className='w-fit text-4xl font-bold capitalize'>
        {category}
        <Separator className='mt-1.5 w-full' />
      </h1>

      <GridWrapper className='mt-8'>
        {posts.map((post) => (
          <Link key={post.id} href={`/categories/${category}/${post.slug}`}>
            <PostPreview post={post} />
          </Link>
        ))}
      </GridWrapper>
    </div>
  );
};

export default CategoryServer;

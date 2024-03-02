import { Post } from '@/types/post.types';

import { Separator } from '../ui/separator';
import GridWrapper from '../GridWrapper';
import PostPreview from '../PostPreview';
import Link from '../ui/Link';

type CatergoryListServerProps = {
  getPostsByCategories: () => Promise<Omit<Post, 'content'>[]>;
};

const CatergoryListServer = async ({ getPostsByCategories }: CatergoryListServerProps) => {
  const posts = await getPostsByCategories();

  return (
    <div className='flex flex-col gap-y-16'>
      {posts.map((post) => (
        <Link key={post.id} href={`/categories/${post.category}/${post.slug}`}>
          <h1 className='w-fit text-4xl font-bold capitalize'>
            {post.category}
            <Separator className='mt-1.5 w-full' />
          </h1>

          <GridWrapper>
            <PostPreview post={post} />
          </GridWrapper>
        </Link>
      ))}
    </div>
  );
};

export default CatergoryListServer;

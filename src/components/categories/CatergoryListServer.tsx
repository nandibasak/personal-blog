import { Post } from '@/types/post.types';

import { Separator } from '../ui/separator';
import GridWrapper from '../GridWrapper';
import PostPreview from '../PostPreview';

type CatergoryListServerProps = {
  getPostsByCategories: () => Promise<Omit<Post, 'content'>[]>;
};

const CatergoryListServer = async ({ getPostsByCategories }: CatergoryListServerProps) => {
  const posts = await getPostsByCategories();

  return (
    <div className='space-y-20'>
      {posts.map((post) => (
        <div key={post.id}>
          <h1 className='w-fit text-4xl font-bold capitalize'>
            {post.category}
            <Separator className='mt-1.5 w-full' />
          </h1>

          <GridWrapper>
            <PostPreview post={post} />
          </GridWrapper>
        </div>
      ))}
    </div>
  );
};

export default CatergoryListServer;

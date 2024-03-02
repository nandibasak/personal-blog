import { Post } from '@/types/post.types';

import { Separator } from '../ui/separator';
import PostPreview from '../PostPreview';
import GridWrapper from '../GridWrapper';
import Link from '../ui/Link';

type PostsByCategoriesServerProps = {
  getPosts: () => Promise<
    {
      post: Omit<Post, 'content'>;
      category: string[];
    }[]
  >;
};

const PostsByCategoriesServer = async ({ getPosts }: PostsByCategoriesServerProps) => {
  const result = await getPosts();

  return (
    <>
      {result.map(({ post, category }) => (
        <div key={post.id} className='mt-20'>
          <span className='text-sm font-medium uppercase dark:text-zinc-300'>Hand-Picked</span>
          <h1 className='my-0 w-fit text-2xl font-bold capitalize leading-loose text-rose-600'>
            {category}
            <Separator className='-mt-1 h-[0.5px] w-full' />
          </h1>

          <GridWrapper className='mt-8'>
            <Link href={`/categories/${category}/${post.slug}`}>
              <PostPreview post={post} />
            </Link>
          </GridWrapper>
        </div>
      ))}
    </>
  );
};

export default PostsByCategoriesServer;

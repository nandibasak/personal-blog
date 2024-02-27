import { posts } from '@/data/posts';

import FeaturedPost from '@/components/FeaturedPost';
import TrendingPosts from '@/components/TrendingPosts';
import PostPreview from '@/components/PostPreview';
import GridWrapper from '@/components/GridWrapper';
import { Separator } from '@/components/ui/separator';

const HomePage = () => {
  return (
    <>
      <section className='grid grid-cols-1 gap-7 md:grid-cols-[2.5fr,1fr]'>
        <FeaturedPost post={posts[1]} />

        <TrendingPosts posts={posts.slice(0, 4)} />
      </section>

      <div className='mt-28 space-y-16'>
        <section>
          <span className='text-sm font-medium uppercase dark:text-zinc-400'>Hand-Picked</span>
          <h1 className='my-0 w-fit text-3xl font-bold leading-loose text-rose-600'>
            Curated Posts
            <Separator className='-mt-2 h-[0.5px] w-full' />
          </h1>

          <GridWrapper className='mt-8'>
            {posts.map((post) => (
              <PostPreview key={post.image} post={post} />
            ))}
          </GridWrapper>
        </section>
        <section>
          <span className='text-sm font-medium uppercase dark:text-zinc-400'>Hand-Picked</span>
          <h1 className='my-0 w-fit text-3xl font-bold leading-loose text-rose-600'>
            Cyber Security
            <Separator className='-mt-2 h-[0.5px] w-full' />
          </h1>

          <GridWrapper className='mt-8'>
            {posts.map((post) => (
              <PostPreview key={post.image} post={post} />
            ))}
          </GridWrapper>
        </section>

        <section>
          <span className='text-sm font-medium uppercase dark:text-zinc-400'>Hand-Picked</span>
          <h1 className='my-0 w-fit text-3xl font-bold leading-loose text-rose-600'>
            Network Hacking
            <Separator className='-mt-2 h-[0.5px] w-full' />
          </h1>

          <GridWrapper className='mt-8'>
            {posts.map((post) => (
              <PostPreview key={post.image} post={post} />
            ))}
          </GridWrapper>
        </section>
      </div>
    </>
  );
};

export default HomePage;

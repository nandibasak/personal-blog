import { constructMetadata } from '@/lib/metadata';

import { Separator } from '@/components/ui/separator';

export const metadata = constructMetadata({
  title: 'News',
  description: 'The most recent news about tech, ai and gadgets.',
});

const NewsPage = () => {
  return (
    <div>
      <h1 className='w-fit text-3xl font-bold capitalize xs:text-4xl'>
        Latest News
        <Separator className='mt-1.5 w-full' />
      </h1>
    </div>
  );
};

export default NewsPage;

import { Separator } from '@/components/ui/separator';

const NewsPage = () => {
  return (
    <div>
      <h1 className='w-fit text-4xl font-bold capitalize'>
        Latest News
        <Separator className='mt-1.5 w-full' />
      </h1>
    </div>
  );
};

export default NewsPage;

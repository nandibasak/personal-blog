import { getPostsByTag } from '@/lib/gql/post';
import { constructMetadata } from '@/lib/metadata';
import { Suspense } from 'react';

import { Separator } from '@/components/ui/separator';
import TutorialListServer from '@/components/tutorials/TutorialListServer';

export const metadata = constructMetadata({
  title: 'Tutorials',
  description: 'Set of tutorials and how to guides covering a variety of topics.',
});

const TutorialsPage = () => {
  return (
    <>
      <h1 className='w-fit text-3xl font-bold capitalize xs:text-4xl'>
        Tutorials
        <Separator className='mt-1.5 w-full' />
      </h1>

      <Suspense>
        <TutorialListServer
          getTutorials={async () => {
            return getPostsByTag('tutorial');
          }}
        />
      </Suspense>
    </>
  );
};

export default TutorialsPage;

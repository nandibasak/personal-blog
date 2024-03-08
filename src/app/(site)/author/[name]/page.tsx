import { Suspense } from 'react';
import { getPostsByAuthor } from '@/lib/gql/post';
import { Authors } from '@/config/site';
import { constructMetadata } from '@/lib/metadata';
import { capitalizeString } from '@/lib/utils';

import { Separator } from '@/components/ui/separator';
import AuthorServer from '@/components/authors/AuthorServer';

export async function generateStaticParams() {
  return Authors.map((author) => ({
    name: author,
  }));
}

export function generateMetadata({ params: { name: authorName } }: AuthorPageProps) {
  return constructMetadata({
    title: `Posts by ${capitalizeString(authorName)}`,
    description: `List of posts written by ${capitalizeString(authorName)}`,
  });
}

type AuthorPageProps = {
  params: {
    name: string;
  };
};

const AuthorPage = ({ params }: AuthorPageProps) => {
  const { name: authorName } = params;

  return (
    <>
      <h1 className='w-fit text-3xl font-bold capitalize xs:text-4xl'>
        Posts by {authorName}
        <Separator className='mt-1.5 w-full' />
      </h1>

      <Suspense>
        <AuthorServer
          getAuthorPosts={async () => {
            return getPostsByAuthor(authorName);
          }}
        />
      </Suspense>
    </>
  );
};

export default AuthorPage;

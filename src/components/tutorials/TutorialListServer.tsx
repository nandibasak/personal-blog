import { Post } from '@/types/post.types';

import GridWrapper from '../GridWrapper';
import PostPreview from '../PostPreview';
import Link from '../ui/Link';

type TutorialListServerProps = {
  getTutorials: () => Promise<Post[]>;
};

const TutorialListServer = async ({ getTutorials }: TutorialListServerProps) => {
  const posts = await getTutorials();

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

export default TutorialListServer;

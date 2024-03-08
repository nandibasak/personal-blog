import { Authors } from '@/config/site';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import Link from '../ui/Link';
import { cn } from '@/lib/utils';

type AuthorHoverCard = {
  children: React.ReactNode;
  classNames?: {
    trigger?: string;
    content?: string;
  };
};

const AuthorHoverCard = ({ children, classNames }: AuthorHoverCard) => {
  return (
    <HoverCard openDelay={200} closeDelay={200}>
      <HoverCardTrigger className={cn(classNames?.trigger)} asChild>
        {children}
      </HoverCardTrigger>
      <HoverCardContent
        align='start'
        side='bottom'
        className={cn('grid w-full max-w-lg grid-cols-2 gap-2 p-3 py-2', classNames?.content)}
      >
        {Authors.map((authorName, index) => (
          <Link
            href={`/author/${authorName.toLowerCase()}`}
            className='flex cursor-pointer items-center justify-center rounded-sm p-3 px-4 transition-colors hover:bg-zinc-400/40 dark:hover:bg-slate-900'
            key={`${authorName}-${index}`}
          >
            <span className='text-rose text-base font-bold capitalize'>{authorName}</span>
          </Link>
        ))}
      </HoverCardContent>
    </HoverCard>
  );
};

export default AuthorHoverCard;

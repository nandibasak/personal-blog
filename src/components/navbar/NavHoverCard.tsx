import { categories } from '@/config/site-links';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import Link from '@/components/ui/Link';

type NavHoverCardProps = {
  children: React.ReactNode;
};

const NavHoverCard = ({ children }: NavHoverCardProps) => {
  return (
    <HoverCard openDelay={200} closeDelay={200}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent
        align='start'
        side='bottom'
        className='grid w-full max-w-lg grid-cols-2 gap-2 p-3 py-2'
      >
        {categories.map((item, index) => (
          <Link
            href={`/categories/${item.path}`}
            className='cursor-pointer rounded-sm p-3 px-4 transition-colors hover:bg-zinc-400/40 dark:hover:bg-slate-900'
            key={`${item}-${index}`}
          >
            <span className='text-rose text-base font-bold'>{item.name}</span>
            <p className='line-clamp-2 text-sm text-zinc-700 dark:text-zinc-300'>
              {item.description}
            </p>
          </Link>
        ))}
      </HoverCardContent>
    </HoverCard>
  );
};

export default NavHoverCard;

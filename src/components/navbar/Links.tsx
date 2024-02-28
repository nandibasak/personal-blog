'use client';

import { NAV_LINKS } from '@/config/site-links';
import { usePathname } from 'next/navigation';

import Link from '../ui/Link';
import { Button } from '../ui/button';
import NavHoverCard from './NavHoverCard';
import { cn } from '@/lib/utils';

type LinksProps = {
  className?: string;
};

const Links = ({ className }: LinksProps) => {
  const pathname = usePathname();

  return (
    <ul className={cn('flex items-center gap-8', className)}>
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.path;
        const isCategories = link.path === '/categories';

        if (isCategories) {
          return (
            <NavHoverCard key={link.path}>
              <li>
                <Button
                  className={cn('px-0 hover:text-rose-600 dark:hover:text-rose-600', {
                    'text-rose-600 underline dark:text-rose-600': isActive,
                  })}
                  variant='link'
                  size='sm'
                  asChild
                >
                  <Link prefetch href={link.path} className='text-base sm:text-sm'>
                    {link.name}
                  </Link>
                </Button>
              </li>
            </NavHoverCard>
          );
        }

        return (
          <li key={link.path}>
            <Button
              className={cn('px-0 hover:text-rose-600 dark:hover:text-rose-600', {
                'text-rose-600 underline dark:text-rose-600': isActive,
              })}
              variant='link'
              size='sm'
              asChild
            >
              <Link prefetch href={link.path} className='text-base sm:text-sm'>
                {link.name}
              </Link>
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;

'use client';

import { NAV_LINKS } from '@/config/site-links';
import { usePathname } from 'next/navigation';

import Link from '../ui/Link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import MobileNavHoverCard from './MobileNavHoverCard';
import MobileAuthorHoverCard from './MobileAuthorHoverCard';

type MobileLinksProps = {
  className?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileLinks = ({ className, setIsOpen }: MobileLinksProps) => {
  const pathname = usePathname();

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <ul className={cn('flex w-full flex-col gap-8', className)}>
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.path;
        const isCategories = link.path === '/categories';
        const isAuthor = link.path === '/author/dexter';

        if (isCategories) {
          return (
            <MobileNavHoverCard onClick={onClose} key={link.path}>
              <li onClick={onClose}>
                <Button
                  className={cn('px-0 hover:text-rose-600 dark:hover:text-rose-600', {
                    'text-rose-600 underline dark:text-rose-600': isActive,
                  })}
                  variant='link'
                  size='sm'
                  asChild
                >
                  <Link prefetch href={link.path} className='text-lg xs:text-xl sm:text-sm'>
                    {link.name}
                  </Link>
                </Button>
              </li>
            </MobileNavHoverCard>
          );
        }

        if (isAuthor) {
          return (
            <MobileAuthorHoverCard onClick={onClose} key={link.path}>
              <li onClick={onClose}>
                <Button
                  className={cn('px-0 hover:text-rose-600 dark:hover:text-rose-600', {
                    'text-rose-600 underline dark:text-rose-600': isActive,
                  })}
                  variant='link'
                  size='sm'
                  asChild
                >
                  <Link prefetch href={link.path} className='text-lg xs:text-xl sm:text-sm'>
                    {link.name}
                  </Link>
                </Button>
              </li>
            </MobileAuthorHoverCard>
          );
        }

        return (
          <li onClick={onClose} key={link.path}>
            <Button
              className={cn('px-0 hover:text-rose-600 dark:hover:text-rose-600', {
                'text-rose-600 underline dark:text-rose-600': isActive,
              })}
              variant='link'
              size='sm'
              asChild
            >
              <Link prefetch href={link.path} className='text-lg xs:text-xl sm:text-sm'>
                {link.name}
              </Link>
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default MobileLinks;

'use client';

import { useState } from 'react';

import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Links from './Links';
import { cn } from '@/lib/utils';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* menu toggle */}
      <div className='flex items-center justify-center gap-4 xs:gap-6 sm:hidden'>
        {!isOpen ? (
          <HamburgerMenuIcon
            aria-label='Menu Open'
            onClick={() => setIsOpen(true)}
            className='h-5 w-5 xs:h-6 xs:w-6 sm:h-5 sm:w-5'
          />
        ) : (
          <Cross1Icon
            aria-label='Menu Close'
            onClick={() => setIsOpen(false)}
            className='h-5 w-5 xs:h-6 xs:w-6 sm:h-5 sm:w-5'
          />
        )}
      </div>

      {/* slider */}
      <div
        aria-disabled='true'
        className={cn(
          'absolute -left-[1000rem] top-0 -z-20 min-h-screen w-full bg-zinc-300 backdrop-blur-xl transition-all duration-300 dark:bg-gray-950 sm:hidden',
          {
            'left-0': isOpen,
          }
        )}
      />

      <Links
        className={cn(
          'absolute left-0 top-16 ml-4 flex-col items-start gap-1.5 transition-all duration-300 sm:hidden',
          {
            '-left-[1000rem]': !isOpen,
          }
        )}
      />
    </>
  );
};

export default MobileMenu;

'use client';

import { useMounted } from '@/hooks/useMounted';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const isMounted = useMounted();

  const isDark = theme === 'dark';

  if (!isMounted) {
    return (
      <Button aria-disabled='true' className='h-8 w-8' variant='ghost' size='icon'>
        <Skeleton className='h-5 w-5 rounded-full xs:h-6 xs:w-6 sm:h-5 sm:w-5' />
      </Button>
    );
  }

  return (
    <>
      {isDark ? (
        <Button onClick={() => setTheme('light')} className='h-8 w-8' variant='ghost' size='icon'>
          <Sun
            className={cn('absolute h-5 w-5 scale-100 transition-all xs:h-6 xs:w-6 sm:h-5 sm:w-5', {
              'scale-0': !isDark,
            })}
          />
          <span className='sr-only'>Switch to light mode</span>
        </Button>
      ) : (
        <Button onClick={() => setTheme('dark')} className='h-8 w-8' variant='ghost' size='icon'>
          <Moon
            className={cn('absolute h-5 w-5 scale-100 transition-all xs:h-6 xs:w-6 sm:h-5 sm:w-5', {
              'scale-0': isDark,
            })}
          />
          <span className='sr-only'>Switch to dark mode</span>
        </Button>
      )}
    </>
  );
};

export default ThemeToggle;

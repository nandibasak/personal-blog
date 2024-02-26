'use client';

import { useMounted } from '@/hooks/useMounted';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const isMounted = useMounted();

  const isDark = theme === 'dark';

  if (!isMounted) {
    return <div>...</div>;
  }

  return (
    <>
      {isDark ? (
        <Button onClick={() => setTheme('light')} className='h-8 w-8' variant='ghost' size='icon'>
          <Sun
            className={cn('h-5 w-5 scale-100 transition-all', {
              'scale-0': !isDark,
            })}
          />
        </Button>
      ) : (
        <Button onClick={() => setTheme('dark')} className='h-8 w-8' variant='ghost' size='icon'>
          <Moon
            className={cn('absolute h-5 w-5 scale-100 transition-all', {
              'scale-0': isDark,
            })}
          />
        </Button>
      )}
    </>
  );
};

export default ThemeToggle;

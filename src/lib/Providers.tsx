'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { cn } from './utils';

import { Toaster } from 'sonner';

type ProviderProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProviderProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
      <QueryClientProvider client={queryClient}>
        <Toaster duration={2000} closeButton theme='system' richColors cn={cn} />
        {children}
      </QueryClientProvider>
    </NextThemesProvider>
  );
}

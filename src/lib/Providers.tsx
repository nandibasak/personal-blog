'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type ProviderProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProviderProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextThemesProvider>
  );
}

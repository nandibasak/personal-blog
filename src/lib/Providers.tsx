'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

type ProviderProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProviderProps) {
  return (
    <NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
    </NextThemesProvider>
  );
}

import { constructMetadata } from '@/lib/metadata';
import { SITE_NAME } from '@/config/site';
import { Inter } from 'next/font/google';
import Providers from '@/lib/Providers';

import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata = constructMetadata({
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen max-w-full antialiased', inter.className)}>
        <Providers>
          <main className='h-full w-full'>{children}</main>

          <div
            className='absolute inset-x-0 -top-40 -z-10 overflow-hidden opacity-80 blur-3xl xs:opacity-90 sm:opacity-50'
            aria-hidden='true'
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-rose-600 to-violet_color opacity-40 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </Providers>
      </body>
    </html>
  );
}

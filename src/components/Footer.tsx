'use client';

import { NAV_LINKS, SOCIAL_LINKS } from '@/config/site-links';

import { Button } from './ui/button';
import Link from '@/components/ui/Link';
import { cn } from '@/lib/utils';
import Container from './ui/Container';

const Footer = () => {
  return (
    <Container className='flex flex-col items-center font-medium sm:flex-row sm:items-start sm:justify-between'>
      <section className='sm:space-y-3'>
        <div className='mb-2 flex w-full flex-wrap items-center justify-center sm:items-start'>
          {NAV_LINKS.slice(0, -1).map((link, index) => (
            <Button
              className={cn('inline h-fit pt-0', {
                'pl-0': index === 0,
              })}
              key={link.path}
              variant='link'
              asChild
            >
              <Link href={link.path}>{link.name}</Link>
            </Button>
          ))}
        </div>

        <p className='text-center text-sm sm:text-start'>
          Copyright &copy; {new Date().getFullYear()} bitbounty.in
        </p>
      </section>

      <section className='mt-5 flex gap-6 sm:mt-0'>
        {SOCIAL_LINKS.map((item) => {
          if (item.name === 'Email') {
            return (
              <p key={item.link} className='cursor-pointer'>
                <svg
                  role='img'
                  viewBox='0 0 24 24'
                  className='h-5 w-5 transition-opacity duration-200 hover:opacity-80'
                  fill={item.color}
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d={item.icon.path} />
                </svg>
                <span className='sr-only'>{item.name}</span>
              </p>
            );
          }

          return (
            <Link key={item.link} target='_blank' href={item.link}>
              <svg
                role='img'
                viewBox='0 0 24 24'
                className='h-5 w-5 transition-opacity duration-200 hover:opacity-80'
                fill={item.color}
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d={item.icon.path} />
              </svg>
              <span className='sr-only'>{item.name}</span>
            </Link>
          );
        })}
      </section>
    </Container>
  );
};

export default Footer;

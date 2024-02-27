import Link, { LinkProps } from 'next/link';

import { cn } from '@/lib/utils';

type BrandProps = {
  className?: string;
} & Omit<LinkProps, 'href'>;

const Brand = ({ className, ...props }: BrandProps) => {
  return (
    <Link
      {...props}
      href='/'
      className={cn('cursor-pointer text-sm font-bold xs:text-base', className)}
    >
      <h1 className='my-0 text-base uppercase dark:text-zinc-200 sm:text-lg'>
        <span className='mr-[1.5px] text-rose-600 dark:text-rose-700'>Bit</span>
        Bounty
      </h1>
    </Link>
  );
};

export default Brand;

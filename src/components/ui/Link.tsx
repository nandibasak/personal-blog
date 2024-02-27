import NextLink from 'next/link';
import { ComponentProps } from 'react';

type LinkProps = {
  children: React.ReactNode;
} & ComponentProps<typeof NextLink>;

const Link = ({ children, prefetch = false, ...props }: LinkProps) => {
  return (
    <NextLink {...props} prefetch={prefetch}>
      {children}
    </NextLink>
  );
};

export default Link;

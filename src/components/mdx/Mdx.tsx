import { MDXRemote } from 'next-mdx-remote/rsc';

import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeToc from 'rehype-toc';

import { Button, ButtonProps } from '../ui/button';
import Link from '../ui/Link';
import MdxImage from './MdxImage';
import Toc from './Toc';
import { cn } from '@/lib/utils';

type MdxProps = {
  markdown: string;
  showToc?: string;
  className?: string;
};

const Mdx = ({ markdown, showToc, className }: MdxProps) => {
  return (
    <article
      className={cn(
        'prose prose-base dark:prose-invert prose-a:no-underline z-50 min-w-full',
        className
      )}
    >
      <MDXRemote
        source={markdown}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkBreaks],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  className: ['subheading-anchor'],
                  ariaLabel: 'Link to section',
                },
              ],
              [
                // @ts-ignore
                rehypePrettyCode,
                {
                  theme: 'github-light',
                },
              ],
              [
                // @ts-ignore
                rehypeToc,
                {
                  headings: ['h1', 'h2', 'h3'],
                  cssClasses: {
                    link: 'xs:text-base sm:text-sm font-semibold ',
                  },
                },
              ],
            ],
          },
        }}
        components={{
          Image: ({ src, ...props }) => src?.length && <MdxImage src={src} {...props} />,
          h1: ({ children, ...props }) => (
            <h1 className='text-3xl xs:text-4xl' {...props}>
              {children}
            </h1>
          ),
          p: ({ children, ...props }) =>
            typeof children === 'string' ? <p {...props}>{children}</p> : children,
          a: ({ children, href, className }) => (
            <Button
              variant='link'
              className={cn('text- h-min p-0 dark:text-primary', className)}
              asChild
            >
              <Link href={href || ''}>{children}</Link>
            </Button>
          ),
          nav: ({ children, className, ...props }) =>
            className === 'toc' || showToc ? <Toc toc={children} /> : <></>,
          Button: ({ children, className, ...props }: ButtonProps) => (
            <Button {...props} className={className}>
              {children}
            </Button>
          ),
        }}
      />
    </article>
  );
};

export default Mdx;

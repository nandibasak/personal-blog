import { MDXRemote } from 'next-mdx-remote/rsc';

import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeToc, { Options } from 'rehype-toc';

import { Button, ButtonProps } from '../ui/button';
import Link from '../ui/Link';
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
        'prose prose-base z-50 min-w-full dark:prose-invert prose-a:no-underline',
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
                  theme: 'material-theme-ocean',
                },
              ],
              [
                // @ts-ignore
                rehypeToc,
                {
                  headings: ['h1', 'h2', 'h3'],
                  cssClasses: {
                    link: 'xs:text-base sm:text-sm font-semibold text-zinc-800 py-1 dark:text-zinc-300 ',
                  },
                } satisfies Options,
              ],
            ],
          },
        }}
        components={{
          img: ({ src, alt, className, ...props }) =>
            (src && alt)?.length && (
              <img
                className={cn(
                  'mx-auto rounded-md shadow-lg shadow-zinc-400 dark:shadow-gray-900',
                  className
                )}
                src={src}
                alt={alt}
                {...props}
              />
            ),
          h1: ({ children, ...props }) => (
            <h1 className='text-3xl xs:text-4xl' {...props}>
              {children}
            </h1>
          ),
          p: ({ children, ...props }) =>
            typeof children === 'string' ? <p {...props}>{children}</p> : children,
          a: ({ children, href, className }) => (
            <Link
              href={href || ''}
              className={cn('line-clamp-1 py-1 text-primary hover:underline', className)}
            >
              {children}
            </Link>
          ),
          nav: ({ children, className, ...props }) =>
            className === 'toc' || showToc ? (
              <Toc toc={children} />
            ) : (
              <nav className={className} {...props}>
                {children}
              </nav>
            ),
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

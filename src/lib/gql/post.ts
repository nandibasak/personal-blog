import { cache } from 'react';
import { useCms } from '@/hooks/useCms';
import { Post } from '@/types/post.types';

import 'server-only';

export const getPosts = cache(async () => {
  const query = `
    query Posts {
      posts {
        id
        isDownloadable
        isFeatured
        publishDate
        category
        tag
        slug
        title
        excerpt {
          text
        }
        coverImg {
          url
        }
        author
      }
    }
  `;

  const data = await useCms(query);

  return data?.posts as Omit<Post, 'content'>[];
});

export const getPost = cache(async () => {
  const query = `
    query Posts {
      posts(where: { isFeatured: true } ) {
        id
        isDownloadable
        isFeatured
        publishDate
        category
        tag
        slug
        title
        excerpt {
          text
        }
        coverImg {
          url
        }
        author
      }
    }
  `;

  const data = await useCms(query);

  return data?.posts[0] as Omit<Post, 'content'>;
});

export const getPostsByCategory = cache(async (category: string) => {
  const query = `
    query Posts {
      posts(where: { category_contains_some: "${category}" }) {
        id
        isDownloadable
        isFeatured
        publishDate
        category
        tag
        slug
        title
        excerpt {
          text
        }
        coverImg {
          url
        }
        author
      }
    }
  `;

  const data = await useCms(query);

  return data?.posts as Omit<Post, 'content'>[];
});

export const getPostBySlug = cache(
  async ({ category, slug }: { slug: string; category: string }) => {
    const query = `
    query Posts {
      posts(where: { category_contains_some: "${category}", slug: "${slug}" } ) {
        id
        isDownloadable
        publishDate
        category
        tag
        slug
        title
        excerpt {
          text
        }
        coverImg {
          url
        }
        content {
          markdown
        }
        author
      }
    }
  `;

    const data = await useCms(query);

    return data?.posts[0] as Post;
  }
);

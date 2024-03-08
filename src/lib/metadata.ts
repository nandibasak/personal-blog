import { SITE_DESCRIPTION, SITE_NAME } from '@/config/site';
import { Metadata } from 'next';
import getUrl from './utils';
import { env } from '@/validations/env';

type TitleTemplate = {
  default: string;
  template: string;
  absolute?: string;
};

export function constructMetadata({
  title = SITE_NAME,
  description = SITE_DESCRIPTION,
  image = '/site.png',
  icons = '/favicon.ico',
  noIndex = false,
  notFound,
}: {
  title?: string | TitleTemplate;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  notFound?: boolean;
} = {}): Metadata {
  return {
    ...(notFound
      ? {
          title: 'Not Found',
          description: 'This page does not exist',
        }
      : {
          title,
          description,
        }),
    openGraph: {
      images: [
        {
          url: image,
          alt: typeof title === 'string' ? title : undefined,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: image }],
    },
    icons,
    metadataBase: new URL(getUrl('')),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    creator: 'Nilotpaul Nandi',
    authors: [{ name: 'Nilotpaul Nandi', url: env.NEXT_PUBLIC_SITE_URL }],
  };
}

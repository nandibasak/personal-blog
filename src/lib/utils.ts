import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { env } from '@/validations/env';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeString(text: string) {
  const firstChar = text.charAt(0).toUpperCase();
  const rest = text.slice(1);

  return firstChar + rest;
}

export default function getUrl(url: string) {
  if (typeof window !== 'undefined') return url;

  if (env.NEXT_PUBLIC_SITE_URL) {
    return `${env.NEXT_PUBLIC_SITE_URL}${url}`;
  } else {
    return `http://localhost:3000${url}`;
  }
}

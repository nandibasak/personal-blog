import { siFacebook, siLinkedin, siX, siTelegram } from 'simple-icons';
import Link from '../ui/Link';
import { cn } from '@/lib/utils';

type SharePostProps = {
  url: string;
  text: string;
  className?: string;
};

const SharePost = ({ url, text, className }: SharePostProps) => {
  return (
    <div className={cn('flex w-full items-center justify-end gap-3', className)}>
      <p className='text-rose mr-2 text-sm'>Share on:</p>

      <Link
        target='_blank'
        referrerPolicy='no-referrer'
        href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`}
      >
        <svg
          role='img'
          viewBox='0 0 24 24'
          className='h-3.5 w-3.5 cursor-pointer transition-opacity hover:opacity-80'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d={siX.path} />
        </svg>
      </Link>
      <Link
        target='_blank'
        referrerPolicy='no-referrer'
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
      >
        <svg
          role='img'
          viewBox='0 0 24 24'
          className='h-4 w-4 cursor-pointer transition-opacity hover:opacity-80'
          fill='#316FF6'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d={siFacebook.path} />
        </svg>
      </Link>
      <Link
        target='_blank'
        referrerPolicy='no-referrer'
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
      >
        <svg
          role='img'
          viewBox='0 0 24 24'
          className='h-4 w-4 cursor-pointer transition-opacity hover:opacity-80'
          fill='#0A66C2'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d={siLinkedin.path} />
        </svg>
      </Link>
      <Link
        target='_blank'
        referrerPolicy='no-referrer'
        href={`https://t.me/share/url?url=${url}&text=${text}`}
      >
        <svg
          role='img'
          viewBox='0 0 24 24'
          className='h-4 w-4 cursor-pointer transition-opacity hover:opacity-80'
          fill='#0088cc'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d={siTelegram.path} />
        </svg>
      </Link>
    </div>
  );
};

export default SharePost;

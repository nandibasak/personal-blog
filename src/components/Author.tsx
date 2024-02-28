import { format } from 'date-fns';

import Link from './ui/Link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { cn } from '@/lib/utils';

type AuthorProps = {
  image: string;
  name: string;
  link?: string;
  date: Date;
  classNames?: {
    name?: string;
    date?: string;
  };
};

const Author = ({ image, link, name, date, classNames }: AuthorProps) => {
  return (
    <Link target='blank' href={link ?? ''} className='flex items-center gap-2'>
      <Avatar className='h-[30px] w-[30px]'>
        <AvatarImage className='h-fit w-fit' height={30} width={30} src={image} alt={name} />
        <AvatarFallback className='uppercase'>{name.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div className='text-xs'>
        <p className={cn('font-medium text-white', classNames?.name)}>{name}</p>
        <p className={cn('text-zinc-300', classNames?.date)}>{format(date, 'MMMM dd, yyyy')}</p>
      </div>
    </Link>
  );
};

export default Author;

import { Authors } from '@/config/site';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from '../ui/Link';
import { cn } from '@/lib/utils';

type MobileAuthorHoverCardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const MobileAuthorHoverCard = ({ children, className, onClick }: MobileAuthorHoverCardProps) => {
  return (
    <Accordion type='single' collapsible className={cn('w-full', className)}>
      <AccordionItem separatorClassName='hidden' value='authors'>
        <AccordionTrigger className='w-full py-0'>{children}</AccordionTrigger>

        <AccordionContent className='my-3 mb-0 ml-3 flex flex-col gap-3'>
          {Authors.map((authorName) => (
            <Link
              onClick={onClick}
              className='text-sm capitalize xs:text-base'
              href={`/author/${authorName}`}
              key={authorName}
            >
              {authorName}
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MobileAuthorHoverCard;

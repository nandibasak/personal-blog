import { categories } from '@/config/site-links';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import Link from '../ui/Link';

type MobileNavHoverCardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const MobileNavHoverCard = ({ children, className, onClick }: MobileNavHoverCardProps) => {
  return (
    <Accordion type='single' collapsible className={cn('w-full', className)}>
      <AccordionItem separatorClassName='hidden' value='categories'>
        <AccordionTrigger className='w-full py-0'>{children}</AccordionTrigger>

        <AccordionContent className='my-3 mb-0 ml-3 flex flex-col gap-3'>
          {categories.map(({ name, path }) => (
            <Link
              className='text-sm capitalize xs:text-base'
              onClick={onClick}
              href={`/categories/${path}`}
              key={path}
            >
              {name}
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MobileNavHoverCard;

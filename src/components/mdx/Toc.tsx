import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

type TocProps = {
  toc: React.ReactNode;
};

const Toc = ({ toc }: TocProps) => {
  return (
    <Accordion type='single' collapsible className='my-8 w-full' defaultValue='toc'>
      <AccordionItem value='toc'>
        <AccordionTrigger className='py-0 text-xl font-semibold text-primary'>
          Table of contents
        </AccordionTrigger>
        <AccordionContent className='list-decimal py-0 text-sm xs:text-base sm:text-sm'>
          {toc}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Toc;

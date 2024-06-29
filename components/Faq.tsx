import { FC } from 'react';

import { FaqAccordion } from '@/utils/data';

import FaqAccordionComponent from '@/components/ui/FaqAccordion';

interface Props { };

const Index: FC<Props> = () => {
  return (
    <section className="base-max-width pt-[9rem]">
      <div className='p-[3.5rem] rounded-[3.5rem] bg-[#f3f4f4]'>
        <h2 className='text-[7.1rem] leading-[100%] text-left font-medium tracking-[-0.06em] mb-[3.5rem]'>FAQ</h2>

        <div className='w-full space-y-[1.8rem]'>
          {FaqAccordion.map(accordion => (
            <FaqAccordionComponent key={accordion.title} accordion={accordion} />
          ))}
        </div>
      </div>
    </section>
  )
};
export default Index
'use client'
import { FC, useState } from 'react';
import { ChevronIcon } from './ChevronIcon';

import { cn } from '@/utils';

interface Props {
  accordion: any
};

const Index: FC<Props> = ({ accordion }) => {
  const [open, setOpen] = useState(false)

  const handleAccordion = () => setOpen(!open)
  return (
    <div className="p-[1.9rem] pl-[3.5rem] bg-white w-full rounded-[3.6rem]">
      <button type="button" onClick={handleAccordion} className='flex items-center font-medium justify-between w-full'>
        <p className='font-medium text-[2.3rem]'>{accordion.title}</p>
        <ChevronIcon className={`w-[5.3rem] h-[5.3rem] transition ease-out duration-300 rotate-90 group-hover:fill-primary group-hover:text-black ${open && 'rotate-[270deg]'}`} />
      </button>

      <div className={cn(`grid grid-rows-[0] transition-all ease-out duration-300" ${open && "grid-rows-1 !h-full pt-[3.1rem] pb-[1.2rem]"}`)}>
        {accordion.paragraphs.map((p: any, idx: any) => (
          //use cn
          <p key={idx} className={cn(`leading-[120%] opacity-0 transition-colors ease-out duration-300  h-0 text-black/60 tracking-tight overflow-hidden ${open && "opacity-100 [&:not(:first-child)]:mt-[0.9rem] !h-full"}`)}>{p}</p>
        ))}
      </div>
    </div >
  )
};
export default Index
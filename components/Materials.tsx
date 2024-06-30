'use client'

import { useState } from 'react';
import { MaterialsTabs } from '@/utils/data';
import { ChevronIcon } from '@/components/icons/ChevronIcon';

const Tabs = ["Всё про фронтенд- и веб-разработку", "Алгоритмы"];

const Index = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <section className="base-max-width pt-[9rem]">
      <h2 className='text-[7.1rem] leading-[100%] text-center font-medium tracking-[-0.06em] mb-[3.5rem]'>Полезные материалы</h2>
      <div className="">
        <div className='flex justify-center'>
          {Tabs.map((tab, idx) => (
            <button key={tab} onClick={() => setSelectedTab(idx)} className={`m-[0.4rem] tracking-tight text-[1.4rem] p-[1.8rem] rounded-full transition duration-300 hover:bg-primary hover:text-black bg-[#f3f4f4] ${selectedTab === idx && "bg-black text-white"}`}>{tab}</button>
          ))}

        </div>
      </div>
      <div className="flex flex-wrap px-[3.5rem] mt-[3.5rem]">
        {MaterialsTabs[selectedTab].map(({ title, href }, idx) => (
          <a href={href} target='_blank' key={idx} className="w-[50%] p-[0.9rem] group cursor-pointer">
            <div className='px-[2.2rem] py-[2.7rem] h-full bg-[#f3f4f4] rounded-[3.6rem] flex justify-between items-center'>
              <p className='font-medium text-[2.4rem]'>{title}</p>
              <ChevronIcon className='w-[5.3rem] h-[5.3rem] transition duration-300 group-hover:fill-primary group-hover:text-black ' />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
};
export default Index
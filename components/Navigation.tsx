'use client'
import { useState } from 'react';
import Image from 'next/image';

import { navLinks } from '@/utils/data';

import Button from '@/components/ui/button'
import { cn } from '@/utils';

const Index = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <header className="w-full fixed top-0 left-0 h-[8rem] base-x-padding py-[1.8rem] z-[50] md:px-[1.9rem]">
      <div className='base-max-width flex space-x-[1.6rem]  items-center justify-between xl:space-x-0'>
        <div className='flex z-[100]'>
          <a href="#" className='w-[4.4rem] h-[4.4rem] relative'>
            <Image src="./icons/logo.svg" fill={true} className='' alt='yx-logo' />
          </a>
          <a href="#" className='w-[4.4rem] h-[4.4rem] relative'>
            <Image src="./icons/yy.svg" fill={true} alt='yy-logo' />
          </a>
        </div>

        <nav className={cn(`shadow-[0_4px_25px_0_rgba(0,0,0,0.08)] bg-white p-[1.3rem] rounded-full xl:fixed xl:top-0 xl:left-0 xl:w-full xl:h-full transition-all duration-300 xl:rounded-none z-[50] xl:font-medium translate-y-[-2rem] opacity-0 invisible select-none ${isOpen && 'translate-y-0 opacity-100 visible select-auto'}`)}>
          <ul className='flex space-x-[3.2rem] tracking-tight xl:flex-col xl:space-x-0 xl:space-y-[1.7rem] xl:uppercase xl:text-[2.8rem] xl:text-medium xl:leading-[2.24rem] xl:mt-[8rem] '>
            {navLinks.map(({ title, href }) => (

              <li key={title} className='transition hover:text-[#b6a4ff]'>
                <a href={href}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex space-x-[0.9rem] items-center  z-[100]'>
          <Button className='bg-black text-white p-[1.3rem] rounded-full hover:bg-primary hover:text-black transition duration-200 leading-[1]'>Хочу в Яндекс</Button>
          <button onClick={() => setOpen(!isOpen)} type="button" className={cn(`hidden xl:block p-2 box-content rounded-full h-[3.2rem] w-[3.2rem] transition-all duration-200 bg-black relative before:content-[''] before:block before:h-[2px] before:w-[70%] before:m-auto before:bg-white before:relative before:top-[4px] after:content-[''] after:block after:h-[2px] after:w-[70%] after:m-auto after:bg-white after:relative animate-slide-left after:top-[-4px]  leading-[1] ${isOpen && 'translate-x-[2rem]  before:rotate-[-45deg] before:top-[1px] after:top-[-1px] after:rotate-[45deg] animate-slide-right'}`)}></button>
        </div>
      </div>
    </header>
  )
};
export default Index
import Image from 'next/image';
import { FC } from 'react';

import Button from '@/components/ui/button'

interface Props { };

const Index: FC<Props> = () => {
  const links = [
    { title: 'Стажировки', href: '#' },
    { title: 'Ивенты', href: '#' },
    { title: 'Образовательные проекты', href: '#' },
    { title: 'Олимпиады', href: '#' },
    { title: 'Амбассадоры', href: '#' },
    { title: 'CodeRun', href: '#' },
  ]
  return (
    <div className="w-full fixed top-0 left-0 h-[8rem] px-[3.5rem] py-[1.8rem] z-[100]">
      <div className='base-max-width flex space-x-[1.6rem] items-center justify-between'>
        <div className='flex'>
          <a href="#" className='w-[4.4rem] h-[4.4rem] relative'>
            <Image src="./icons/logo.svg" fill={true} className='' alt='yx-logo' />
          </a>
          <a href="#" className='w-[4.4rem] h-[4.4rem] relative'>
            <Image src="./icons/yy.svg" fill={true} alt='yy-logo' />
          </a>
        </div>

        <nav className="shadow-[0_4px_25px_0_rgba(0,0,0,0.08)] bg-white p-[1.3rem] rounded-full">
          <ul className='flex space-x-[3.2rem] tracking-tight '>
            {links.map(({ title, href }) => (

              <li key={title} className='transition hover:text-[#b6a4ff]'>
                <a href={href}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <Button>Хочу в Яндекс</Button>
      </div>
    </div>
  )
};
export default Index
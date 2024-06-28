import Image from 'next/image';
import { FC } from 'react';

interface Props { };

const Index: FC<Props> = () => {
  return (
    <div className="base-max-width w-full mx-auto  sticky top-0 left-0 h-20 px-[35px] py-[18px] flex  space-x-4 items-center justify-between">
      <div className='flex'>
        <a href="#" className='w-11 h-11 relative'>
          <Image src="./icons/logo.svg" fill={true} className='' alt='yx-logo' />
        </a>
        <a href="#" className='w-11 h-11 relative'>
          <Image src="./icons/yy.svg" fill={true} alt='yy-logo' />
        </a>
      </div>

      <nav className="shadow-[0_4px_25px_0_rgba(0,0,0,0.08)] bg-white p-13 rounded-full">
        <ul className='flex space-x-8'>
          <li>Стажировки</li>
          <li>Ивенты</li>
          <li>Образовательные проекты</li>
          <li>Олимпиады</li>
          <li>Амбассадоры</li>
          <li>CodeRun</li>
        </ul>
      </nav>

      <button type="button" className='p-13 tracking-tight bg-black text-white rounded-full leading-[100%] hover:bg-primary hover:text-black transition duration-200'>Хочу в Яндекс</button>
    </div>
  )
};
export default Index
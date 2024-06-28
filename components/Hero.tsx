import { FC } from 'react';

import Button from '@/components/ui/button'
import Image from 'next/image';

interface Props { };

const Index: FC<Props> = () => {
  const imgs = [
    { src: './icons/books.svg', classes: ' top-10 left-[120px]' },
    { src: './icons/smile.svg', classes: 'left-[177px] top-[210px]' },
    { src: './icons/cub.svg', classes: 'top-[190px] right-[93px]', }
  ]
  return (
    <section className='base-max-width relative pt-[26px] overflow-x-visible mb-[-49px]'>
      <h1 className='text-[98px] font-medium leading-[103%] text-center px-[35px] '>ФРОНТЕНД- <br /> РАЗРАБОТКА</h1>

      {imgs.map(({ src, classes }) => (
        <img key={src} src={src} className={`w-20 h-20 absolute ${classes}`} alt="svg" />
      ))}

      <div className='text-center mt-2.5'>
        <span className='py-2 px-[10.5px] text-sm font-medium rounded-full bg-[#ddd]'>JavaScript</span>
      </div>
      <p className='text-center mt-[19px]'>Москва, Санкт-Петербург, Екатеринбург, Нижний Новгород, Симферополь, Минск</p>

      <div className='px-[36px] w-full '>
        <Button classes='w-full text-center text-2xl h-[98px] rounded-full m-0 mt-[19px] p-0'>Подать заявку</Button>
      </div>
      <div className='w-[160%] h-[90px] top-[-49px] left-[-30%] z-[-1] bg-repeat-x relative'>
        <Image src="/images/infinite-bg.png" className='w-full h-full object-cover' fill={true} alt="infinite-bg" />
      </div>
      {/* <div className='infinite-bg'></div> */}
    </section>
  )
};
export default Index
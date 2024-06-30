import Button from '@/components/ui/button'
import Image from 'next/image';

import { siteConfig } from '@/utils/site';

const icons = [
  { src: './icons/books.svg', classes: ' top-[4rem] left-[12rem] md:hidden' },
  { src: './icons/smile.svg', classes: 'left-[17.7rem] top-[21rem] md:left-[2rem] md:top-[36rem]' },
  { src: './icons/cub.svg', classes: 'top-[19rem] right-[9.3rem] md:right-[2rem] md:top-[32rem]', }
]

const Index = () => {

  return (
    <section className='base-max-width relative pt-[2.6rem] overflow-x-visible mb-[-4.9rem] mt-[8rem]'>
      <h1 className='text-[9.8rem] font-medium leading-[103%] text-center base-x-padding md:text-[5.4rem] md:pt-[1.8rem]'>ФРОНТЕНД- <br /> РАЗРАБОТКА</h1>

      {icons.map(({ src, classes }) => (
        <img key={src} src={src} className={`w-[8rem] h-[8rem] absolute ${classes}`} alt="svg" />
      ))}

      <div className='text-center mt-[1rem]'>
        <span className='py-[0.8rem] px-[1rem] text-[1.4rem] font-medium rounded-full bg-[#ddd]'>JavaScript</span>
      </div>
      <p className='text-center mt-[1.9rem] leading-[110%] md:mb-[17.8rem] md:text-balance font-medium'>Москва, Санкт-Петербург, Екатеринбург, Нижний Новгород, Симферополь, Минск</p>

      <div className='base-x-padding w-full '>
        <Button classes="w-full text-center text-[2.4rem] mt-[1.9rem]">
          <a href={siteConfig.siteUrl} className="bg-black tracking-tight hover:bg-primary hover:text-black px-[1.3rem] w-full leading-[9.8rem] rounded-full inline-block transition duration-200" target="_blank">Подать заявку</a>
        </Button>
      </div>
      <div className='w-[160%] h-[9rem] top-[-4.9rem] left-[-30%] z-[-1] bg-repeat-x relative'>
        <Image src="/images/infinite-bg.png" className='w-full h-full object-cover' fill={true} alt="infinite-bg" />
      </div>
    </section>
  )
};
export default Index
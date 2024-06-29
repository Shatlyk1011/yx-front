import Button from '@/components/ui/button'
import Image from 'next/image';

const imgs = [
  { src: './icons/books.svg', classes: ' top-[4rem] left-[12rem]' },
  { src: './icons/smile.svg', classes: 'left-[17.7rem] top-[21rem]' },
  { src: './icons/cub.svg', classes: 'top-[19rem] right-[9.3rem]', }
]

const Index = () => {

  return (
    <section className='base-max-width relative pt-[2.6rem] overflow-x-visible mb-[-4.9rem] mt-[8rem]'>
      <h1 className='text-[9.8rem] font-medium leading-[103%] text-center px-[3.5rem] '>ФРОНТЕНД- <br /> РАЗРАБОТКА</h1>

      {imgs.map(({ src, classes }) => (
        <img key={src} src={src} className={`w-[8rem] h-[8rem] absolute ${classes}`} alt="svg" />
      ))}

      <div className='text-center mt-[1rem]'>
        <span className='py-[0.8rem] px-[1rem] text-[1.4rem] font-medium rounded-full bg-[#ddd]'>JavaScript</span>
      </div>
      <p className='text-center mt-[1.9rem]'>Москва, Санкт-Петербург, Екатеринбург, Нижний Новгород, Симферополь, Минск</p>

      <div className='px-[3.6rem] w-full '>
        <Button classes='w-full text-center text-[2.4rem] h-[9.8rem] rounded-full m-0 mt-[1.9rem] p-0'>Подать заявку</Button>
      </div>
      <div className='w-[160%] h-[9rem] top-[-4.9rem] left-[-30%] z-[-1] bg-repeat-x relative'>
        <Image src="/images/infinite-bg.png" className='w-full h-full object-cover' fill={true} alt="infinite-bg" />
      </div>
    </section>
  )
};
export default Index
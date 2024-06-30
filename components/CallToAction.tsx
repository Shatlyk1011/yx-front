import InfiniteCarousel from '@/components/ui/InfiniteCarousel'
import Button from '@/components/ui/button'

import { siteConfig } from '@/utils/site';

const ProgramCarousel: CarouselItem[] = [
  { text: "БЭКЕНД", iconSrc: "./images/dino.webp", classes: "bg-[#ff5f00]" },
  { text: "DEVOPS", iconSrc: "./images/fingers.webp", classes: "bg-[#2ae881]" },
  { text: "ML", iconSrc: "./images/dino.webp", classes: "bg-[#ff5f00]" },
  { text: "ТЕСТИРОВАНИЕ", iconSrc: "./images/fingers.webp", classes: "bg-[#b6a4ff]" },

  { text: "БЭКЕНД", iconSrc: "./images/dino.webp", classes: "bg-[#ff5f00]" },
  { text: "DEVOPS", iconSrc: "./images/fingers.webp", classes: "bg-[#2ae881]" },
  { text: "ML", iconSrc: "./images/dino.webp", classes: "bg-[#ff5f00]" },
  { text: "ТЕСТИРОВАНИЕ", iconSrc: "./images/fingers.webp", classes: "bg-[#b6a4ff]" },
];

const Index = () => {
  return (
    <section className="base-max-width pt-[9.0rem] base-x-padding">
      <div className="base-y-padding bg-primary rounded-[3.6rem]">
        <div className="flex gap-[10rem] base-x-padding mb-[12rem]">
          <p className=" text-[4.4rem] tracking-tight font-semibold leading-[4.4rem] w-[80%] text-balance">Начните карьеру со стажировки в Young&&Yandex
          </p>
          <p className=" text-black/60 text-[2rem] leading-9 text-balance font-semibold">Станьте частью одной из команд фронтенд‑разработчиков в Яндексе</p>
        </div>
        <InfiniteCarousel>
          {[...ProgramCarousel, ...ProgramCarousel].map(({ iconSrc, text, classes }, index) => (
            <div key={index} className="flex relative h-[8.5rem] animate-appear">
              <img
                src={iconSrc}
                className="w-full h-full"
                alt={text}
              />
              <p className={`text-[8rem] font-semibold tracking-tight leading-[9rem] px-[0.8rem] ${classes}`}>{text}</p>
            </div>
          ))}
        </InfiniteCarousel>
      </div>

      <Button classes="w-full text-center text-[2.4rem] mt-[1.9rem]">
        <a href={siteConfig.siteUrl} className="bg-black tracking-tight hover:bg-primary hover:text-black px-[1.3rem] w-full leading-[9.8rem] rounded-full inline-block transition duration-200" target="_blank">Подать заявку</a>
      </Button>
    </section>
  )
};
export default Index
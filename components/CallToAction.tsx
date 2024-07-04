import InfiniteCarousel from "@/components/ui/InfiniteCarousel";
import Button from "@/components/ui/button";

import { siteConfig } from "@/utils/site";

const ProgramCarousel: CarouselItem[] = [
  { text: "БЭКЕНД", iconSrc: "./images/dino.webp", classes: "bg-[#ff5f00]" },
  { text: "DEVOPS", iconSrc: "./images/fingers.webp", classes: "bg-[#2ae881]" },
  { text: "ML", iconSrc: "./images/dino.webp", classes: "bg-[#ff5f00]" },
  {
    text: "ТЕСТИРОВАНИЕ",
    iconSrc: "./images/fingers.webp",
    classes: "bg-[#b6a4ff]",
  },

  { text: "БЭКЕНД", iconSrc: "./images/dino.webp", classes: "bg-[#ff5f00]" },
  { text: "DEVOPS", iconSrc: "./images/fingers.webp", classes: "bg-[#2ae881]" },
  { text: "ML", iconSrc: "./images/dino.webp", classes: "bg-[#ff5f00]" },
  {
    text: "ТЕСТИРОВАНИЕ",
    iconSrc: "./images/fingers.webp",
    classes: "bg-[#b6a4ff]",
  },
];

const Index = () => {
  return (
    <section className="base-max-width base-x-padding pt-[9.0rem]">
      <div className="base-y-padding rounded-[3.6rem] bg-primary">
        <div className="base-x-padding mb-[12rem] flex gap-[10rem]">
          <p className=" w-[80%] text-balance text-[4.4rem] font-semibold leading-[4.4rem] tracking-tight">
            Начните карьеру со стажировки в Young&&Yandex
          </p>
          <p className=" text-balance text-[2rem] font-semibold leading-9 text-black/60">
            Станьте частью одной из команд фронтенд‑разработчиков в Яндексе
          </p>
        </div>
        <InfiniteCarousel>
          {[...ProgramCarousel, ...ProgramCarousel].map(({ iconSrc, text, classes }, index) => (
            <div key={index} className="relative flex h-[8.5rem] animate-appear">
              <img src={iconSrc} className="h-full w-full" alt={text} />
              <p className={`px-[0.8rem] text-[8rem] font-semibold leading-[9rem] tracking-tight ${classes}`}>{text}</p>
            </div>
          ))}
        </InfiniteCarousel>
      </div>

      <Button classes="w-full text-center text-[2.4rem] mt-[1.9rem]">
        <a
          href={siteConfig.siteUrl}
          className="inline-block w-full rounded-full bg-black px-[1.3rem] leading-[9.8rem] tracking-tight transition duration-200 hover:bg-primary hover:text-black"
          target="_blank"
        >
          Подать заявку
        </a>
      </Button>
    </section>
  );
};
export default Index;

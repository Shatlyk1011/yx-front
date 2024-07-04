import Button from "@/components/ui/button";
import Image from "next/image";

import { siteConfig } from "@/utils/site";

const icons = [
  { src: "./icons/books.svg", classes: " top-[4rem] left-[12rem] md:hidden" },
  {
    src: "./icons/smile.svg",
    classes: "left-[17.7rem] top-[21rem] md:left-[2rem] md:top-[36rem] sm:top-[34rem]",
  },
  {
    src: "./icons/cub.svg",
    classes: "top-[19rem] right-[9.3rem] md:right-[2rem] md:top-[32rem] sm:right-[8rem] sm:top-[30rem]",
  },
];

const Index = () => {
  return (
    <section className="base-max-width relative mb-[-4.9rem] mt-[8rem] overflow-x-visible pt-[2.6rem]">
      <h1 className="base-x-padding text-center text-[9.8rem] font-medium leading-[103%] md:pt-[1.8rem] md:text-[5.4rem]">
        ФРОНТЕНД- <br /> РАЗРАБОТКА
      </h1>

      {icons.map(({ src, classes }) => (
        <img key={src} src={src} className={`absolute h-[8rem] w-[8rem] ${classes}`} alt="svg" />
      ))}

      <div className="mt-[1rem] text-center">
        <span className="rounded-full bg-[#ddd] px-[1rem] py-[0.8rem] text-[1.4rem] font-medium">JavaScript</span>
      </div>
      <p className="mt-[1.9rem] text-center font-medium leading-[110%] md:mb-[17.8rem] md:text-balance">
        Москва, Санкт-Петербург, Екатеринбург, Нижний Новгород, Симферополь, Минск
      </p>

      <div className="base-x-padding w-full ">
        <Button classes="w-full text-center text-[2.4rem] mt-[1.9rem]">
          <a
            href={siteConfig.siteUrl}
            className="inline-block w-full rounded-full bg-black px-[1.3rem] leading-[9.8rem] tracking-tight transition duration-200 hover:bg-primary hover:text-black"
            target="_blank"
          >
            Подать заявку
          </a>
        </Button>
      </div>
      <div className="relative left-[-30%] top-[-4.9rem] z-[-1] h-[9rem] w-[160%] bg-repeat-x">
        <Image src="/images/infinite-bg.png" className="h-full w-full object-cover" fill={true} alt="infinite-bg" />
      </div>
    </section>
  );
};
export default Index;

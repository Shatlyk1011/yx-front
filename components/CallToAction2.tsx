import { siteConfig } from "@/utils/site";

import { TelegramIcon } from "./icons/TelegramIcon";
import { VkIcon } from "./icons/VkIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";

const miniIcons = [
  {
    imgSrc: "./icons/arrows.svg",
    classes:
      "w-[13rem] h-[10.5rem] left-[10rem] top-[-39.8rem] md:top-[-60rem] md:left-[50%] md:translate-x-[-50%] sm:top-[-50rem]",
  },
  {
    imgSrc: "./icons/cloud.svg",
    classes: "w-[11.5rem] h-[7.6rem] top-[-13.6rem] left-[-2rem] md:hidden",
  },
  {
    imgSrc: "./icons/heart.svg",
    classes:
      "w-[10.6rem] h-[10.6rem] top-[-3rem] right-[10rem] md:w-[6rem] md:h-[6rem] md:top-[-5.7rem] md:right-[14.8rem] sm:top-[0] sm:right-[8rem] sm:w-[8rem] sm:h-[8rem]",
  },
  {
    imgSrc: "./icons/rectangle.svg",
    classes: "w-[10.6rem] h-[10.6rem] top-[17rem] left-[10rem] md:hidden",
  },
  {
    imgSrc: "./icons/flower.svg",
    classes: "w-[9.8rem] h-[10.2rem] bottom-[0] right-[2rem] md:right-[none] md:left-0 md:w-[8rem] md:h-[8rem]",
  },
];

const links = [
  {
    icon: <TelegramIcon className="h-[3.2rem] w-[3.2rem] text-white transition duration-300  group-hover:text-black" />,
    href: siteConfig.siteUrl,
  },
  {
    icon: <VkIcon className="h-[3.2rem] w-[3.2rem] text-white transition duration-300  group-hover:text-black" />,
    href: siteConfig.siteUrl,
  },
  {
    icon: <YoutubeIcon className="h-[3.2rem] w-[3.2rem] text-white transition duration-300  group-hover:text-black" />,
    href: siteConfig.siteUrl,
  },
];

const Index = () => {
  return (
    <section className="base-max-width relative pt-[9rem] md:pt-[30rem] sm:pt-[20rem]">
      <h2 className="mb-[3.5rem] text-center text-[5.7rem] font-medium leading-[100%] tracking-[-0.06em]">
        Напишите если <br /> остались вопросы: <br />
        <a className="text-[#b6a4ff]" type="email" href="mailto:intern@yandex-team.ru">
          intern@yandex-team.ru
        </a>
      </h2>

      <div className="flex items-center justify-center space-x-[1.4rem]">
        {links.map(({ href, icon }, idx) => (
          <a key={idx} href={href}>
            <div className="group rounded-full bg-black p-6 transition duration-300 hover:bg-primary">{icon}</div>
          </a>
        ))}
      </div>

      <div className="relative mt-[5.8rem] flex w-full justify-center">
        <img src="./icons/big-dino.svg" className="" alt="big dino" />

        {miniIcons.map(({ imgSrc, classes }) => (
          <img key={imgSrc} src={imgSrc} className={` absolute ${classes}`} alt="mini icons" />
        ))}
      </div>

      <div className="mt-[1.7rem] px-[1.5rem]">
        <img src="./icons/yy-text.svg" className="w-full " alt="young & yandex text" />
      </div>
    </section>
  );
};
export default Index;

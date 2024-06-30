import { siteConfig } from "@/utils/site";

import { TelegramIcon } from "./icons/TelegramIcon";
import { VkIcon } from "./icons/VkIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";

const miniIcons = [
  { imgSrc: './icons/arrows.svg', classes: 'w-[13rem] h-[10.5rem] left-[10rem] top-[-39.8rem]' },
  { imgSrc: './icons/cloud.svg', classes: 'w-[11.5rem] h-[7.6rem] top-[-13.6rem] left-[-4rem]' },
  { imgSrc: './icons/heart.svg', classes: 'w-[10.6rem] h-[10.6rem] top-[-3rem] right-[10rem]' },
  { imgSrc: './icons/rectangle.svg', classes: 'w-[10.6rem] h-[10.6rem] top-[17rem] left-[10rem]' },
  { imgSrc: './icons/flower.svg', classes: 'w-[9.8rem] h-[10.2rem] bottom-[0] right-[2rem]' },
]

const links = [
  { icon: <TelegramIcon className="w-[3.2rem] h-[3.2rem] transition duration-300 text-white  group-hover:text-black" />, href: siteConfig.siteUrl, },
  { icon: <VkIcon className="w-[3.2rem] h-[3.2rem] transition duration-300 text-white  group-hover:text-black" />, href: siteConfig.siteUrl },
  { icon: <YoutubeIcon className="w-[3.2rem] h-[3.2rem] transition duration-300 text-white  group-hover:text-black" />, href: siteConfig.siteUrl }
]

const Index = () => {
  return (
    <section className="base-max-width pt-[9rem] relative pb-[20rem]">
      <h2 className='text-[5.7rem] leading-[100%] text-center font-medium tracking-[-0.06em] mb-[3.5rem]'>Напишите если <br /> остались вопросы: <br />
        <a className="text-[#b6a4ff]" type="email" href="mailto:intern@yandex-team.ru">intern@yandex-team.ru</a>
      </h2>

      <div className="flex items-center justify-center space-x-[1.4rem]">
        {links.map(({ href, icon }, idx) => (
          <a key={idx} href={href}>
            <div className="bg-black hover:bg-primary transition duration-300 p-6 rounded-full group">
              {icon}
            </div>
          </a>
        ))}
      </div>

      <div className="w-full relative flex justify-center mt-[5.8rem]">

        <img src="./icons/big-dino.svg" className="" alt="big dino" />

        {miniIcons.map(({ imgSrc, classes }) => (
          <img key={imgSrc} src={imgSrc} className={` absolute ${classes}`} alt="mini icons" />
        ))}

      </div>

      <div className="px-[1.5rem]">
        <img src="./icons/yy-text.svg" className="w-full " alt="young & yandex text" />
      </div>
    </section>
  )
};
export default Index
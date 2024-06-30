import { InTouch } from "@/utils/data";

import { ChevronIcon } from "./ui/ChevronIcon";

import { siteConfig } from "@/utils/site";


const Index = () => {
  return (
    <section className="base-max-width pt-[9rem] pb-[20rem]">
      <h2 className="text-[7.1rem] leading-[100%] text-center font-medium tracking-[-0.06em] mb-[3.5rem]">Будем на связи</h2>

      <div className="flex flex-wrap">
        {InTouch.map(item => (
          <Card key={item.title} item={item} />
        ))}
      </div>

    </section>
  )
};
export default Index;

const Card = ({ item }: { item: typeof InTouch[0] }) => {
  return (
    <div className="w-1/2 p-[0.89rem] ">
      <a href={siteConfig.siteUrl} target="_blank" className="">
        <div className="group p-[3.5rem] bg-[#f3f4f4] rounded-[3.5rem]">
          <header className="w-1/2 text-balance text-[2.7rem] leading-[110%] font-medium">{item.title}</header>

          <div className="h-[22rem]">
            <img src={item.imgSrc} className="w-full h-full" alt={item.title} />
          </div>

          <div className="flex justify-between items-center mt-[1.6rem]">
            <p className="w-1/2 text-[2rem] leading-[120%] text-black/60 ">{item.subtitle}</p>
            <ChevronIcon className="w-[5.3rem] h-[5.3rem] transition duration-300 group-hover:fill-primary group-hover:text-black" />
          </div>
        </div>
      </a>
    </div>
  )
}
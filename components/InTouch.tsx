import { InTouch } from "@/utils/data";

import { ChevronIcon } from "./icons/ChevronIcon";

import { siteConfig } from "@/utils/site";

const Index = () => {
  return (
    <section className="base-max-width pt-[9rem]">
      <h2 className="mb-[3.5rem] text-center text-[7.1rem] font-medium leading-[100%] tracking-[-0.06em] md:text-[5.5rem]">
        Будем на связи
      </h2>

      <div className="flex flex-wrap">
        {InTouch.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};
export default Index;

const Card = ({ item }: { item: (typeof InTouch)[0] }) => {
  return (
    <div className="w-1/2 p-[0.89rem] md:w-full md:px-[2.7rem]">
      <a href={siteConfig.siteUrl} target="_blank" className="">
        <div className="base-padding group rounded-[3.5rem] bg-[#f3f4f4]">
          <header className="w-1/2 text-balance text-[2.7rem] font-medium leading-[110%] md:text-[3.5rem]">
            {item.title}
          </header>

          <div className="h-[22rem] md:h-[18rem] md:w-full">
            <img src={item.imgSrc} className="h-full w-full object-cover md:object-contain" alt={item.title} />
          </div>

          <div className="mt-[1.6rem] flex items-center justify-between">
            <p className="w-1/2 text-[2rem] leading-[120%] tracking-tight text-black/60">{item.subtitle}</p>
            <ChevronIcon className="h-[5.3rem] w-[5.3rem] transition duration-300 group-hover:fill-primary group-hover:text-black" />
          </div>
        </div>
      </a>
    </div>
  );
};

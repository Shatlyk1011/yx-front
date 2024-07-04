import { Advices } from "@/utils/data";

const Index = () => {
  return (
    <section className="base-max-width pt-[9rem]">
      <h2 className="mb-[35px] text-center text-[7.1rem] font-medium leading-[100%] tracking-[-0.06em] md:text-[5.5rem]">
        Советы по подготовке
      </h2>
      <div className="base-x-padding flex flex-wrap md:w-full md:flex-nowrap md:overflow-x-scroll ">
        {Advices.map(({ title, subtitle, imgSrc, paragraphs }, idx) => (
          <article key={idx} className="w-1/2 p-[0.9rem] md:w-[85%] md:shrink-0">
            <div className="base-padding relative flex h-full min-h-[44rem] flex-col justify-between rounded-[3.6rem] bg-[#f3f4f4] md:w-full">
              <figure className="flex items-center space-x-[1.8rem]">
                <img
                  src={imgSrc}
                  className="h-[12.5rem] w-[12.5rem] rounded-full object-contain md:h-[8rem] md:w-[8rem]"
                  alt={title}
                />
                <div className="leading-[100%]">
                  <figcaption className="font-medium ">{title}</figcaption>
                  <p className="mt-[0.4rem] leading-[100%] tracking-tight text-black/60 md:text-[1.7rem] ">
                    {subtitle}
                  </p>
                </div>
              </figure>
              <div className="pt-[1.6rem]">
                {paragraphs.map((p, idx) => (
                  <p key={idx} className="font-medium leading-[120%] tracking-tight [&:not(:first-child)]:mt-[0.9rem] ">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Index;

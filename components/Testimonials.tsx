import { Testimonials } from "@/utils/data";

import TestimonialModal from "@/components/ui/TestimonialModal";

const Index = () => {
  return (
    <>
      <section className="base-max-width pt-[9rem]">
        <h2 className="mb-[3.5rem] text-center text-[7.1rem] font-medium leading-[100%] tracking-[-0.06em] md:text-[5.5rem]">
          Отзывы
        </h2>
        <div className="base-x-padding flex flex-wrap md:flex-nowrap md:overflow-x-scroll">
          {Testimonials.map(({ title, subtitle, imgSrc, paragraph }, idx) => (
            <article key={idx} className="w-[33.333%] p-[0.9rem] md:w-[85%] md:flex-shrink-0">
              <div className="base-padding relative flex h-full min-h-[34rem] flex-col justify-between rounded-[3.6rem] bg-[#f3f4f4] md:w-full">
                <figure className="flex items-center space-x-[1.8rem]">
                  <img src={imgSrc} className="h-[6.2rem] w-[6.2rem] rounded-full object-contain" alt={title} />
                  <div className="leading-[100%]">
                    <figcaption className="font-medium">{title}</figcaption>
                    <p className="mt-[0.4rem] tracking-tight text-black/60">{subtitle}</p>
                  </div>
                </figure>
                <div className="pt-[1.6rem]">
                  <p key={idx} className="text-[2.4rem] font-medium leading-[110%] tracking-tighter">
                    {paragraph}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
export default Index;

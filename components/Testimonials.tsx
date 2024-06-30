import { Testimonials } from "@/utils/data";

import TestimonialModal from '@/components/ui/TestimonialModal'

const Index = () => {
  return (
    <>
    <section className="base-max-width pt-[9rem]">
        <h2 className='text-[7.1rem] leading-[100%] text-center font-medium tracking-[-0.06em] mb-[3.5rem]'>Отзывы</h2>
        <div className="flex flex-wrap base-x-padding">
        {Testimonials.map(({ title, subtitle, imgSrc, paragraph }, idx) => (
          <article key={idx} className="w-[33.333%] p-[0.9rem] ">
            <div className='base-padding h-full bg-[#f3f4f4] rounded-[3.6rem] flex flex-col justify-between min-h-[34rem] relative'>
              <figure className='flex items-center space-x-[1.8rem]'>
                <img src={imgSrc} className='h-[6.2rem] w-[6.2rem] rounded-full object-contain' alt={title} />
                <div className='leading-[100%]'>
                  <figcaption className='font-medium'>{title}</figcaption>
                  <p className='text-black/60 tracking-tight mt-[0.4rem]'>{subtitle}</p>
                </div>
              </figure>
              <div className='pt-[1.6rem]'>
                <p key={idx} className="leading-[110%] font-medium tracking-tighter text-[2.4rem]">{paragraph}</p>
              </div>
            </div>
          </article>
        ))}
        </div>
    </section>
    </>
  )
};
export default Index
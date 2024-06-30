import { Advices } from '@/utils/data'

const Index = () => {
  return (
    <section className="base-max-width pt-[9rem]">
      <h2 className='text-[7.1rem] leading-[100%] text-center font-medium tracking-[-0.06em] mb-[35px]'>Советы по подготовке</h2>
      <div className="flex flex-wrap base-x-padding">
        {Advices.map(({ title, subtitle, imgSrc, paragraphs }, idx) => (
          <article key={idx} className="w-[50%] p-[0.9rem] ">
            <div className='base-padding h-full bg-[#f3f4f4] rounded-[3.6rem] flex flex-col justify-between min-h-[44rem] relative'>
              <figure className='flex items-center space-x-[1.8rem]'>
                <img src={imgSrc} className='h-[12.5rem] w-[12.5rem] rounded-full object-contain' alt={title} />
                <div className='leading-[100%]'>
                  <figcaption className='font-medium '>{title}</figcaption>
                  <p className='text-black/60 tracking-tight mt-[0.4rem]'>{subtitle}</p>
                </div>
              </figure>
              <div className='pt-[1.6rem]'>
                {paragraphs.map((p, idx) => (
                  <p key={idx} className="leading-[120%] font-medium tracking-tight [&:not(:first-child)]:mt-[0.9rem] ">{p}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
};
export default Index
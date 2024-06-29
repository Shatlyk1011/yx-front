import { Selection } from "@/data";

const Index = () => {

  return (
    <section className='pt-[9rem] '>
      <div className="base-max-width">
        <div className='flex space-x-[1.8rem]'>
          {/* left side */}
          <div className='flex flex-1 flex-col justify-between'>
            <p className='text-[5.4rem] tracking-tight leading-[100%] font-medium'>Примеры задач, <br /> которые решают <br /> стажёры</p>
            <div className='flex items-end space-x-[1.8rem]'>
              <div className='flex-1'>
                <img src="./dino-gif.gif" alt="" />
              </div>
              <div className='flex-1 h-[30rem] relative'>
                <div className='w-full p-[1.8rem] rounded-[1.6rem] bg-[#FFEBDE]' style={{ borderBottomLeftRadius: 0 }}>
                  <p className='text-[2rem] leading-9 tracking-tighter mb-[2rem]'>Всё получится!</p>
                  <div className='w-full flex justify-end'>
                    <img src="./icons/eyes.svg" className='w-[5.2rem] h-[5.2rem] relative right-[0.6rem] bottom-[0.6rem]' alt="eyes icon" />
                  </div>
                </div>

                <img src="./icons/flower.svg" className='mt-auto w-[10rem] absolute bottom-0 right-[50%] translate-x-[50%]' alt="flower icon" />
              </div>
            </div>
          </div>

          {/* right side */}
          <div className='flex flex-1 flex-col space-y-[1.5rem] '>
            {Selection.map(({ title, paragraphs }, idx) => (
              <article key={idx} className='p-[3.5rem] rounded-[36px] bg-[#F3F4F4] flex items-center'>
                <div className="flex flex-col">
                  <div className="">
                    <span className="inline-block text-white bg-black rounded-full px-[1rem] py-[0.7rem] leading-[100%] text-[1.4rem] mb-[1.8rem]">Шаг {idx + 1}</span>
                    <div className="text-[2.7rem] tracking-tighter font-medium leading-[115%] mb-[3.5rem]">{title}</div>
                  </div>
                    {paragraphs.map((p, idx) => (
                      <p key={idx} className="text-[2rem] leading-[110%] font-medium text-black/70 tracking-tight [&:not(:first-child)]:mt-[0.9rem] ">{p}</p>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};
export default Index
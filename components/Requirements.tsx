import { Requirements } from "@/data";

const Index = () => {

  return (
    <section className="base-max-width pt-[8.9rem] px-[3.5rem]">
      <h2 className='text-[7.1rem] leading-[100%] text-center font-medium tracking-[-0.06em] mb-[35px]'>Что нужно уметь</h2>

      <div>
        {Requirements.map((text, idx) => (
          <div key={idx} className='p-[0.9rem]'>
            <div className='py-[3.5rem] pr-[3.5rem] pl-[12.4rem] bg-[#f3f4f4] relative rounded-[3.6rem]'>
              <img src={`./icons/${idx + 1}.svg`} className='absolute left-[2.4rem] top-[50%] translate-y-[-50%] w-[5.4rem] h-[5.4rem]' alt="numbers" />
              <p className='text-[2.1rem] leading-10 tracking-tighter font-medium'>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};
export default Index
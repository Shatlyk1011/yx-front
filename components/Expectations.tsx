import { Expectations } from "@/utils/data";

const Index = () => {
  return (
    <section className="base-max-width pt-[9rem]">
      <h2 className='text-[7.1rem] leading-[100%] text-center font-medium tracking-[-0.06em] mb-[3.5rem]'>Что вас ждёт</h2>
      <div className="flex flex-wrap">
        {Expectations.map(({ title, iconPath }, idx) => (
          <div key={idx} className="p-[0.67rem]  w-[50%]">
            <div className="flex items-center space-x-[4rem] justify-between p-[3.5rem] rounded-[3.6rem] bg-[#f3f4f4] w-full ">
              <div className="text-[2.4rem] tracking-tight text-balance font-medium ">{title}</div>
              <img src={iconPath} alt="icon" className="w-[10.6rem] h-[10.6rem]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};
export default Index
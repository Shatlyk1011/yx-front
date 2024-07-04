import { Expectations } from "@/utils/data";

const Index = () => {
  return (
    <section className="base-max-width pt-[9rem]">
      <h2 className="mb-[3.5rem] text-center text-[7.1rem] font-medium leading-[100%] tracking-[-0.06em] md:text-[5.5rem]">
        Что вас ждёт
      </h2>
      <div className="flex flex-wrap">
        {Expectations.map(({ title, iconPath }, idx) => (
          <div key={idx} className="w-1/2 p-[0.67rem] md:w-full md:p-[1.7rem]">
            <div className="base-padding flex w-full items-center justify-between space-x-[4rem] rounded-[3.6rem] bg-[#f3f4f4] ">
              <div className="text-balance text-[2.4rem] font-medium tracking-tight ">{title}</div>
              <img src={iconPath} alt="icon" className="h-[10.6rem] w-[10.6rem] md:h-[8rem] md:w-[8rem]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Index;

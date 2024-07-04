import { Requirements } from "@/utils/data";

const Index = () => {
  return (
    <section className="base-max-width base-x-padding pt-[8.9rem]">
      <h2 className="mb-[3.5rem] text-center text-[7.1rem] font-medium leading-[100%] tracking-[-0.06em] md:text-[5.5rem]">
        Что нужно уметь
      </h2>

      <div>
        {Requirements.map((text, idx) => (
          <div key={idx} className="p-[0.9rem]">
            <div className="base-y-padding relative rounded-[3.6rem] bg-[#f3f4f4] pl-[12.4rem] pr-[3.5rem] md:flex md:flex-col md:items-center md:gap-[5.3rem] md:p-[3.2rem]">
              <img
                src={`./icons/${idx + 1}.svg`}
                className="absolute left-[2.4rem] top-[50%] h-[5.4rem] w-[5.4rem] translate-y-[-50%] md:static md:translate-y-0"
                alt="numbers"
              />
              <p className="text-[2.1rem] font-medium leading-10 tracking-tighter md:text-center md:text-[2.7rem]">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Index;

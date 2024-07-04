import { Selection } from "@/utils/data";

const Index = () => {
  return (
    <section className="pt-[9rem] ">
      <div className="base-max-width base-x-padding">
        <div className="flex space-x-[1.8rem] md:flex-col">
          {/* left side */}
          <div className="flex flex-1 flex-col justify-between">
            <p className="text-[5.4rem] font-medium leading-[100%] tracking-tight">Как проходит отбор</p>
            <div className="flex items-end space-x-[1.8rem]">
              <div className="flex-1">
                <img src="./dino-gif.gif" alt="" />
              </div>
              <div className="relative h-[30rem] flex-1">
                <div className="w-full rounded-[1.6rem] bg-[#FFEBDE] p-[1.8rem]" style={{ borderBottomLeftRadius: 0 }}>
                  <p className="mb-[2rem] text-[2rem] leading-9 tracking-tighter">Всё получится!</p>
                  <div className="flex w-full justify-end">
                    <img
                      src="./icons/eyes.svg"
                      className="relative bottom-[0.6rem] right-[0.6rem] h-[5.2rem] w-[5.2rem]"
                      alt="eyes icon"
                    />
                  </div>
                </div>

                <img
                  src="./icons/flower.svg"
                  className="absolute bottom-0 right-[50%] mt-auto w-[10rem] translate-x-[50%] md:w-[8rem]"
                  alt="flower icon"
                />
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex flex-1 flex-col space-y-[1.5rem] ">
            {Selection.map(({ title, paragraphs }, idx) => (
              <article key={idx} className="base-padding flex items-center rounded-[36px] bg-[#F3F4F4]">
                <div className="flex flex-col">
                  <div className="">
                    <span className="mb-[1.8rem] inline-block rounded-full bg-black px-[1rem] py-[0.7rem] text-[1.4rem] leading-[100%] text-white">
                      Шаг {idx + 1}
                    </span>
                    <div className="mb-[3.5rem] text-[2.7rem] font-medium leading-[115%] tracking-tighter md:mb-[1.7rem] md:text-balance">
                      {title}
                    </div>
                  </div>
                  {paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-[2rem] font-medium leading-[110%] tracking-tight text-black/70 [&:not(:first-child)]:mt-[0.9rem] "
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Index;

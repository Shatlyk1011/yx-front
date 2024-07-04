import { Samples } from "@/utils/data";

const Index = () => {
  return (
    <section className="pt-[9rem] ">
      <div className="base-max-width base-x-padding">
        <div className="flex space-x-[1.8rem] md:flex-col">
          {/* left side */}
          <div className="flex flex-1 flex-col justify-between">
            <p className="text-[5.4rem] font-medium leading-[100%] tracking-tight">
              Примеры задач, <br /> которые решают <br /> стажёры
            </p>
            <div className="flex items-end space-x-[1.8rem] md:space-x-[0]">
              <div className="flex-1">
                <img src="./dino-gif.gif" alt="" />
              </div>
              <div className="relative h-[42rem] flex-1">
                <div className="w-full rounded-[1.6rem] bg-[#FFEBDE] p-[1.8rem]" style={{ borderBottomLeftRadius: 0 }}>
                  <p className="mb-[2rem] text-[2rem] leading-9 tracking-tighter">
                    Развивайте интерфейсы <br /> и создавайте новые!
                  </p>
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
                  className="absolute bottom-0 right-0 mt-auto w-[10rem]"
                  alt="flower icon"
                />
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex flex-1 flex-col space-y-[1.5rem] ">
            {Samples.map((text) => (
              <div
                key={text}
                className="relative flex items-center rounded-[3.5rem] bg-[#F3F4F4] py-[5.7rem] pl-[13.3rem] pr-[3.2rem] md:py-[2.7rem] md:pl-[10rem]"
              >
                <img
                  src="./icons/yx-dot.svg"
                  alt="dot icon"
                  className="absolute left-[2.8rem] top-[50%] translate-y-[-50%]"
                />
                <p className="text-[2.4rem] font-medium tracking-tighter">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Index;

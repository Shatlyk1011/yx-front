import InfiniteCarousel from "@/components/ui/InfiniteCarousel";

const Index = () => {
  return (
    <section className="base-max-width base-x-padding pt-[9.0rem]">
      <div className="base-y-padding rounded-[3.6rem] bg-[#f3f4f4]">
        <div className="base-x-padding mb-[12rem] flex gap-[10rem] md:mb-[3rem] md:flex-col md:gap-[3rem]">
          <p className="w-1/2 text-balance text-[4.4rem] font-medium leading-[4.4rem] tracking-tight md:w-full">
            В каких сервисах есть стажировка по стеку
          </p>
          <p className="text-[2rem] font-semibold leading-9 text-black/60">
            Станьте частью одной из команд <br /> фронтенд-разработчиков в Яндексе
          </p>
        </div>
        <InfiniteCarousel classes="">
          {Array.from({ length: 37 }).map((_, idx) => (
            <img
              key={idx}
              src={`icons/yx-logos/${idx}.svg`}
              className="mr-[3rem] h-[13rem] w-[13rem] md:mr-[1.5rem] md:h-[8rem] md:w-[8rem]"
              alt="yx-logo"
            />
          ))}
        </InfiniteCarousel>
      </div>
    </section>
  );
};
export default Index;

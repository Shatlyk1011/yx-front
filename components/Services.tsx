
import InfiniteCarousel from '@/components/ui/InfiniteCarousel'

const Index = () => {
  return (
    <section className="base-max-width pt-[9.0rem] px-[3.5rem]">
      <div className="py-[3.5rem] bg-[#f3f4f4] rounded-[36px]">
        <div className="flex gap-[10rem] px-[35px] mb-[12rem]">
          <p className="text-[4.4rem] tracking-tight font-extrabold leading-[4.4rem] w-[50%]">Стажировка <br />  для начинающих <br /> специалистов</p>
          <p className="text-black/60 text-[2rem] leading-9 font-semibold">Станьте частью одной из команд <br /> фронтенд-разработчиков в Яндексе</p>
        </div>
        <InfiniteCarousel classes="gap-5 first:mr-5">
          {Array.from({ length: 37 }).map((_, idx) => (
            <img
              key={idx}
              src={`icons/yx-logos/${idx}.svg`}
              className="w-full h-full"
              alt="yx-logo"
            />
          ))}
        </InfiniteCarousel>
      </div>
    </section>
  )
};
export default Index;


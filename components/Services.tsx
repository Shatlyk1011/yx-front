
import InfiniteCarousel from '@/components/ui/InfiniteCarousel'

const Index = () => {
  return (
    <section className="base-max-width pt-[9.0rem] px-[3.5rem]">
      <div className="py-[3.5rem] bg-[#f3f4f4] rounded-[3.6rem]">
        <div className="flex gap-[10rem] px-[3.5rem] mb-[12rem]">
          <p className="text-[4.4rem] tracking-tight font-medium leading-[4.4rem] w-[50%] text-balance">В каких сервисах есть стажировка по стеку</p>
          <p className="text-black/60 text-[2rem] leading-9 font-semibold">Станьте частью одной из команд <br /> фронтенд-разработчиков в Яндексе</p>
        </div>
        <InfiniteCarousel classes="">
          {Array.from({ length: 37 }).map((_, idx) => (
            <img
              key={idx}
              src={`icons/yx-logos/${idx}.svg`}
              className="mr-[3rem] w-[13rem] h-[13rem]"
              alt="yx-logo"
            />
          ))}
        </InfiniteCarousel>
      </div>
    </section>
  )
};
export default Index;


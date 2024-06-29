import InfiniteCarousel from '@/components/ui/InfiniteCarousel'

const ProgramCarousel: CarouselItem[] = [
  { text: "FRONTEND", iconSrc: "./images/dino.webp", classes: "bg-[#ff5f00]" },
  { text: "HTML", iconSrc: "./images/fingers.webp", classes: "bg-[#2ae881]" },
  { text: "CSS", iconSrc: "./images/dino.webp", classes: "bg-[#ff5f00]" },
  { text: "JAVASCRIPT", iconSrc: "./images/fingers.webp", classes: "bg-[#b6a4ff]" },
  { text: "INTERN", iconSrc: "./images/fingers.webp", classes: "bg-[#2ae881]" },

  { text: "FRONTEND", iconSrc: "./images/dino.webp", classes: "bg-[#b6a4ff]" },
  { text: "HTML", iconSrc: "./images/fingers.webp", classes: "bg-[#2ae881]" },
  { text: "CSS", iconSrc: "./images/dino.webp", classes: "bg-[#ff5f00]" },
  { text: "JAVASCRIPT", iconSrc: "./images/fingers.webp", classes: "bg-[#b6a4ff]" },
  { text: "INTERN", iconSrc: "./images/fingers.webp", classes: "bg-[#2ae881]" },
];

const Index = () => {
  return (
    <section className="base-max-width pt-[9.0rem] px-[3.5rem]">
      <div className="py-[3.5rem] bg-[#f3f4f4] rounded-[3.6rem]">
        <div className="flex gap-[10rem] px-[3.5rem] mb-[12rem]">
          <p className=" text-[4.4rem] tracking-tight font-semibold leading-[4.4rem] w-[80%]">Стажировка <br /> для начинающих <br /> специалистов</p>
          <p className=" text-black/60 text-[2rem] leading-9 text-balance font-semibold">Станьте частью одной из команд фронтенд‑разработчиков в Яндексе</p>
        </div>
        <InfiniteCarousel>
          {ProgramCarousel.map(({ iconSrc, text, classes }, index) => (
            <div key={index} className="flex relative h-[8.5rem] ">
              <img
                src={iconSrc}
                className="w-full h-full"
                alt={text}
              />
              <p className={`text-[8rem] font-semibold tracking-tight leading-[9rem] px-[0.8rem] ${classes}`}>{text}</p>
            </div>
          ))}
        </InfiniteCarousel>
      </div>
    </section>
  )
};
export default Index;



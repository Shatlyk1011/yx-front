import InfiniteCarousel from "@/components/ui/InfiniteCarousel";

const ProgramCarousel: CarouselItem[] = [
  { text: "FRONTEND", iconSrc: "./images/dino.webp", classes: "bg-[#ff5f00]" },
  { text: "HTML", iconSrc: "./images/fingers.webp", classes: "bg-[#2ae881]" },
  { text: "CSS", iconSrc: "./images/dino.webp", classes: "bg-[#ff5f00]" },
  {
    text: "JAVASCRIPT",
    iconSrc: "./images/fingers.webp",
    classes: "bg-[#b6a4ff]",
  },
  { text: "INTERN", iconSrc: "./images/fingers.webp", classes: "bg-[#2ae881]" },

  { text: "FRONTEND", iconSrc: "./images/dino.webp", classes: "bg-[#b6a4ff]" },
  { text: "HTML", iconSrc: "./images/fingers.webp", classes: "bg-[#2ae881]" },
  { text: "CSS", iconSrc: "./images/dino.webp", classes: "bg-[#ff5f00]" },
  {
    text: "JAVASCRIPT",
    iconSrc: "./images/fingers.webp",
    classes: "bg-[#b6a4ff]",
  },
  { text: "INTERN", iconSrc: "./images/fingers.webp", classes: "bg-[#2ae881]" },
];

const Index = () => {
  return (
    <section className="base-max-width base-x-padding pt-[9.0rem]">
      <div className="base-y-padding rounded-[3.6rem] bg-[#f3f4f4]">
        <div className="base-x-padding mb-[12rem] flex gap-[10rem] md:flex-col md:gap-[5rem]">
          <p className=" w-[80%] text-[4.4rem] font-semibold leading-[4.4rem] tracking-tight ">
            Стажировка <br /> для начинающих <br /> специалистов
          </p>
          <p className=" text-balance text-[2rem] font-semibold leading-[1.1] text-black/60 md:text-[3rem] ">
            Станьте частью одной из команд фронтенд‑разработчиков в Яндексе
          </p>
        </div>
        <InfiniteCarousel>
          {ProgramCarousel.map(({ iconSrc, text, classes }, index) => (
            <div key={index} className="relative flex h-[8.5rem] md:h-[6.4rem] ">
              <img src={iconSrc} className="h-full w-full" alt={text} />
              <p
                className={`px-[0.8rem] text-[8rem] font-semibold leading-[100%] tracking-tight md:text-[6rem] ${classes}`}
              >
                {text}
              </p>
            </div>
          ))}
        </InfiniteCarousel>
      </div>
    </section>
  );
};
export default Index;

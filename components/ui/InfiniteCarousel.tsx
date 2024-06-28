import { FC } from "react";

interface CarouselProps {
  items: CarouselItem[];
  animate?: boolean;
  shadows?: boolean;
}

const Index: FC<CarouselProps> = ({ items, animate = true, shadows = false }) => {
  return (
    <div
      className="flex overflow-hidden"
      style={{
        maskImage: `${shadows && "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)"}`,
      }}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className={`flex shrink-0 ${animate && "animate-logo-carousel"}`}
        >
          {items.map(({ iconSrc, text, classes }, index) => (
            <div key={index} className="flex relative h-[8.5rem] ">
              <img
                src={iconSrc}
                className="w-full h-full"
                alt={text}
              />
              <p className={`text-[8rem] font-bold tracking-tight leading-[9rem] px-[0.8rem] ${classes}`}>{text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Index
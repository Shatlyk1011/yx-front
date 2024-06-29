import { FC, ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  animate?: boolean;
  shadows?: boolean;
}

const Index: FC<CarouselProps> = ({ children, animate = true, shadows = false }) => {
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
          {children}
        </div>
      ))}
    </div>
  );
};

export default Index
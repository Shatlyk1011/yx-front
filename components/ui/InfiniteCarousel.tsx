import { FC, ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  animate?: boolean;
  classes?: string;
}

const Index: FC<CarouselProps> = ({ children, animate = true, classes }) => {
  return (
    <div className="flex overflow-hidden">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className={`flex shrink-0 ${animate && "animate-logo-carousel"} ${classes}`}>
          {children}
        </div>
      ))}
    </div>
  );
};

export default Index;

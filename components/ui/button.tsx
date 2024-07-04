import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import { cn } from "@/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  classes?: string;
}

const Index: FC<Props> = ({ children, classes, ...props }) => {
  return (
    <button className={cn(`m-[0.35rem] rounded-full text-white ${classes}`)} {...props}>
      {children}
    </button>
  );
};
export default Index;

import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string
  classes?: string
};

const Index: FC<Props> = ({ children, classes, ...props }) => {
  return (
    <button className={` m-[0.35rem]   text-white rounded-full   ${classes}`} {...props}  >
      {children}
    </button>
  )
};
export default Index
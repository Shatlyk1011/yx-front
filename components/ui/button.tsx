import { ButtonHTMLAttributes, FC } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  classes?: string
};

const Index: FC<Props> = ({ children, classes, ...props }) => {
  return (
    <button className={`p-[1.3rem] m-[0.35rem] tracking-tight bg-black text-white rounded-full leading-[100%] hover:bg-primary hover:text-black transition duration-200 ${classes}`} {...props}  >
      {children}
    </button>
  )
};
export default Index
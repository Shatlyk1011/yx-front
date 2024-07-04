"use client";
import { useState } from "react";
import Image from "next/image";

import { navLinks } from "@/utils/data";

import Button from "@/components/ui/button";
import { cn } from "@/utils";

const Index = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="base-x-padding fixed left-0 top-0 z-[50] h-[8rem] w-full py-[1.8rem] md:px-[1.9rem]">
      <div className="base-max-width flex items-center  justify-between space-x-[1.6rem] xl:space-x-0">
        <div className="z-[100] flex">
          <a href="#" className="relative h-[4.4rem] w-[4.4rem]">
            <Image src="./icons/logo.svg" fill={true} className="" alt="yx-logo" />
          </a>
          <a href="#" className="relative h-[4.4rem] w-[4.4rem]">
            <Image src="./icons/yy.svg" fill={true} alt="yy-logo" />
          </a>
        </div>

        <nav
          className={cn(
            `z-[50] rounded-full bg-white p-[1.3rem] shadow-[0_4px_25px_0_rgba(0,0,0,0.08)] transition-all duration-300 xl:invisible xl:fixed xl:left-0 xl:top-0 xl:h-full xl:w-full xl:translate-y-[-2rem] xl:select-none xl:rounded-none xl:font-medium xl:opacity-0 ${isOpen && "xl:visible xl:translate-y-0 xl:select-auto xl:opacity-100"}`,
          )}
        >
          <ul className="flex space-x-[3.2rem] tracking-tight xl:mt-[8rem] xl:flex-col xl:space-x-0 xl:space-y-[1.7rem] xl:text-[2.8rem] xl:font-medium xl:uppercase xl:leading-[2.24rem] sm:space-y-[1rem] sm:text-[3.6rem] sm:leading-[100%]">
            {navLinks.map(({ title, href }) => (
              <li key={title} className="transition hover:text-[#b6a4ff]">
                <a href={href}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="z-[100] flex items-center  space-x-[0.9rem]">
          <Button className="rounded-full bg-black p-[1.3rem] leading-[1] text-white transition duration-200 hover:bg-primary hover:text-black">
            Хочу в Яндекс
          </Button>
          <button
            onClick={() => setOpen(!isOpen)}
            type="button"
            className={cn(
              `relative box-content hidden h-[3.2rem] w-[3.2rem] animate-slide-left rounded-full bg-black p-2 leading-[1] transition-all duration-200 before:relative before:top-[4px] before:m-auto before:block before:h-[2px] before:w-[70%] before:bg-white before:content-[''] after:relative after:top-[-4px] after:m-auto after:block after:h-[2px] after:w-[70%] after:bg-white after:content-['']  xl:block sm:!animate-none ${isOpen && "translate-x-[2rem] animate-slide-right before:top-[1px] before:rotate-[-45deg] after:top-[-1px] after:rotate-[45deg] sm:!animate-none"}`,
            )}
          ></button>
        </div>
      </div>
    </header>
  );
};
export default Index;

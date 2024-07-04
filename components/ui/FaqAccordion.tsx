"use client";
import { FC, useState } from "react";

import { ChevronIcon } from "../icons/ChevronIcon";

import { cn } from "@/utils";

interface Props {
  accordion: any;
}

const Index: FC<Props> = ({ accordion }) => {
  const [open, setOpen] = useState(false);

  const handleAccordion = () => setOpen(!open);
  return (
    <div className="w-full rounded-[3.6rem] bg-white p-[1.9rem] pl-[3.5rem]">
      <button type="button" onClick={handleAccordion} className="flex w-full items-center justify-between font-medium">
        <p className="text-[2.3rem] font-medium md:max-w-[80%] md:text-start">{accordion.title}</p>
        <ChevronIcon
          className={`h-[5.3rem] w-[5.3rem] rotate-90 transition duration-300 ease-out group-hover:fill-primary group-hover:text-black ${open && "rotate-[270deg]"}`}
        />
      </button>

      <div
        className={cn(
          `duration-300" grid grid-rows-[0] transition-all ease-out ${open && "!h-full grid-rows-1 pb-[1.2rem] pt-[3.1rem]"}`,
        )}
      >
        {accordion.paragraphs.map((p: any, idx: any) => (
          <p
            key={idx}
            className={cn(
              `h-0 overflow-hidden leading-[120%] tracking-tight text-black/60  opacity-0 transition-colors duration-300 ease-out ${open && "!h-full opacity-100 [&:not(:first-child)]:mt-[0.9rem]"}`,
            )}
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  );
};
export default Index;

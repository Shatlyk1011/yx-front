"use client";

import { useState } from "react";
import { MaterialsTabs } from "@/utils/data";
import { ChevronIcon } from "@/components/icons/ChevronIcon";

const Tabs = ["Всё про фронтенд- и веб-разработку", "Алгоритмы"];

const Index = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section className="base-max-width pt-[9rem]">
      <h2 className="mb-[3.5rem] text-center text-[7.1rem] font-medium leading-[100%] tracking-[-0.06em] md:mx-auto md:max-w-[70%] md:text-[5.5rem]">
        Полезные материалы
      </h2>
      <div className="">
        <div className="flex justify-center">
          {Tabs.map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(idx)}
              className={`m-[0.4rem] rounded-full bg-[#f3f4f4] p-[1.8rem] text-[1.4rem] tracking-tight transition duration-300 hover:bg-primary hover:text-black ${selectedTab === idx && "bg-black text-white"}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="base-x-padding mt-[3.5rem] flex flex-wrap">
        {MaterialsTabs[selectedTab].map(({ title, href }, idx) => (
          <a href={href} target="_blank" key={idx} className="group w-1/2 cursor-pointer p-[0.9rem] md:w-full">
            <div className="flex h-full items-center justify-between rounded-[3.6rem] bg-[#f3f4f4] px-[2.2rem] py-[2.7rem]">
              <p className="text-[2.4rem] font-medium md:max-w-[80%]">{title}</p>
              <ChevronIcon className="h-[5.3rem] w-[5.3rem] transition duration-300 group-hover:fill-primary group-hover:text-black " />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
export default Index;

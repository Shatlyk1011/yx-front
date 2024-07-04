import { FC } from "react";

import { FaqAccordion } from "@/utils/data";

import FaqAccordionComponent from "@/components/ui/FaqAccordion";

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section className="base-max-width pt-[9rem]">
      <div className="base-padding rounded-[3.5rem] bg-[#f3f4f4]">
        <h2 className="mb-[3.5rem] text-left text-[7.1rem] font-medium leading-[100%] tracking-[-0.06em] md:text-[5.5rem]">
          FAQ
        </h2>

        <div className="w-full space-y-[1.8rem]">
          {FaqAccordion.map((accordion) => (
            <FaqAccordionComponent key={accordion.title} accordion={accordion} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Index;

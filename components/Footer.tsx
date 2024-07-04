import Image from "next/image";

const Index = () => {
  return (
    <footer className="base-max-width relative pt-[1.8rem]">
      <div className="relative left-[-30%]  z-[-1] h-[18rem] w-[160%] bg-repeat-x">
        <Image src="/images/infinite-bg.png" className="h-full w-full object-cover" fill={true} alt="infinite-bg" />
      </div>
      <div className="relative left-[-30%] z-[-1] h-[9rem] w-[160%] bg-repeat-x">
        <Image src="/images/infinite-bg.png" className="h-full w-full object-cover" fill={true} alt="infinite-bg" />
      </div>

      <div className="flex w-full justify-center pb-[1.6rem] pt-[0.9rem] text-center text-[1.4rem] text-black/60">
        <p className="max-w-[55rem] leading-[110%] md:px-[2rem] md:text-[1.7rem]">
          Предложение стажировки, её сроки и размер вознаграждения определяются <br className="md:hidden" /> по итогам
          собеседования и выполнения кандидатом тестовых заданий. <br className="md:hidden" /> Кандидату не
          гарантируется трудоустройство и соответствие <br className="md:hidden" /> вознаграждения его ожиданиям. <br />
          <span className="mt-[0.9rem] inline-block">© ООО «Яндекс», 2024</span>
        </p>
      </div>
    </footer>
  );
};
export default Index;

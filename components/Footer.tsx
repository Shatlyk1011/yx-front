import Image from "next/image";

const Index = () => {
  return (
    <footer className="base-max-width relative pt-[1.8rem]">
      <div className='w-[160%] h-[18rem]  left-[-30%] z-[-1] bg-repeat-x relative'>
        <Image src="/images/infinite-bg.png" className='w-full h-full object-cover' fill={true} alt="infinite-bg" />
      </div>
      <div className='w-[160%] h-[9rem] left-[-30%] z-[-1] bg-repeat-x relative'>
        <Image src="/images/infinite-bg.png" className='w-full h-full object-cover' fill={true} alt="infinite-bg" />
      </div>

      <div className="text-center flex justify-center w-full text-black/60 text-[1.4rem] pt-[0.9rem] pb-[1.6rem]">
        <p className="max-w-[55rem]">Предложение стажировки, её сроки и размер вознаграждения определяются <br /> по итогам собеседования и выполнения кандидатом тестовых заданий. <br /> Кандидату не гарантируется трудоустройство и соответствие <br /> вознаграждения его ожиданиям. <br />
          <span className="inline-block mt-[0.9rem]">© ООО «Яндекс», 2024</span></p>
      </div>
    </footer>
  )
};
export default Index
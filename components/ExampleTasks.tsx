
const samples = ["Развивают Нейро", "Создают геймификацию на трекинге заказа в Яндекс Лавке", "Улучшают интерфейсы в Маркете", "Совершенствуют интерфейс кабинета подписчика Яндекс Плюса", "Создают лендинги, проводят редизайн и добавляют новые функции в Кинопоиске", "Разрабатывают продуктовые эксперименты для главной страницы в Яндекс Go"]

const Index = () => {

  return (
    <section className='pt-[9rem] pb-[8rem]'>
      <div className="base-max-width">
        <div className='flex space-x-[1.8rem]'>
          {/* left side */}
          <div className='flex flex-1 flex-col justify-between'>
            <p className='text-[5.4rem] tracking-tight leading-[100%] font-medium'>Примеры задач, <br /> которые решают <br /> стажёры</p>
            <div className='flex items-end space-x-[1.8rem]'>
              <div className='flex-1'>
                <img src="./dino-gif.gif" alt="" />
              </div>
              <div className='flex-1 h-[42rem] relative'>
                <div className='w-full p-[1.8rem] rounded-[1.6rem] bg-[#FFEBDE]' style={{ borderBottomLeftRadius: 0 }}>
                  <p className='text-[2rem] leading-9 tracking-tighter mb-[2rem]'>Развивайте интерфейсы <br /> и создавайте новые!</p>
                  <div className='w-full flex justify-end'>
                    <img src="./icons/eyes.svg" className='w-[5.2rem] h-[5.2rem] relative right-[0.6rem] bottom-[0.6rem]' alt="eyes icon" />
                  </div>
                </div>

                <img src="./icons/flower.svg" className='mt-auto w-[10rem] absolute bottom-0 right-0' alt="flower icon" />
              </div>
            </div>
          </div>

          {/* right side */}
          <div className='flex flex-1 flex-col space-y-[1.5rem] '>
            {samples.map(text => (
              <div key={text} className='py-[5.7rem] relative pr-[3.2rem] pl-[13.3rem] rounded-[36px] bg-[#F3F4F4] flex items-center'>
                <img src="./icons/yx-dot.svg" alt="dot icon" className='absolute top-[50%] translate-y-[-50%] left-[2.8rem]' />
                <p className='text-[2.4rem] font-medium tracking-tighter'>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};
export default Index
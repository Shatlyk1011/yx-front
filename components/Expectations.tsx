
const expectations = [
  {
    title: 'Оплачиваемая стажировка',
    iconPath: './icons/expectations/ex-1.svg'
  },
  {
    title: 'Доступ к корпоративным фичам',
    iconPath: './icons/expectations/ex-2.svg'
  },
  {
    title: 'Компенсация обедов',
    iconPath: './icons/expectations/ex-3.svg'
  },
  {
    title: 'Оплата проезда и проживания в Москве',
    iconPath: './icons/expectations/ex-4.svg'
  },
  {
    title: 'Официальное оформление на стажировку или практику от вуза',
    iconPath: './icons/expectations/ex-5.svg'
  },
  {
    title: 'Гибкий и гибридный график:20, 30 или 40 часов в неделю',
    iconPath: './icons/expectations/ex-6.svg'
  },
]

const Index = () => {
  return (
    <section className="base-max-width pt-[9rem]">
      <h2 className='text-[7.1rem] leading-[100%] text-center font-medium tracking-[-0.06em] mb-[35px]'>Что вас ждёт</h2>
      <div className="flex flex-wrap">
        {expectations.map(({ title, iconPath }, idx) => (
          <div key={idx} className="p-[0.67rem]  w-[50%]">
            <div className="flex items-center space-x-[4rem] justify-between p-[3.5rem] rounded-[3.6rem] bg-[#f3f4f4] w-full ">
              <div className="text-[2.4rem] tracking-tight text-balance font-medium ">{title}</div>
              <img src={iconPath} alt="icon" className="w-[10.6rem] h-[10.6rem]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};
export default Index

const selection = [
  {
    title: 'Тестовое задание в системе Яндекс Контест',
    paragraphs: ["Вам предстоит решить 5 задач за 6 часов. Перед тем как начать, рекомендуем пройти тренировочный контест — в нём собраны тестовые задания прошлых лет."]
  },

  {
    title: 'Секция на код',
    paragraphs: ["Это техническое собеседование, которое продлится около часа. Вас попросят выполнить от 3 до 6 задач по JavaScript, написав код в онлайн-редакторе.", "Чтобы успешно пройти интервью, вам нужно знать основы JavaScript: типы данных, примитивы, функции, асинхронность, прототипы и наследование, замыкания, область и контекст вызова.", "Большим плюсом будет понимание промисов. Не пугайтесь, если вам зададут теоретические вопросы по вёрстке."]
  },
  {
    title: 'Тестовое задание в системе Яндекс Контест',
    paragraphs: ["Собеседующий попросит вас решить от 2 до 4 задач оптимальным способом в онлайн-редакторе. Потребуется владение основами базовых алгоритмов и понимание их сложности, а также знаниями о структурах данных. Мы оценим ваше умение алгоритмически мыслить, читать свой код и находить в нём ошибки."]
  },
  {
    title: 'Тестовое задание в системе Яндекс Контест',
    paragraphs: ["Это встречи-знакомства с вашими будущими коллегами. Они по очереди расскажут, как устроена работа в Яндексе, чем они занимаются и какую роль предполагается отвести вам, а вы сможете задать все интересующие вопросы.", "Будьте готовы рассказать о себе, вашем опыте и навыках и ответить на теоретические вопросы."]
  },
]

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
              <div className='flex-1 h-[30rem] relative'>
                <div className='w-full p-[1.8rem] rounded-[1.6rem] bg-[#FFEBDE]' style={{ borderBottomLeftRadius: 0 }}>
                  <p className='text-[2rem] leading-9 tracking-tighter mb-[2rem]'>Всё получится!</p>
                  <div className='w-full flex justify-end'>
                    <img src="./icons/eyes.svg" className='w-[5.2rem] h-[5.2rem] relative right-[0.6rem] bottom-[0.6rem]' alt="eyes icon" />
                  </div>
                </div>

                <img src="./icons/flower.svg" className='mt-auto w-[10rem] absolute bottom-0 right-[50%] translate-x-[50%]' alt="flower icon" />
              </div>
            </div>
          </div>

          {/* right side */}
          <div className='flex flex-1 flex-col space-y-[1.5rem] '>
            {selection.map(({ title, paragraphs }, idx) => (
              <div key={idx} className='p-[3.5rem] rounded-[36px] bg-[#F3F4F4] flex items-center'>
                <div className="flex flex-col">
                  <div className="">
                    <span className="inline-block text-white bg-black rounded-full px-[1rem] py-[0.7rem] leading-[100%] text-[1.4rem] mb-[1.8rem]">Шаг {idx + 1}</span>
                    <div className="text-[2.7rem] tracking-tighter font-medium leading-[115%] mb-[35px]">{title}</div>
                  </div>
                  <div className="">
                    {paragraphs.map((p, idx) => (
                      <p key={idx} className="text-[2rem] leading-[110%] font-medium text-black/70 tracking-tight [&:not(:first-child)]:mt-[0.9rem] ">{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};
export default Index
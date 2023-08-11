'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { Jura } from 'next/font/google';
import { Block, AnnaText, ContestText } from './landingComponents.js';
import Image from 'next/image';

const jura = Jura({
  subsets: ['cyrillic', 'latin'],
});

const LandingPage: React.FC = () => {
  const [Image1, setImage1] = useState(false);
  const [Image2, setImage2] = useState(false);
  const [Image3, setImage3] = useState(false);
  const [Image4, setImage4] = useState(false);
  const [Image5, setImage5] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.upperPanel}>
        <Image
          width={1648}
          height={710}
          layout="responsive"
          src="./landing/First.svg"
          alt=""
        />
        <div className={styles.apply}>
          <Link href={'/apply'}>
            <span>Подать заявку</span>
          </Link>
        </div>
        <span className={styles.school}>Школа предпринимальства</span>
        <span className={styles.business}>Бизнес школа трекеров</span>
        <div className={styles.links}>
          <Link href={'/auth'}>
            <Image
              width={35}
              height={50}
              src="/landing/LK.png"
              layout="intrinsic"
              alt="lk"
            />
          </Link>

          <a href="#" target="_blank">
            <Image
              width={35}
              height={50}
              src="/landing/VK.png"
              layout="intrinsic"
              alt=""
            />
          </a>

          <a
            href="https://www.youtube.com/@techno.startup/featured"
            target="_blank"
          >
            <Image
              width={35}
              height={50}
              src="/landing/YT.png"
              layout="intrinsic"
              alt=""
            />
          </a>
          <br />
          <span>Войти</span>
        </div>
      </div>
      <div className={styles.dlitelnost}>
        <Image
          width={1648}
          height={56}
          layout="responsive"
          src="./landing/dlitelnost.svg"
          alt=""
        />
        <span>Длительность программы — с октября по май.</span>
      </div>
      <div className={styles.secondPart}>
        <div className={styles.left}>
          <span className={jura.className}>ДЕМО-РОЛИК О НАС</span>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/QZlcJ9gSmKE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <span className={styles.first}>
            Курс «Школа предпринимательства» направлен на развитие
            предпринимательского мышления обучающихся, желающих воплотить свои
            идеи в жизнь. Участники создадут свой собственный бизнес-проект,
            который будет представлен на конкурсе &quot;Высший пилотаж&quot;.
            <br />
            <br />
            Выпускники Школы Предпринимательства уже не первый год занимают
            призовые места в этом конкурсе!
          </span>

          <span className={styles.second}>Описание программы</span>
        </div>

        <div className={styles.right}>
          <span className={jura.className}>УЧАЩИЕСЯ УЗНАЮТ</span>
          {
            <Image
              width={508}
              height={455}
              layout="responsive"
              src="./landing/Bucket.svg"
              alt=""
            />
          }
        </div>
      </div>

      <div className={styles.components}>
        <span className={jura.className}>КОМПОНЕНТЫ ПРОГРАММЫ</span>
      </div>

      <div className={styles.programComponents}>
        <div>
          <Block
            number="01"
            about="интерактивные семинары"
            description="Интерактивная методика взаимодействия на основе разработанных индивидуальных, командных, деловых и ролевых игр, кейсов, викторин."
          />
          <Block
            number="02"
            about="проектное обучение"
            description="Каждый участник работает над построением стартапа, в рамках
            которого приобретает компетенции для создания и внедрения продукта
            на рынок."
          />

          <Block
            number="03"
            about="менторская поддержка"
            description="Консультации с экспертами из клуба менторов и предпринимателей,
            имеющих опыт создания инновационных продуктов для цифрового
            развития страны."
          />
        </div>

        <div>
          <Block
            number="04"
            about="консультации с психологом"
            description="Периодическое взаимодействие команды с коучем и организационным
            психологом для консультирования по ситуации в коллективе —
            удовлетворенность членов команды."
          />

          <Block
            number="05"
            about="траектория развития планов"
            description="Участники тестирования на определение уровней развития необходимых
            hard и soft skills, после которых получают индивидуальные
            рекомендации по обучению."
          />

          <Block
            number="06"
            about="геймификация"
            description="На занятиях участники могут получать внутреннюю валюту курса
            “ШПроты”, которую можно обменивать по бартеру и тратить на
            “покупку” консультаций."
          />
        </div>

        <div>
          <Block
            number="07"
            about="персональный трекинг"
            description="К каждому проекту прикреплен персональный трекер -
            бизнес-наставник, сопровождающий команду на всех этапах реализации
            стартапа."
          />

          <Block
            number="08"
            about="конкурсы и гранты"
            description="Подготовка к участию в профильных конкурсах, поддержка в поиске
            финансирования проекта."
          />

          <Block
            number="09"
            about="спикер-сессии"
            description="Проведение занятий с предпринимателями, руководителями
            предприятий, экспертами в различных областях."
          />
        </div>
      </div>
      <div className={styles.itsAnna}>
        {
          <Image
            width={1642}
            height={701}
            layout="responsive"
            src="./landing/Anna.svg"
            alt=""
          />
        }

        <div className={styles.Annaleft}>
          <AnnaText
            text="Разработка программ, робототехнических наборов и интерактивного
              оборудования для образовательных учреждений"
          />
          <AnnaText text="Закончила МГТУ им. Баумана и НИУ ВШЭ" />
          <AnnaText
            text="Опыт работы в гос.структурах (руководитель проектов в сфере
              робототехники Координационного центра при Минкомсвязи, программный
              директор технологического фестиваля Digital Wave)"
          />
        </div>

        <div className={styles.AnnaRight}>
          <AnnaText text="Старший преподаватель кафедры менеджмента инноваций НИУ ВШЭ" />

          <AnnaText
            text="Руководитель проекта «Школа предпринимательства» Распределенного
            лицея НИУ ВШЭ"
          />

          <AnnaText
            text="Автор курсов «Техно-стартап», «Технологический маркетинг» и
            «Дизайн-мышление» НИУ ВШЭ"
          />
          <AnnaText
            text="Автор более 60 публикаций, книг и методических пособий по
            педагогике, робототехнике и использованию технологий в образовании"
          />
          <AnnaText text="Редактор журнала «Вестник Цифровой экономики»" />
          <AnnaText text={'Ментор УНМЦ "Гидронавтика" МГТУ им. Н.Э. Баумана'} />
        </div>
      </div>

      <div className={styles.components}>
        <span className={jura.className}>Эксперты программы</span>
      </div>

      <div className={styles.components}>
        <span className={jura.className}>
          Наши ученики побеждают в конкурсах
        </span>
      </div>

      <div className={styles.contest}>
        <div>
          <ContestText
            color="blue"
            text="Международная олимпиада по экономике IEOx Winter Challenge (золото и
            бронза)"
          />
          <ContestText
            color="pink"
            text="Идеатон для школьников Ideathon Junior (1 призер)"
          />
        </div>

        <div>
          <ContestText
            color="grey"
            text="Чемпионат по триатлону лидерских компетенций “Soft Skills 2035”
            (победа)"
          />
          <ContestText
            color="blue"
            text="Конференция “Наука для жизни” (18 финалистов, 4 призера)"
          />
        </div>

        <div>
          <ContestText
            color="pink"
            text="“Высший пилотаж” (19 призеров за 2021 - 22 гг, порядка 20 финалистов
              каждый год)"
          />
          <ContestText
            color="grey"
            text="Конкурс “Предприниматели Будущего” (победа)"
          />
        </div>

        <div>
          <ContestText
            color="blue"
            text="Всероссийский конкурса инновационных проектов (15 финалистов, 3
              победителя)"
          />
          <ContestText
            color="grey"
            text="Олимпиада “Высшая проба” (1 победитель и 1 призер)"
          />
        </div>
        <div>
          <ContestText
            color="pink"
            text="“Большая перемена” (победа и грант на 1 млн руб.)"
          />
          <ContestText color="grey" text="Технологии будущего” (победа)" />
          <ContestText
            color="blue"
            text="Хакатон “Изобретатели будущего” (3 победы)"
          />
        </div>
      </div>

      <div className={styles.components}>
        <span className={jura.className}>Частые вопросы</span>
      </div>
      <br />

      <div className={styles.faq}>
        <div>
          <span>
            В каком формате проходят занятия? <br />
            {Image1 && (
              <span>
                Да, есть записанные лекции, семинары и практические занятия на
                канале{' '}
                <a
                  href="https://www.youtube.com/@techno.startup"
                  target="_blank"
                >
                  https://www.youtube.com/@techno.startup
                </a>{' '}
              </span>
            )}
          </span>
          <button onClick={() => setImage1((prevState) => !prevState)}>
            {Image1 ? (
              <Image
                width={35}
                height={35}
                layout="responsive"
                src="./landing/X.svg"
                alt=""
              />
            ) : (
              <Image
                width={35}
                height={35}
                layout="responsive"
                src="./landing/Plus.svg"
                alt=""
              />
            )}
          </button>
        </div>

        <div>
          <span>
            Есть ли видео записи занятий? <br />
            {Image2 && (
              <span>
                Да, есть записанные лекции, семинары и практические занятия на
                канале{' '}
                <a
                  href="https://www.youtube.com/@techno.startup"
                  target="_blank"
                >
                  https://www.youtube.com/@techno.startup
                </a>{' '}
              </span>
            )}
          </span>
          <button onClick={() => setImage2((prevState) => !prevState)}>
            {Image2 ? (
              <Image
                width={35}
                height={35}
                layout="responsive"
                src="./landing/X.svg"
                alt=""
              />
            ) : (
              <Image
                width={35}
                height={35}
                layout="responsive"
                src="./landing/Plus.svg"
                alt=""
              />
            )}
          </button>
        </div>

        <div>
          <span>
            Сколько длится занятие и как часто проходят? <br />
            {Image3 && (
              <span>
                Да, есть записанные лекции, семинары и практические занятия на
                канале{' '}
                <a
                  href="https://www.youtube.com/@techno.startup"
                  target="_blank"
                >
                  https://www.youtube.com/@techno.startup
                </a>{' '}
              </span>
            )}
          </span>
          <button onClick={() => setImage3((prevState) => !prevState)}>
            {Image3 ? (
              <Image
                width={35}
                height={35}
                layout="responsive"
                src="./landing/X.svg"
                alt=""
              />
            ) : (
              <Image
                width={35}
                height={35}
                layout="responsive"
                src="./landing/Plus.svg"
                alt=""
              />
            )}
          </button>
        </div>

        <div>
          <span>
            Кто такие трекеры и как с ними взаимодействовать? <br />
            {Image4 && (
              <span>
                Да, есть записанные лекции, семинары и практические занятия на
                канале{' '}
                <a
                  href="https://www.youtube.com/@techno.startup"
                  target="_blank"
                >
                  https://www.youtube.com/@techno.startup
                </a>{' '}
              </span>
            )}
          </span>
          <button onClick={() => setImage4((prevState) => !prevState)}>
            {Image4 ? (
              <Image
                width={35}
                height={35}
                layout="responsive"
                src="./landing/X.svg"
                alt=""
              />
            ) : (
              <Image
                width={35}
                height={35}
                layout="responsive"
                src="./landing/Plus.svg"
                alt=""
              />
            )}
          </button>
        </div>

        <div>
          <span>
            Насколько тяжело пройти курс? <br />
            {Image5 && (
              <span>
                Да, есть записанные лекции, семинары и практические занятия на
                канале{' '}
                <a
                  href="https://www.youtube.com/@techno.startup"
                  target="_blank"
                >
                  https://www.youtube.com/@techno.startup
                </a>{' '}
              </span>
            )}
          </span>
          <button onClick={() => setImage5((prevState) => !prevState)}>
            {Image5 ? (
              <Image
                width={35}
                height={35}
                layout="responsive"
                src="./landing/X.svg"
                alt=""
              />
            ) : (
              <Image
                width={35}
                height={35}
                layout="responsive"
                src="./landing/Plus.svg"
                alt=""
              />
            )}
          </button>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;

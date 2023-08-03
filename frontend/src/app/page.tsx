'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './landing.module.css';
import { readMore } from './button';

const LandingPage: React.FC = () => {
  const [buttonIndex1, setImage1] = useState(false);
  const [buttonIndex2, setImage2] = useState(false);
  const [buttonIndex3, setImage3] = useState(false);
  const [buttonIndex4, setImage4] = useState(false);
  const [buttonIndex5, setImage5] = useState(false);

  const handleButtonClick = (num) => {
    switch (num) {
      case 1:
        setImage1(!buttonIndex1);
        break;
      case 2:
        setImage2(!buttonIndex2);
        break;
      case 3:
        setImage3(!buttonIndex3);
        break;
      case 4:
        setImage4(!buttonIndex4);
        break;
      case 5:
        setImage5(!buttonIndex5);
        break;
      default:
        break;
    }
    readMore(num);
  };

  return (
    <div className={styles.main}>
      <div className={styles.upperPanel}>
        <img src="First.svg" alt="" />
        <div apply="">
          <Link href={'/apply'}>
            <span>Подать заявку</span>
          </Link>
        </div>
        <span school="">Школа предпринимальства</span>
        <span business="">Бизнес школа трекеров</span>
        <div links="">
          <Link href={'/auth'}>
            <img src="LK.png" alt="lk" />
          </Link>

          <a href="#" target="_blank">
            <img src="VK.png" alt="vk" />
          </a>

          <a
            href="https://www.youtube.com/@techno.startup/featured"
            target="_blank"
          >
            <img src="YT.png" alt="yt" />
          </a>
          <br />
          <span>Войти</span>
        </div>
      </div>
      <div className={styles.dlitelnost}>
        <img src="dlitelnost.svg" alt="" />
        <span>Длительность программы — с октября по май.</span>
      </div>
      <div className={styles.secondPart}>
        <div side={'left'}>
          <span>ДЕМО-РОЛИК О НАС</span>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/QZlcJ9gSmKE"
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <span afterVideo={'first'}>
            Курс «Школа предпринимательства» направлен на развитие
            предпринимательского мышления обучающихся, желающих воплотить свои
            идеи в жизнь. Участники создадут свой собственный бизнес-проект,
            который будет представлен на конкурсе "Высший пилотаж".
            <br />
            <br />
            Выпускники Школы Предпринимательства уже не первый год занимают
            призовые места в этом конкурсе!
          </span>

          <span afterVideo={'second'}>Описание программы</span>
        </div>

        <div side={'right'}>
          <span>УЧАЩИЕСЯ УЗНАЮТ</span>
          <img src="Bucket.svg" alt="about program" />
        </div>
      </div>
      <div className={styles.components}>
        <span>КОМПОНЕНТЫ ПРОГРАММЫ</span>
      </div>
      <div className={styles.programComponents}>
        <div>
          <div className={styles.componentBlock}>
            <div name="">
              <span number="">01</span>
              <span about="">интерактивные семинары</span>
            </div>
            <span description="">
              Интерактивная методика взаимодействия на основе разработанных
              индивидуальных, командных, деловых и ролевых игр, кейсов,
              викторин.
            </span>
          </div>

          <div className={styles.componentBlock}>
            <div name="">
              <span number="">02</span>
              <span about="">проектное обучение</span>
            </div>
            <span description="">
              Каждый участник работает над построением стартапа, в рамках
              которого приобретает компетенции для создания и внедрения продукта
              на рынок.
            </span>
          </div>

          <div className={styles.componentBlock}>
            <div name="">
              <span number="">03</span>
              <span about="">менторская поддержка</span>
            </div>
            <span description="">
              Консультации с экспертами из клуба менторов и предпринимателей,
              имеющих опыт создания инновационных продуктов для цифрового
              развития страны.
            </span>
          </div>
        </div>

        <div>
          <div className={styles.componentBlock}>
            <div name="">
              <span number="">04</span>
              <span about="">консультации с психологом</span>
            </div>
            <span description="">
              Периодическое взаимодействие команды с коучем и организационным
              психологом для консультирования по ситуации в коллективе —
              удовлетворенность членов команды.
            </span>
          </div>

          <div className={styles.componentBlock}>
            <div name="">
              <span number="">05</span>
              <span about="">траектория развития планов</span>
            </div>
            <span description="">
              Участники тестирования на определение уровней развития необходимых
              hard и soft skills, после которых получают индивидуальные
              рекомендации по обучению
            </span>
          </div>

          <div className={styles.componentBlock}>
            <div name="">
              <span number="">06</span>
              <span about="">геймификация</span>
            </div>
            <span description="">
              На занятиях участники могут получать внутреннюю валюту курса
              “ШПроты”, которую можно обменивать по бартеру и тратить на
              “покупку” консультаций
            </span>
          </div>
        </div>

        <div>
          <div className={styles.componentBlock}>
            <div name="">
              <span number="">07</span>
              <span about="">персональный трекинг</span>
            </div>
            <span description="">
              К каждому проекту прикреплен персональный трекер -
              бизнес-наставник, сопровождающий команду на всех этапах реализации
              стартапа.
            </span>
          </div>

          <div className={styles.componentBlock}>
            <div name="">
              <span number="">08</span>
              <span about="">конкурсы и гранты</span>
            </div>
            <span description="">
              Подготовка к участию в профильных конкурсах, поддержка в поиске
              финансирования проекта.
            </span>
          </div>

          <div className={styles.componentBlock}>
            <div name="">
              <span number="">09</span>
              <span about="">спикер-сессии</span>
            </div>
            <span description="">
              Проведение занятий с предпринимателями, руководителями
              предприятий, экспертами в различных областях.
            </span>
          </div>
        </div>
      </div>
      <div className={styles.itsAnna}>
        <img src="Anna.svg" alt="Hello, it's Anna" />

        <div side="left">
          <div>
            <img src="PinkCircle.svg" alt="" />
            <span>
              Разработка программ, робототехнических наборов и интерактивного
              оборудования для образовательных учреждений
            </span>
          </div>

          <div>
            <img src="PinkCircle.svg" alt="" />
            <span>Закончила МГТУ им. Баумана и НИУ ВШЭ</span>
          </div>

          <div>
            <img src="PinkCircle.svg" alt="" />
            <span>
              Опыт работы в гос.структурах (руководитель проектов в сфере
              робототехники Координационного центра при Минкомсвязи, программный
              директор технологического фестиваля Digital Wave)
            </span>
          </div>
        </div>

        <div side="right">
          <div>
            <img src="PinkCircle.svg" alt="" />
            <span>
              Старший преподаватель кафедры менеджмента инноваций НИУ ВШЭ
            </span>
          </div>

          <div>
            <img src="PinkCircle.svg" alt="" />
            <span>
              Руководитель проекта «Школа предпринимательства» Распределенного
              лицея НИУ ВШЭ
            </span>
          </div>

          <div>
            <img src="PinkCircle.svg" alt="" />
            <span>
              Автор курсов «Техно-стартап», «Технологический маркетинг» и
              «Дизайн-мышление» НИУ ВШЭ
            </span>
          </div>

          <div>
            <img src="PinkCircle.svg" alt="" />
            <span>
              Автор более 60 публикаций, книг и методических пособий по
              педагогике, робототехнике и использованию технологий в образовании
            </span>
          </div>

          <div>
            <img src="PinkCircle.svg" alt="" />
            <span>Редактор журнала «Вестник Цифровой экономики»</span>
          </div>

          <div>
            <img src="PinkCircle.svg" alt="" />
            <span>Ментор УНМЦ "Гидронавтика" МГТУ им. Н.Э. Баумана</span>
          </div>
        </div>
      </div>

      <div className={styles.components} experts="">
        <span>Эксперты программы</span>
      </div>

      <div className={styles.components} students="">
        <span>Наши ученики побеждают в конкурсах</span>
      </div>

      <div className={styles.contest} smth="">
        <div>
          <span blue="">
            Международная олимпиада по экономике IEOx Winter Challenge (золото и
            бронза)
          </span>
          <span pink="">Идеатон для школьников Ideathon Junior (1 призер)</span>
        </div>

        <div>
          <span grey="">
            Чемпионат по триатлону лидерских компетенций “Soft Skills 2035”
            (победа)
          </span>
          <span blue="">
            Конференция “Наука для жизни” (18 финалистов, 4 призера)
          </span>
        </div>

        <div>
          <span pink="">
            “Высший пилотаж” (19 призеров за 2021 - 22 гг, порядка 20 финалистов
            каждый год)
          </span>
          <span grey="">Конкурс “Предприниматели Будущего” (победа)</span>
        </div>

        <div>
          <span blue="">
            Всероссийский конкурса инновационных проектов (15 финалистов, 3
            победителя)
          </span>
          <span pink="">
            Олимпиада “Высшая проба” (1 победитель и 1 призер)
          </span>
        </div>
        <div>
          <span pink="">“Большая перемена” (победа и грант на 1 млн руб.)</span>
          <span grey="">“Технологии будущего” (победа)</span>
          <span blue="">Хакатон “Изобретатели будущего” (3 победы)</span>
        </div>
      </div>
      <div className={styles.components} faq="">
        <span>Частые вопросы</span>
      </div>
      <div className={styles.faq}>
        <div>
          <span>
            В каком формате проходят занятия? <br />
            <span id="1">
              Да, есть записанные лекции, семинары и практические занятия на
              канале{' '}
              <a href="https://www.youtube.com/@techno.startup" target="_blank">
                https://www.youtube.com/@techno.startup
              </a>{' '}
            </span>
          </span>
          <button onClick={() => handleButtonClick(1)}>
            {buttonIndex1 ? (
              <img src="X.svg" alt="" />
            ) : (
              <img src="Plus.svg" alt="" />
            )}
          </button>
        </div>

        <div>
          <span>
            Есть ли видео записи занятий? <br />
            <span id="2">
              Да, есть записанные лекции, семинары и практические занятия на
              канале{' '}
              <a href="https://www.youtube.com/@techno.startup" target="_blank">
                https://www.youtube.com/@techno.startup
              </a>{' '}
            </span>
          </span>
          <button onClick={() => handleButtonClick(2)}>
            {buttonIndex2 ? (
              <img src="X.svg" alt="" />
            ) : (
              <img src="Plus.svg" alt="" />
            )}
          </button>
        </div>

        <div>
          <span>
            Сколько длится занятие и как часто проходят? <br />
            <span id="3">
              Да, есть записанные лекции, семинары и практические занятия на
              канале{' '}
              <a href="https://www.youtube.com/@techno.startup" target="_blank">
                https://www.youtube.com/@techno.startup
              </a>{' '}
            </span>
          </span>
          <button onClick={() => handleButtonClick(3)}>
            {buttonIndex3 ? (
              <img src="X.svg" alt="" />
            ) : (
              <img src="Plus.svg" alt="" />
            )}
          </button>
        </div>

        <div>
          <span>
            Кто такие трекеры и как с ними взаимодействовать? <br />
            <span id="4">
              Да, есть записанные лекции, семинары и практические занятия на
              канале{' '}
              <a href="https://www.youtube.com/@techno.startup" target="_blank">
                https://www.youtube.com/@techno.startup
              </a>{' '}
            </span>
          </span>
          <button onClick={() => handleButtonClick(4)}>
            {buttonIndex4 ? (
              <img src="X.svg" alt="" />
            ) : (
              <img src="Plus.svg" alt="" />
            )}
          </button>
        </div>

        <div>
          <span>
            Насколько тяжело пройти курс? <br />
            <span id="5">
              Да, есть записанные лекции, семинары и практические занятия на
              канале{' '}
              <a href="https://www.youtube.com/@techno.startup" target="_blank">
                https://www.youtube.com/@techno.startup
              </a>{' '}
            </span>
          </span>
          <button onClick={() => handleButtonClick(5)}>
            {buttonIndex5 ? (
              <img src="X.svg" alt="" />
            ) : (
              <img src="Plus.svg" alt="" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

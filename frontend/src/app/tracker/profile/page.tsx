import Image from 'next/image';
import styles from './page.module.css';
import { Mulish, Jura } from 'next/font/google';
import Link from 'next/link';
import NavBar from '@/components/headers/header-tracker-learner/header';

const mulish = Mulish({
  subsets: ['latin'],
});

const jura = Jura({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className={mulish.className}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <NavBar balance={15} name="Иван" isTrackerPage={true} />

          <div className={jura.className}>
            <h1 className={styles.page_label}>ЛИЧНЫЙ КАБИНЕТ</h1>
          </div>

          <div className={styles.content_container}>
            <div className={styles.balance_container}>
              <p>Баланс шпрот - 15 ШП</p>
              <button>Сделать перевод</button>
            </div>
            <div className={styles.user_data_container}>
              <p className={styles.user_data_label}>Мои данные</p>
              <div className={styles.user_data}>
                <div className={styles.user_data_component}>
                  <Image
                    src="/student/imgs/purple_circle.svg"
                    width={15}
                    height={15}
                    alt=""
                  />
                  <p>Иван Иванов Иванович</p>
                </div>
                <div className={styles.user_data_component}>
                  <Image
                    src="/student/imgs/purple_circle.svg"
                    width={15}
                    height={15}
                    alt=""
                  />
                  <p>E-mail: ivanivanov@mail.ru</p>
                </div>
                <div className={styles.user_data_component}>
                  <Image
                    src="/student/imgs/purple_circle.svg"
                    width={15}
                    height={15}
                    alt=""
                  />
                  <p>Телефон: 8 (812) 000 - 00 - 00</p>
                </div>
                <div className={styles.user_data_component}>
                  <Image
                    src="/student/imgs/purple_circle.svg"
                    width={15}
                    height={15}
                    alt=""
                  />
                  <p>VK: @ivanivanov04</p>
                </div>
              </div>
            </div>

            <div className={styles.team_container}>
              <p className={styles.theme_label}>Команда №1</p>
              <p className={styles.team_number}>Тема проекта: Тема проекта</p>
              <h1 className={styles.team_label}>Участники команды</h1>
              <div className={styles.team_members}>
                <div className={styles.user_data_component}>
                  <Image
                    src="/student/imgs/purple_circle.svg"
                    width={15}
                    height={15}
                    alt=""
                  />
                  <p>Иван Иванов Иванович</p>
                </div>
                <p>E-mail: ivanivanov@mail.ru</p>
                <p>Ссылка на месенджер: @ivanivanov04</p>
              </div>

              <div className={styles.team_members}>
                <div className={styles.user_data_component}>
                  <Image
                    src="/student/imgs/purple_circle.svg"
                    width={15}
                    height={15}
                    alt=""
                  />
                  <p>Иван Иванов Иванович</p>
                </div>
                <p>E-mail: ivanivanov@mail.ru</p>
                <p>Ссылка на месенджер: @ivanivanov04</p>
              </div>

              <div className={styles.team_members}>
                <div className={styles.user_data_component}>
                  <Image
                    src="/student/imgs/purple_circle.svg"
                    width={15}
                    height={15}
                    alt=""
                  />
                  <p>Иван Иванов Иванович</p>
                </div>
                <p>E-mail: ivanivanov@mail.ru</p>
                <p>Ссылка на месенджер: @ivanivanov04</p>
              </div>
              <p className={styles.tracker_label}>Трекеры команды</p>
              <div className={styles.team_members}>
                <div className={styles.user_data_component}>
                  <Image
                    src="/student/imgs/purple_circle.svg"
                    width={15}
                    height={15}
                    alt=""
                  />
                  <p>Фамилия Имя Отчество трекера</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>E-mail: ivanivanov@mail.ru</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>Ссылка на месенджер: @ivanivanov04</p>
                </div>
              </div>

              <div className={styles.team_members}>
                <div className={styles.user_data_component}>
                  <Image
                    src="/student/imgs/purple_circle.svg"
                    width={15}
                    height={15}
                    alt=""
                  />
                  <p>Фамилия Имя Отчество трекера</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>E-mail: ivanivanov@mail.ru</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>Ссылка на месенджер: @ivanivanov04</p>
                </div>
              </div>
            </div>

            <div className={styles.team_container}>
              <p className={styles.theme_label}>Команда №1</p>
              <p className={styles.team_number}>Тема проекта: Тема проекта</p>
              <h1 className={styles.team_label}>Участники команды</h1>
              <div className={styles.team_members}>
                <div className={styles.user_data_component}>
                  <Image
                    src="/student/imgs/purple_circle.svg"
                    width={15}
                    height={15}
                    alt=""
                  />
                  <p>Иван Иванов Иванович</p>
                </div>
                <p>E-mail: ivanivanov@mail.ru</p>
                <p>Ссылка на месенджер: @ivanivanov04</p>
              </div>

              <div className={styles.team_members}>
                <div className={styles.user_data_component}>
                  <Image
                    src="/student/imgs/purple_circle.svg"
                    width={15}
                    height={15}
                    alt=""
                  />
                  <p>Иван Иванов Иванович</p>
                </div>
                <p>E-mail: ivanivanov@mail.ru</p>
                <p>Ссылка на месенджер: @ivanivanov04</p>
              </div>

              <div className={styles.team_members}>
                <div className={styles.user_data_component}>
                  <Image
                    src="/student/imgs/purple_circle.svg"
                    width={15}
                    height={15}
                    alt=""
                  />
                  <p>Иван Иванов Иванович</p>
                </div>
                <p>E-mail: ivanivanov@mail.ru</p>
                <p>Ссылка на месенджер: @ivanivanov04</p>
              </div>
              <p className={styles.tracker_label}>Трекеры команды</p>
              <div className={styles.team_members}>
                <div className={styles.user_data_component}>
                  <Image
                    src="/student/imgs/purple_circle.svg"
                    width={15}
                    height={15}
                    alt=""
                  />
                  <p>Фамилия Имя Отчество трекера</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>E-mail: ivanivanov@mail.ru</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>Ссылка на месенджер: @ivanivanov04</p>
                </div>
              </div>

              <div className={styles.team_members}>
                <div className={styles.user_data_component}>
                  <Image
                    src="/student/imgs/purple_circle.svg"
                    width={15}
                    height={15}
                    alt=""
                  />
                  <p>Фамилия Имя Отчество трекера</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>E-mail: ivanivanov@mail.ru</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>Ссылка на месенджер: @ivanivanov04</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

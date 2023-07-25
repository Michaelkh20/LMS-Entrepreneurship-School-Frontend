import Image from 'next/image'
import styles from './page.module.css'
import { Mulish, Jura } from 'next/font/google'
import Link from 'next/link'

const mulish = Mulish({
  subsets: ['latin']
})

const jura = Jura({
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className={mulish.className}>
      <div className={styles.wrapper}>
        <div className={styles.container}>

          <header className={styles.header_box}>
              <button className={styles.main_page_button}>&lt; На главную</button>
              <div className={styles.right_header_box}>
                <div className={styles.image_and_text_box}>
                  <Link href = "">
                    <Image
                      src="/shop_image.svg"
                      width={53}
                      height={53}
                      alt=""
                    />
                  </Link>
                  <p className={styles.balance_counter}>15 $</p>
                </div>
                <div className={styles.image_and_text_box}>
                  <Link href = "">
                    <Image
                      src="/profile_image.svg"
                      width={45}
                      height={50}
                      alt=""
                    />
                  </Link>
                  <p className={styles.username}>Иван</p>
                </div>
              </div>
          </header>

          <div className={jura.className}>
              <h1 className={styles.page_label}>ЛИЧНЫЙ КАБИНЕТ</h1>
          </div>

          <div className={styles.content_container}>
            <div className={styles.balance_container}>
              <p>Баланс шпрот - 15 ШП</p>
              <button>Сделать перевод</button>
            </div>
            <div className={styles.user_data_container}>
              <p className={styles.user_data_label}>Контактные данные участника</p>
              <div className={styles.user_data}>
                <div className={styles.user_data_component}>
                  <Image
                        src="/purple_circle.svg"
                        width={15}
                        height={15}
                        alt=""
                  />
                  <p>123123123</p>
                </div>
                <div className={styles.user_data_component}>
                  <Image
                        src="/purple_circle.svg"
                        width={15}
                        height={15}
                        alt=""
                  />
                  <p>123123123</p>
                </div>
                <div className={styles.user_data_component}>
                  <Image
                        src="/purple_circle.svg"
                        width={15}
                        height={15}
                        alt=""
                  />
                  <p>123123123</p>
                </div>
                <div className={styles.user_data_component}>
                  <Image
                        src="/purple_circle.svg"
                        width={15}
                        height={15}
                        alt=""
                  />
                  <p>123123123</p>
                </div>
              </div>
            </div>

            <p className={styles.theme_label}>Тема проекта</p>


            <div className={styles.team_members_container}>
              <p className={styles.team_members_label}>Участники команды</p>
              <div className={styles.team_members}>
                <div className={styles.user_data_component}>
                  <Image
                        src="/purple_circle.svg"
                        width={15}
                        height={15}
                        alt=""
                  />
                  <p>123123123</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>123123123</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>123123123</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>123123123</p>
                </div>
              </div>

              <div className={styles.team_members}>
                <div className={styles.user_data_component}>
                  <Image
                        src="/purple_circle.svg"
                        width={15}
                        height={15}
                        alt=""
                  />
                  <p>123123123</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>123123123</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>123123123</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>123123123</p>
                </div>
              </div>

              <div className={styles.team_members}>
                <div className={styles.user_data_component}>
                  <Image
                        src="/purple_circle.svg"
                        width={15}
                        height={15}
                        alt=""
                  />
                  <p>123123123</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>123123123</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>123123123</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>123123123</p>
                </div>
              </div>

            </div>



            <div className={styles.tracker_container}>
              <p className={styles.team_members_label}>Трекер команды</p>
              <div className={styles.team_members}>
                <div className={styles.user_data_component}>
                  <Image
                        src="/purple_circle.svg"
                        width={15}
                        height={15}
                        alt=""
                  />
                  <p>123123123</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>123123123</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>123123123</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>123123123</p>
                </div>
              </div>
              
              <div className={styles.team_members}>
                <div className={styles.user_data_component}>
                  <Image
                        src="/purple_circle.svg"
                        width={15}
                        height={15}
                        alt=""
                  />
                  <p>123123123</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>123123123</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>123123123</p>
                </div>
                <div className={styles.user_data_component}>
                  <p>123123123</p>
                </div>
              </div>

            </div>





            
          </div>


        </div>
      </div>
    </main>
  )
}

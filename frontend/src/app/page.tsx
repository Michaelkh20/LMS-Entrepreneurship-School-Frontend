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
              <h1 className={styles.page_label}>МАГАЗИН</h1>
          </div>

          <div className={styles.lots_container}>
            <div className={styles.lot}>
              <div className={jura.className}>
                  <h1 className={styles.lot_name}>Лот №1</h1>
                </div>
                <p className={styles.lot_content}>Консультации по всему материалу курса и всем домашним заданиям</p>
                <p className={styles.lot_holder}>Исполнитель лота:</p>
                <p className={styles.lot_holder_name}>Солодихина Анна</p>
                <div className={styles.lot_price_container}>
                  <p className={styles.lot_price}>Стоимость (ШПрот):</p>
                  <p className={styles.lot_price_count}>200</p>
                </div>
                <p className={styles.lot_condition_value}><span className={styles.lot_condition}>Условия:</span> нужно написать о желании получить консультацию куратору конкурсов Писать нужно заблаговременно (желательно за 2-3 дня до созвона + учитывать время подачи зачвки на конкурс/олимпиаду)</p>
                <button className={styles.application_lot_button}>Подать заявку</button>
            </div>
            <div className={styles.lot}>
              <div className={jura.className}>
                  <h1 className={styles.lot_name}>Лот №1</h1>
                </div>
                <p className={styles.lot_content}>Консультации по всему материалу курса и всем домашним заданиям</p>
                <p className={styles.lot_holder}>Исполнитель лота:</p>
                <p className={styles.lot_holder_name}>Солодихина Анна</p>
                <div className={styles.lot_price_container}>
                  <p className={styles.lot_price}>Стоимость (ШПрот):</p>
                  <p className={styles.lot_price_count}>200</p>
                </div>
                <p className={styles.lot_condition_value}><span className={styles.lot_condition}>Условия:</span> нужно написать о желании получить консультацию куратору конкурсов Писать нужно заблаговременно (желательно за 2-3 дня до созвона + учитывать время подачи зачвки на конкурс/олимпиаду)</p>
                <button className={styles.application_lot_button}>Подать заявку</button>
            </div>
            <div className={styles.lot}>
              <div className={jura.className}>
                  <h1 className={styles.lot_name}>Лот №1</h1>
                </div>
                <p className={styles.lot_content}>Консультации по всему материалу курса и всем домашним заданиям</p>
                <p className={styles.lot_holder}>Исполнитель лота:</p>
                <p className={styles.lot_holder_name}>Солодихина Анна</p>
                <div className={styles.lot_price_container}>
                  <p className={styles.lot_price}>Стоимость (ШПрот):</p>
                  <p className={styles.lot_price_count}>200</p>
                </div>
                <p className={styles.lot_condition_value}><span className={styles.lot_condition}>Условия:</span> нужно написать о желании получить консультацию куратору конкурсов Писать нужно заблаговременно (желательно за 2-3 дня до созвона + учитывать время подачи зачвки на конкурс/олимпиаду)</p>
                <button className={styles.application_lot_button}>Подать заявку</button>
            </div>
            <div className={styles.lot}>
              <div className={jura.className}>
                <h1 className={styles.lot_name}>Лот №1</h1>
              </div>
              <p className={styles.lot_content}>Консультации по всему материалу курса и всем домашним заданиям</p>
              <p className={styles.lot_holder}>Исполнитель лота:</p>
              <p className={styles.lot_holder_name}>Солодихина Анна</p>
              <div className={styles.lot_price_container}>
                <p className={styles.lot_price}>Стоимость (ШПрот):</p>
                <p className={styles.lot_price_count}>200</p>
              </div>
              <p className={styles.lot_condition_value}><span className={styles.lot_condition}>Условия:</span> нужно написать о желании получить консультацию куратору конкурсов Писать нужно заблаговременно (желательно за 2-3 дня до созвона + учитывать время подачи зачвки на конкурс/олимпиаду)</p>
              <button className={styles.application_lot_button}>Подать заявку</button>
            </div>
          </div>

          <div className={styles.create_lot}>
            <div className={jura.className}>
              <h1>Предложить свой лот</h1>
            </div>
            <div className={styles.create_lot_data}>
              <div className={styles.left_create_lot_data}>
                <div className={styles.label_and_input_box}>
                  <p>Название лота*</p>
                  <input></input>
                </div>
                <div className={styles.label_and_input_box}>
                  <p>Описание*</p>
                  <input></input>
                </div>
              </div>
              <div className={styles.right_create_lot_data}>
                <div className={styles.label_and_input_price_box}>
                  <p>Стоимость*</p>
                  <input></input>
                </div>
                <div className={styles.label_and_input_box}>
                  <p>Условия*</p>
                  <input></input>
                </div>
              </div>
            </div>
            <div className={styles.send_form_box}>
              <p>Отправить заявку</p>
              <Link href="">
                <Image
                  src = "/send_lot_form_button.svg"
                  width = {58}
                  height = {56}
                  alt = ""
                />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

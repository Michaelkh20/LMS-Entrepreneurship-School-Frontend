import Image from 'next/image'
import styles from './page.module.css'
import { Mulish, Jura } from 'next/font/google'
import Link from 'next/link'
import NavBar from "@/components/headers/header-tracker-learner/header"
import TradeLotCard from "@/components/LotCard/lot-card"

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
          <NavBar
            balance={15}
            name="Иван" 
            isHomePage={false} 
            isTrackerPage={false}          
          />
          <div className={jura.className}>
              <h1 className={styles.page_label}>МАГАЗИН</h1>
          </div>

          <div className={styles.lots_container}>

            <TradeLotCard
                number={12345}
                description="Торговый лот описания"
                performer="Имя исполнителя"
                price={200}
                conditions="Условия торгового лота"
            />
            <TradeLotCard
                number={12345}
                description="Торговый лот описания"
                performer="Имя исполнителя"
                price={200}
                conditions="Условия торгового лота"
            />
            <TradeLotCard
                number={12345}
                description="Торговый лот описания"
                performer="Имя исполнителя"
                price={200}
                conditions="Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота "
            />
            <TradeLotCard
                number={12345}
                description="Торговый лот описания"
                performer="Имя исполнителя"
                price={200}
                conditions="Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота "
            />

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
                  src = "/student/imgs/send_lot_form_button.svg"
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

'use client';
import React from 'react';
import styles from './lotClaimLearner.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Jura } from 'next/font/google';

const jura = Jura({
  subsets: ['latin'],
});

export default function LotClaimLearner() {
  return (
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
            src="/student/imgs/send_lot_form_button.svg"
            width={58}
            height={56}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

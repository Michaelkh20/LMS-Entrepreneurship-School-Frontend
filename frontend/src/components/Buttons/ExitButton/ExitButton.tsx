'use client';
import React from 'react';
import styles from './exitButton.module.css';
import Image from 'next/image';
import icon from '../../../../public/admin/log-out.png';

export default function ExitButton() {
  return (
    <button className={styles.button}>
      <p>Выйти</p>
      <Image width={18} height={18} src={icon} alt={''}></Image>
    </button>
  );
}

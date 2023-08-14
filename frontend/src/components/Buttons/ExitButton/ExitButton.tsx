'use client';
import React from 'react';
import styles from './exitButton.module.css';
import Image from 'next/image';
import icon from '../../../../public/admin/log-out.svg';
import Link from 'next/link';

export default function ExitButton() {
  return (
    <Link href={''} className={styles.button}>
      <p>Выйти</p>
      <Image width={16} height={16} src={icon} alt={''}></Image>
    </Link>
  );
}

'use client';
import React from 'react';
import styles from './exitButton.module.css';
import { ImportOutlined } from '@ant-design/icons';

export default function ExitButton() {
  return (
    <button className={styles.button}>
      Выход <ImportOutlined />
    </button>
  );
}

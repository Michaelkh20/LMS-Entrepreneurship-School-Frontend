'use client';
import React from 'react';
import styles from './exit-button.module.css';
import { ImportOutlined } from '@ant-design/icons';

export default function ExitButton() {
  return (
    <button className={styles.button}>
      Выход <ImportOutlined />
    </button>
  );
}

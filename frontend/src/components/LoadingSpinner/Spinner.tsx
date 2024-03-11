import React from 'react';
import { Spin } from 'antd';
import styles from './spinner.module.css';

export default function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <Spin size="large"></Spin>
    </div>
  );
}

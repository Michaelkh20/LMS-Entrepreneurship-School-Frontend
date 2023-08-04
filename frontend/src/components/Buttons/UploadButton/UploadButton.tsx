'use client';
import React from 'react';
import styles from './uploadButton.module.css';

import { ArrowUpOutlined } from '@ant-design/icons';
import { Space } from 'antd';

export default function UploadButton() {
  return (
    <button className={styles.button}>
      Загрузить <ArrowUpOutlined />
    </button>
  );
}

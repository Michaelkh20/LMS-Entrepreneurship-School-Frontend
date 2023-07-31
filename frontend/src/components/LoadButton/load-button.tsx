'use client';
import React from 'react';
import styles from './load-button.module.css';

import { ArrowUpOutlined } from '@ant-design/icons';
import { Space } from 'antd';

export default function LoadButton() {
  return (
    <Space wrap>
      <button className={styles.button}>
        {' '}
        Загрузить <ArrowUpOutlined />{' '}
      </button>
    </Space>
  );
}

"use client"
import React from 'react';
import styles from './back-button.module.css';

import { LeftOutlined } from '@ant-design/icons';
import { Space } from 'antd'

export default function BackButton() {
    return (
        <Space wrap>
            <button className={styles.button}> <LeftOutlined /> На главную </button>
        </Space>
    )
}
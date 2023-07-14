"use client"
import React from 'react';
import styles from './exit-button.module.css';

import { ImportOutlined } from '@ant-design/icons';
import { Space } from 'antd'

export default function ExitButton() {
    return (
        <Space wrap>
            <button className={styles.button}> Выход <ImportOutlined/> </button>
        </Space>
    )
}
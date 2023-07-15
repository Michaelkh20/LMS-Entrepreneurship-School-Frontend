"use client"
import React from 'react';
import styles from './dwnld-button.module.css';

import { VerticalAlignBottomOutlined } from '@ant-design/icons';
import { Space } from 'antd'

export default function DownloadButton() {
    return (
        <Space wrap>
            <button className={styles.button}> Скачать <VerticalAlignBottomOutlined /> </button>
        </Space>
    )
}
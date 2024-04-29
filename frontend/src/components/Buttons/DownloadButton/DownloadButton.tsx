'use client';
import React from 'react';
import styles from './downloadButton.module.css';

import { VerticalAlignBottomOutlined } from '@ant-design/icons';

export default function DownloadButton({ fileId }: { fileId: string }) {
  return (
    <a
      href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/files/${fileId}`}
      className={styles.button}
      download={true}
    >
      Скачать <VerticalAlignBottomOutlined />
    </a>
  );
}

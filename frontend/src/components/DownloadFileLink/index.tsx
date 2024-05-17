import React from 'react';
import { getPresignedDownloadUrl } from '@/s3/presignedUrls';
import downloadFile from '@/util/downloadFile';
import { message } from 'antd';
import styles from './downloadFileLink.module.css';

type Props = {
  url: string;
  fileName: string;
};

export default function DownloadFileLink({ url, fileName }: Props) {
  const handleClick = async () => {
    try {
      const downloadUrl = await getPresignedDownloadUrl(url);
      downloadFile(downloadUrl, fileName);
    } catch {
      message.error('Что-то пошло не так при загрузке файла');
    }
  };

  return (
    <span className={styles.Link} onClick={handleClick}>
      {fileName}
    </span>
  );
}

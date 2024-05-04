import React from 'react';
import styles from '../HomeworkPage.module.css';
import { useGetSubmissionByHWIdAndOwnerIdQuery } from '@/redux/services/api';
import { useAuth } from '@/redux/features/authSlice';
import {
  InboxOutlined,
  PaperClipOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Input, Upload } from 'antd';

type Props = {
  hwId: string;
};

export default function SubmissionSection({ hwId }: Props) {
  const [authState] = useAuth();
  const { data: solutionData } = useGetSubmissionByHWIdAndOwnerIdQuery({
    hwId: hwId,
    ownerId: authState.userId!,
  });

  return (
    <>
      <h3>Решение</h3>
      <section className={styles.section}>
        <p className={styles.section_title}>Статус</p>
        <div>{solutionData ? 'Загружено' : 'Не загружено'}</div>
      </section>
      <section className={styles.section}>
        <p className={styles.section_title}>Номер команды</p>
        <div>{solutionData?.team.number}</div>
      </section>
      <section className={styles.section}>
        <p className={styles.section_title}>Кем сдано</p>
        <div>{`${solutionData?.uploader.name} ${solutionData?.uploader.surname}`}</div>
      </section>
      <section className={styles.section}>
        <p className={styles.section_title}>Дата загрузки</p>
        <div>{solutionData?.completeDateTime}</div>
      </section>
      <section className={styles.section}>
        <p className={styles.section_title}>Файл</p>
        <div style={{ display: 'flex', gap: 4 }}>
          <PaperClipOutlined />
          <span>
            <a
              style={{ textDecoration: 'underline' }}
              href={solutionData?.fileUrl}
            >
              Файл
            </a>
          </span>
        </div>
      </section>
      <section className={styles.section}>
        <p className={styles.section_title}>Загрузить ДЗ</p>
        <Upload.Dragger name="files" action="/upload.do">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload.
          </p>
        </Upload.Dragger>
      </section>
    </>
  );
}

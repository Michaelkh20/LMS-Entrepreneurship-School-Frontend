import React, { useReducer } from 'react';
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
  const { data: submissionData } = useGetSubmissionByHWIdAndOwnerIdQuery({
    hwId: hwId,
    ownerId: authState.userId!,
  });

  return (
    <>
      <h3>Решение</h3>
      <section className={styles.section}>
        <p className={styles.section_title}>Статус</p>
        <div>{submissionData ? 'Загружено' : 'Не загружено'}</div>
      </section>
      {submissionData && (
        <>
          <section className={styles.section}>
            <p className={styles.section_title}>Номер команды</p>
            <div>{submissionData?.submission?.team?.number || '-'}</div>
          </section>
          <section className={styles.section}>
            <p className={styles.section_title}>Кем сдано</p>
            <div>
              {submissionData?.submission?.owner
                ? `${submissionData.submission.owner.surname} ${submissionData?.submission.owner.name}`
                : '-'}
            </div>
          </section>
          <section className={styles.section}>
            <p className={styles.section_title}>Дата загрузки</p>
            <div>
              {submissionData?.submission?.publishedAt?.toLocaleDateString(
                'ru-RU'
              ) || '-'}
            </div>
          </section>
          <section className={styles.section}>
            <p className={styles.section_title}>Файлы</p>
            {submissionData?.submission?.payload?.attachmentUrls.map((url) => {
              return (
                <div style={{ display: 'flex', gap: 4 }}>
                  <PaperClipOutlined />
                  <span>
                    <a style={{ textDecoration: 'underline' }} href={url}>
                      Файл
                    </a>
                  </span>
                </div>
              );
            }) || '-'}
          </section>
        </>
      )}

      <section className={styles.section}>
        <p className={styles.section_title}>Загрузить ДЗ</p>
        <Upload.Dragger
          style={{ marginTop: 8 }}
          name="files"
          action="/upload.do"
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Нажмите или перетащите файл в эту область для загрузки
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload.
          </p>
        </Upload.Dragger>
      </section>
    </>
  );
}

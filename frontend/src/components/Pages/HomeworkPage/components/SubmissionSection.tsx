import React from 'react';
import styles from '../HomeworkPage.module.css';
import { useGetSolutionByAssignmentIdAndLearnerIdQuery } from '@/redux/services/api';
import { useAuth } from '@/redux/features/authSlice';
import { PaperClipOutlined, UploadOutlined } from '@ant-design/icons';
import { Input } from 'antd';

type Props = {
  hwId: string;
};

export default function SubmissionSection({ hwId }: Props) {
  const [authState] = useAuth();
  const { data: solutionData } = useGetSolutionByAssignmentIdAndLearnerIdQuery({
    assignmentId: hwId,
    learnerId: authState.userId!,
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
        <Input type="file">
          <UploadOutlined />
          Загрузить ДЗ
        </Input>
      </section>
    </>
  );
}

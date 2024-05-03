'use client';
import { useGetHwByIdQuery } from '@/redux/services/api';
import { useGetSolutionByAssignmentIdAndLearnerIdQuery } from '@/redux/services/api';

import { GetHomework_Response } from '@proto/assignments/homework_api';

import { Divider, Input } from 'antd';

import styles from './HomeworkPage.module.css';
import { PaperClipOutlined, UploadOutlined } from '@ant-design/icons';
import { useAuth } from '@/redux/features/authSlice';
import { AuthState } from '../../../redux/features/authSlice';

export const HomeworkPage = ({ HwId }: { HwId: string }) => {
  const { data: hwData } = useGetHwByIdQuery(HwId);
  const [AuthState] = useAuth();

  const { data: solutionData } = useGetSolutionByAssignmentIdAndLearnerIdQuery({
    assignmentId: HwId,
    learnerId: AuthState.userId!,
  });

  return (
    <div style={{ wordBreak: 'break-word' }}>
      <h3>{hwData?.homework?.title || ''}</h3>
      <section className={styles.section}>
        <p className={styles.section_title}>Описание</p>
        <div>{hwData?.homework?.description}</div>
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Критерии</p>
        <div>{hwData?.homework?.gradingCriteria}</div>
      </section>
      <section className={styles.section}>
        <p className={styles.section_title}>Дедлайн</p>
        <div>{hwData?.homework?.deadlineDate?.toDateString()}</div>
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Дата публикации</p>
        <div>{hwData?.homework?.publishDate?.toDateString()}</div>
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Дополнительные материалы</p>
        {hwData?.homework?.externalMaterialUrls.map((url, index) => {
          return (
            <a key={index + url} href="url">
              urlx
            </a>
          );
        })}
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Командное задание</p>
        <div>{hwData?.homework?.isGroupWork ? 'Да' : 'Нет'}</div>
      </section>

      <Divider></Divider>

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
          <UploadOutlined></UploadOutlined>Загрузить ДЗ
        </Input>
      </section>

      {/* <div>{solutionData?.HW?.id}</div>
      <div>{solutionData?.HW?.title}</div>
      <div>{`${solutionData?.learner.name} ${solutionData?.learner.surname}`}</div>
      <div>{solutionData?.id}</div> */}
      {/* TODO: оценка и комменты */}
    </div>
  );
};

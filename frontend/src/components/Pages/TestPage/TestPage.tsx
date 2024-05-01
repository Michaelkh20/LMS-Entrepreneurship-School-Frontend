'use client';
import { useGetTestByIdQuery } from '@/redux/services/api';
import { useGetSolutionByAssignmentIdAndLearnerIdQuery } from '@/redux/services/api';

import { GetTest_Response } from '@proto/assignments/test_api';

import { Divider } from 'antd';

import styles from '../HomeworkPage/HomeworkPage.module.css';
import { PaperClipOutlined } from '@ant-design/icons';
import { useAuth } from '@/redux/features/authSlice';
import { AuthState } from '../../../redux/features/authSlice';

export const TestPage = ({ TestId }: { TestId: string }) => {
  const [AuthState] = useAuth();
  const { data: testData } = useGetTestByIdQuery(TestId);

  const { data: solutionData } = useGetSolutionByAssignmentIdAndLearnerIdQuery({
    assignmentId: TestId,
    learnerId: AuthState.userId!,
  });

  return (
    <div style={{ wordBreak: 'break-word' }}>
      <h3>{testData?.test?.title || ''}</h3>
      <section className={styles.section}>
        <p className={styles.section_title}>Описание</p>
        <div>{testData?.test?.description}</div>
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Критерии</p>
        <div>{testData?.test?.gradingCriteria}</div>
      </section>
      <section className={styles.section}>
        <p className={styles.section_title}>Дедлайн</p>
        <div>{testData?.test?.deadlineDate?.toDateString()}</div>
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Дата публикации</p>
        <div>{testData?.test?.publishDate?.toDateString()}</div>
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Дополнительные материалы</p>
        {testData?.test?.externalMaterialUrls.map((url, index) => {
          return (
            <a href="url" key={index + url}>
              urlx
            </a>
          );
        })}
      </section>

      <Divider></Divider>

      {/* TODO: оценка и комменты */}
    </div>
  );
};

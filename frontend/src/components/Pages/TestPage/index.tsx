'use client';
import { useGetTestByIdQuery } from '@/redux/services/api';

import { Button, Divider, Space } from 'antd';

import styles from '../HomeworkPage/HomeworkPage.module.css';
import { useAuth } from '@/redux/features/authSlice';
import { EditOutlined } from '@ant-design/icons';
import LoadingErrorStub from '@/components/LoadingErrorStub';
import { useRouter } from 'next/navigation';
import TestDeleteBtn from '@/components/Buttons/DeleteButtons/TestDeleteBtn';

export const TestPage = ({ testId }: { testId: string }) => {
  const router = useRouter();
  const [_, __, { isAdmin }] = useAuth();
  const { data, isSuccess, isError, isLoading } = useGetTestByIdQuery(testId);

  // TODO: у теста другие значимые поля. Посмотри форму создания теста.
  // TODO: Везде возвращай LoadingErrorStub для загрузки и ошибки. Тогда не придётся столько ставить "?." и "||"

  const handleEditClick = () => {
    router.push(`/admin/tasks/tests/${testId}/edit`);
  };

  if (!isSuccess) {
    return <LoadingErrorStub isError={isError} isLoading={isLoading} />;
  }

  const test = data.test!;

  return (
    <div style={{ wordBreak: 'break-word' }}>
      <Space>
        <h3>{test.title}</h3>
        {isAdmin && (
          <>
            <Button
              size="large"
              icon={<EditOutlined />}
              onClick={handleEditClick}
            >
              Редактировать
            </Button>
            <TestDeleteBtn id={testId} />
          </>
        )}
      </Space>
      <section className={styles.section}>
        <p className={styles.section_title}>Описание</p>
        <div>{test.description}</div>
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Критерии</p>
        <div>{test.gradingCriteria}</div>
      </section>
      <section className={styles.section}>
        <p className={styles.section_title}>Дедлайн</p>
        <div>{test.deadlineDate?.toLocaleDateString('ru-RU')}</div>
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Дата публикации</p>
        <div>{test.publishDate?.toLocaleDateString('ru-RU')}</div>
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Дополнительные материалы</p>
        {test.externalMaterialUrls.map((url, index) => {
          return (
            <a href="url" key={index + url}>
              urlx
            </a>
          );
        })}
      </section>

      <Divider />

      {/* TODO: оценка и комменты */}
    </div>
  );
};

'use client';
import { useGetHwByIdQuery } from '@/redux/services/api';

import { Button, Divider, Space } from 'antd';

import styles from './HomeworkPage.module.css';
import { useAuth } from '@/redux/features/authSlice';
import SubmissionSection from './components/SubmissionSection';
import { EditOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import LoadingErrorStub from '@/components/LoadingErrorStub';
import HomeworkDeleteBtn from '@/components/Buttons/DeleteButtons/HomeworkDeleteBtn';

export const HomeworkPage = ({ hwId }: { hwId: string }) => {
  const router = useRouter();
  const { data, isSuccess, isError, isLoading } = useGetHwByIdQuery(hwId);
  const [_, __, { isAdmin }] = useAuth();

  const handleEditClick = () => {
    router.push(`/admin/tasks/homeworks/${hwId}/edit`);
  };

  if (!isSuccess) {
    return <LoadingErrorStub isError={isError} isLoading={isLoading} />;
  }

  const homework = data.homework!;

  return (
    <div style={{ wordBreak: 'break-word' }}>
      <Space>
        <h3>{homework.title}</h3>
        {isAdmin && (
          <>
            <Button
              size="large"
              icon={<EditOutlined />}
              onClick={handleEditClick}
            >
              Редактировать
            </Button>
            <HomeworkDeleteBtn id={hwId} />
          </>
        )}
      </Space>
      <section className={styles.section}>
        <p className={styles.section_title}>Описание</p>
        <div>{homework.description}</div>
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Критерии</p>
        <div>{homework.gradingCriteria}</div>
      </section>
      <section className={styles.section}>
        <p className={styles.section_title}>Дедлайн</p>
        <div>{homework.deadlineDate?.toLocaleDateString('ru-RU')}</div>
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Дата публикации</p>
        <div>{homework.publishDate?.toLocaleDateString('ru-RU')}</div>
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Дополнительные материалы</p>
        {homework.externalMaterialUrls.map((url, index) => {
          return (
            <a key={index + url} href="url">
              urlx
            </a>
          );
        })}
      </section>

      <section className={styles.section}>
        <p className={styles.section_title}>Командное задание</p>
        <div>{homework.isGroupWork ? 'Да' : 'Нет'}</div>
      </section>

      <Divider></Divider>

      {!isAdmin && <SubmissionSection hwId={hwId} />}

      {/* <div>{solutionData?.HW?.id}</div>
      <div>{solutionData?.HW?.title}</div>
      <div>{`${solutionData?.learner.name} ${solutionData?.learner.surname}`}</div>
      <div>{solutionData?.id}</div> */}
      {/* TODO: оценка и комменты */}
    </div>
  );
};
'use client';
import { useGetExamByIdQuery } from '@/redux/services/api';

import { Button, Divider, Space } from 'antd';

import styles from '../HomeworkPage/HomeworkPage.module.css';
import { useAuth } from '@/redux/features/authSlice';
import LoadingErrorStub from '@/components/LoadingErrorStub';
import { EditOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import ExamDeleteBtn from '@/components/Buttons/DeleteButtons/ExamDeleteBtn';

export const ExamPage = ({ examId: examId }: { examId: string }) => {
  const router = useRouter();
  const [_, __, { isAdmin }] = useAuth();
  const {
    data: testData,
    isSuccess,
    isError,
    isLoading,
  } = useGetExamByIdQuery(examId);

  const handleEditClick = () => {
    router.push(`/admin/tasks/exams/${examId}/edit`);
  };

  if (!isSuccess) {
    return <LoadingErrorStub isError={isError} isLoading={isLoading} />;
  }

  const exam = testData.exam!;

  return (
    <div style={{ wordBreak: 'break-word' }}>
      <Space>
        <h3>{exam.title}</h3>
        {isAdmin && (
          <>
            <Button
              size="large"
              icon={<EditOutlined />}
              onClick={handleEditClick}
            >
              Редактировать
            </Button>
            <ExamDeleteBtn id={examId} />
          </>
        )}
      </Space>
      <h3>{exam.title}</h3>
      <section className={styles.section}>
        <p className={styles.section_title}>Дедлайн</p>
        <div>{exam.deadlineDate?.toLocaleDateString('ru-RU')}</div>
      </section>

      <Divider />

      {/* TODO: оценка и комменты */}
    </div>
  );
};

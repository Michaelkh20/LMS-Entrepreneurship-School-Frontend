'use client';
import { useGetCompetitionByIdQuery } from '@/redux/services/api';

import { Button, Divider, Space } from 'antd';

import styles from '../HomeworkPage/HomeworkPage.module.css';
import { useAuth } from '@/redux/features/authSlice';
import LoadingErrorStub from '@/components/LoadingErrorStub';
import { EditOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import CompetitionDeleteBtn from '@/components/Buttons/DeleteButtons/CompetitionDeleteBtn';

export const CompetitionPage = ({
  competitionId,
}: {
  competitionId: string;
}) => {
  const router = useRouter();
  const [_, __, { isAdmin }] = useAuth();
  const { data, isSuccess, isError, isLoading } =
    useGetCompetitionByIdQuery(competitionId);

  const handleEditClick = () => {
    router.push(`/admin/tasks/competitions/${competitionId}/edit`);
  };

  if (!isSuccess) {
    return <LoadingErrorStub isError={isError} isLoading={isLoading} />;
  }

  const competition = data.competition!;

  return (
    <div style={{ wordBreak: 'break-word' }}>
      <Space>
        <h3>{competition.title}</h3>
        {isAdmin && (
          <>
            <Button
              size="large"
              icon={<EditOutlined />}
              onClick={handleEditClick}
            >
              Редактировать
            </Button>
            <CompetitionDeleteBtn id={competitionId} />
          </>
        )}
      </Space>
      <h3>{competition.title}</h3>
      <section className={styles.section}>
        <p className={styles.section_title}>Дедлайн</p>
        <div>{competition.deadlineDate?.toLocaleDateString('ru-RU')}</div>
      </section>

      <Divider />

      {/* TODO: оценка и комменты */}
    </div>
  );
};

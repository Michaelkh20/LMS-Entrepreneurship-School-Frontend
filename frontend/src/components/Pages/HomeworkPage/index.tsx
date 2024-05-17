'use client';
import { useGetHwByIdQuery } from '@/redux/services/api';

import { Button, Divider, Space } from 'antd';

import { useAuth } from '@/redux/features/authSlice';
import { EditOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import LoadingErrorStub from '@/components/LoadingErrorStub';
import HomeworkDeleteBtn from '@/components/Buttons/DeleteButtons/HomeworkDeleteBtn';
import SimpleSection from '@/components/SimpleSection';
import UploadSubmissionSection from '@/components/UploadSubmissionSection';
import LearnerSubmissionSection from '@/components/SubmissionSection/LearnerSubmissionSection';
import GradeSection from '../GradeSection';
import { Grade } from '@/types/api';

export const HomeworkPage = ({ hwId }: { hwId: string }) => {
  const router = useRouter();
  const [, , { isAdmin, isLearner }] = useAuth();
  const { data, isSuccess, isError, isLoading } = useGetHwByIdQuery(hwId);

  const handleEditClick = () => {
    router.push(`/admin/tasks/homeworks/${hwId}/edit`);
  };

  if (!isSuccess) {
    return <LoadingErrorStub isError={isError} isLoading={isLoading} />;
  }

  const homework = data.homework!;

  return (
    <div style={{ wordBreak: 'break-word' }}>
      <Space
        size={'middle'}
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          paddingBottom: '.75rem',
        }}
      >
        <h3>{homework.title}</h3>
        {isAdmin && (
          <>
            <Button icon={<EditOutlined />} onClick={handleEditClick}>
              Редактировать
            </Button>
            <HomeworkDeleteBtn size={'middle'} id={hwId} />
          </>
        )}
      </Space>

      <SimpleSection title="Описание">{homework.description}</SimpleSection>
      <SimpleSection title="Критерии">{homework.gradingCriteria}</SimpleSection>
      <SimpleSection title="Дедлайн">
        {homework.deadlineDate?.toLocaleDateString('ru-RU')}
      </SimpleSection>
      <SimpleSection title="Дата публикации">
        {homework.publishDate?.toLocaleDateString('ru-RU')}
      </SimpleSection>
      {homework.externalMaterialUrls.length > 0 && (
        <SimpleSection title="Дополнительные материалы">
          {homework.externalMaterialUrls.map((url, index) => {
            return (
              <a key={index + url} href="url">
                {url}
              </a>
            );
          }) || '-'}
        </SimpleSection>
      )}
      <SimpleSection title="Командное задание">
        {homework.isGroupWork ? 'Да' : 'Нет'}
      </SimpleSection>

      {isLearner && (
        <>
          <Divider style={{ margin: '16px 0' }} />
          <h3>Решение</h3>
          <LearnerSubmissionSection hwId={hwId} />
          <UploadSubmissionSection hwId={hwId} />
          <Divider style={{ margin: '16px 0' }} />
          <h3>Оценка</h3>
          <GradeSection />
        </>
      )}
    </div>
  );
};

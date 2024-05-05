'use client';
import { useGetTestByIdQuery } from '@/redux/services/api';

import { Button, Space } from 'antd';

import { useAuth } from '@/redux/features/authSlice';
import { EditOutlined } from '@ant-design/icons';
import LoadingErrorStub from '@/components/LoadingErrorStub';
import { useRouter } from 'next/navigation';
import TestDeleteBtn from '@/components/Buttons/DeleteButtons/TestDeleteBtn';
import SimpleSection from '@/components/SimpleSection';

export const TestPage = ({ testId }: { testId: string }) => {
  const router = useRouter();
  const [, , { isAdmin }] = useAuth();
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
      <Space size={'middle'}>
        <h3>{test.title}</h3>
        {isAdmin && (
          <>
            <Button icon={<EditOutlined />} onClick={handleEditClick}>
              Редактировать
            </Button>
            <TestDeleteBtn id={testId} size={'middle'} />
          </>
        )}
      </Space>
      <SimpleSection title="Дедлайн">
        <div>{test.deadlineDate?.toLocaleDateString('ru-RU')}</div>
      </SimpleSection>
      <SimpleSection title="Дата публикации">
        <div>{test.publishDate?.toLocaleDateString('ru-RU')}</div>
      </SimpleSection>
      <SimpleSection title="Ссылка">
        {test.externalMaterialUrls.map((url, index) => {
          return (
            <a href={url} key={index + url}>
              {url}
            </a>
          );
        })}
      </SimpleSection>

      {/* TODO: оценка и комменты */}
    </div>
  );
};

'use client';

import React from 'react';
import LoadingErrorStub from '@/components/LoadingErrorStub';
import { useGetHwByIdQuery, useUpdateHwMutation } from '@/redux/services/api';
import { ICreateUpdateHomeworkRequest } from '@/types/proto';

import HomeworkForm from '@/components/Forms/Homeworks';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function EditHomeworkPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data, isSuccess, isError, isLoading } = useGetHwByIdQuery(id);
  const [updateHomework, result] = useUpdateHwMutation();

  const handleFinish = (values: ICreateUpdateHomeworkRequest) => {
    updateHomework({ id, updateRequestBody: values });
  };

  if (!isSuccess) {
    return <LoadingErrorStub isError={isError} isLoading={isLoading} />;
  }

  return (
    <BasePageLayout header={<h2>Изменить ДЗ</h2>}>
      <HomeworkForm
        type="edit"
        onFinish={handleFinish}
        result={result}
        homework={data}
      />
    </BasePageLayout>
  );
}

'use client';

import React from 'react';
import LoadingErrorStub from '@/components/LoadingErrorStub';
import {
  useGetTestByIdQuery,
  useUpdateTestMutation,
} from '@/redux/services/api';
import { ICreateUpdateTestRequest } from '@/types/proto';

import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import TestForm from '@/components/Forms/Tests';

export default function EditTestPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data, isSuccess, isError, isLoading } = useGetTestByIdQuery(id);
  const [updateTest, result] = useUpdateTestMutation();

  const handleFinish = (values: ICreateUpdateTestRequest) => {
    updateTest({ id, updateRequestBody: values });
  };

  if (!isSuccess) {
    return <LoadingErrorStub isError={isError} isLoading={isLoading} />;
  }

  return (
    <BasePageLayout header={<h2>Изменить тест</h2>}>
      <TestForm
        type="edit"
        onFinish={handleFinish}
        result={result}
        test={data}
      />
    </BasePageLayout>
  );
}

'use client';

import React from 'react';
import TestForm from '@/components/Forms/Tests';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { useCreateTestMutation } from '@/redux/services/api';
import { ICreateUpdateTestRequest } from '@/types/proto';

export default function CreateTestPage() {
  const [createTest, result] = useCreateTestMutation();

  const handleFinish = (values: ICreateUpdateTestRequest) => {
    createTest(values);
  };

  return (
    <BasePageLayout header={<h2>Создать тест</h2>}>
      <TestForm type="create" onFinish={handleFinish} result={result} />
    </BasePageLayout>
  );
}

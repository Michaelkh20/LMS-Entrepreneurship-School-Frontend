'use client';

import React from 'react';

import { useCreateHwMutation } from '@/redux/services/api';
import { ICreateUpdateHomeworkRequest } from '@/types/proto';
import HomeworkForm from '@/components/Forms/Homeworks';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function CreateLessonPage() {
  const [createHomework, result] = useCreateHwMutation();

  const handleFinish = (values: ICreateUpdateHomeworkRequest) => {
    createHomework(values);
  };

  return (
    <BasePageLayout header={<h2>Создать ДЗ</h2>}>
      <HomeworkForm type="create" onFinish={handleFinish} result={result} />
    </BasePageLayout>
  );
}

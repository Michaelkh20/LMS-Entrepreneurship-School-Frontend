'use client';

import React from 'react';
import LessonForm from '@/components/Forms/Lessons';

import { useCreateLessonMutation } from '@/redux/services/api';
import { ICreateUpdateLessonRequest } from '@/types/proto';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function CreateLessonPage() {
  const [createLesson, result] = useCreateLessonMutation();

  const handleFinish = (values: ICreateUpdateLessonRequest) => {
    createLesson(values);
  };

  return (
    <BasePageLayout header={<h2>Создать урок</h2>}>
      <LessonForm type="create" onFinish={handleFinish} result={result} />
    </BasePageLayout>
  );
}

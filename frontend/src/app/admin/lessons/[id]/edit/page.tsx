'use client';

import React from 'react';
import LoadingErrorStub from '@/components/LoadingErrorStub';
import LessonForm from '@/components/Forms/Lessons';
import {
  useGetLessonByIdQuery,
  useUpdateLessonMutation,
} from '@/redux/services/api';
import { ICreateUpdateLessonRequest } from '@/types/proto';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function EditLessonPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data, isSuccess, isError, isLoading } = useGetLessonByIdQuery(id);
  const [updateLesson, result] = useUpdateLessonMutation();

  const handleFinish = (values: ICreateUpdateLessonRequest) => {
    updateLesson({ id: id, updateRequestBody: values });
  };

  if (!isSuccess) {
    return <LoadingErrorStub isError={isError} isLoading={isLoading} />;
  }
  return (
    <BasePageLayout header={<h2>Изменить урок</h2>}>
      <LessonForm
        type="edit"
        onFinish={handleFinish}
        result={result}
        lesson={data}
      />
    </BasePageLayout>
  );
}

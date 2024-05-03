'use client';

import React from 'react';
import LoadingErrorStub from '@/components/LoadingErrorStub';
import {
  useGetExamByIdQuery,
  useUpdateExamMutation,
} from '@/redux/services/api';

import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { ICreateUpdateExamCompetitionRequest } from '@/types/api';
import ExamCompetitionForm from '@/components/Forms/ExamCompetitions';

export default function EditExamPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data, isSuccess, isError, isLoading } = useGetExamByIdQuery(id);
  const [updateExam, result] = useUpdateExamMutation();

  const handleFinish = (values: ICreateUpdateExamCompetitionRequest) => {
    updateExam({ id, updateRequestBody: values });
  };

  if (!isSuccess) {
    return <LoadingErrorStub isError={isError} isLoading={isLoading} />;
  }

  return (
    <BasePageLayout header={<h2>Изменить экзамен</h2>}>
      <ExamCompetitionForm
        entity="exam"
        type="edit"
        onFinish={handleFinish}
        result={result}
        examCompetition={data.exam!}
      />
    </BasePageLayout>
  );
}

'use client';

import React from 'react';
import LoadingErrorStub from '@/components/LoadingErrorStub';
import {
  useGetCompetitionByIdQuery,
  useUpdateCompetitionMutation,
} from '@/redux/services/api';

import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { ICreateUpdateExamCompetitionRequest } from '@/types/api';
import ExamCompetitionForm from '@/components/Forms/ExamCompetitions';

export default function EditCompetitionPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data, isSuccess, isError, isLoading } =
    useGetCompetitionByIdQuery(id);
  const [updateCompetition, result] = useUpdateCompetitionMutation();

  const handleFinish = (values: ICreateUpdateExamCompetitionRequest) => {
    updateCompetition({ id, updateRequestBody: values });
  };

  if (!isSuccess) {
    return <LoadingErrorStub isError={isError} isLoading={isLoading} />;
  }

  return (
    <BasePageLayout header={<h2>Изменить конкурс</h2>}>
      <ExamCompetitionForm
        entity="exam"
        type="edit"
        onFinish={handleFinish}
        result={result}
        examCompetition={data.competition!}
      />
    </BasePageLayout>
  );
}

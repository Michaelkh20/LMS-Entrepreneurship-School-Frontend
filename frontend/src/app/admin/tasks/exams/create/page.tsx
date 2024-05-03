'use client';

import React from 'react';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { useCreateExamMutation } from '@/redux/services/api';
import { ICreateUpdateExamCompetitionRequest } from '@/types/api';
import ExamCompetitionForm from '@/components/Forms/ExamCompetitions';

export default function CreateExamPage() {
  const [createExam, result] = useCreateExamMutation();

  const handleFinish = (values: ICreateUpdateExamCompetitionRequest) => {
    createExam(values);
  };

  return (
    <BasePageLayout header={<h2>Создать экзамен</h2>}>
      <ExamCompetitionForm
        entity="exam"
        type="create"
        onFinish={handleFinish}
        result={result}
      />
    </BasePageLayout>
  );
}

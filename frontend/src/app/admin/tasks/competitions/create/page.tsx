'use client';

import React from 'react';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { useCreateCompetitionMutation } from '@/redux/services/api';
import { ICreateUpdateExamCompetitionRequest } from '@/types/api';
import ExamCompetitionForm from '@/components/Forms/ExamCompetitions';

export default function CreateCompetitionPage() {
  const [createCompetition, result] = useCreateCompetitionMutation();

  const handleFinish = (values: ICreateUpdateExamCompetitionRequest) => {
    createCompetition(values);
  };

  return (
    <BasePageLayout header={<h2>Создать конкурс</h2>}>
      <ExamCompetitionForm
        entity="competition"
        type="create"
        onFinish={handleFinish}
        result={result}
      />
    </BasePageLayout>
  );
}

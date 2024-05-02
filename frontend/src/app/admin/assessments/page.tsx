import React from 'react';
import { AssessmentAllTasksTableWithFilter } from '@/components/TableWithFilterNew/Components/AssessmentAllTasksTableWithFilter';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { AssessmentTableWithFilter } from '@/components/TableWithFilterNew/Components/AssessmentTableWithFilter';

export default function AssessmentAllPage() {
  return (
    <BasePageLayout header={<h2>Оценки</h2>}>
      <AssessmentTableWithFilter />
    </BasePageLayout>
  );
}

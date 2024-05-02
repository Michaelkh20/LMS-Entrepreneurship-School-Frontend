import React from 'react';
import { AttendanceLessonsTableWithFilter } from '@/components/TableWithFilterNew/Components/AttendanceLessonsTableWithFilter';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function AttendenceLessonsPage() {
  return (
    <BasePageLayout header={<h2>Посещаемость</h2>}>
      <AttendanceLessonsTableWithFilter />
    </BasePageLayout>
  );
}

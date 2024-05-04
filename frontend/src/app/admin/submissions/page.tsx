import React from 'react';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { SubmissionsTableWithFilter } from '@/components/TableWithFilterNew/Components/SubmissionsTableWithFilter';

export default function SubmissionsPage() {
  return (
    <BasePageLayout
      header={
        <>
          <h2>Решения</h2>
        </>
      }
    >
      <SubmissionsTableWithFilter />
    </BasePageLayout>
  );
}

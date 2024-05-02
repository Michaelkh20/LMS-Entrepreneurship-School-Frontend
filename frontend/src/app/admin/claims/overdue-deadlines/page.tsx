import React from 'react';
import { ClaimDeadlineTableWithFilter } from '@/components/TableWithFilterNew';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function OverdueDeadlinesPage() {
  return (
    <BasePageLayout header={<h2>Заявки: Просроченный дедлайн</h2>}>
      <ClaimDeadlineTableWithFilter />
    </BasePageLayout>
  );
}

import React from 'react';
import { ClaimTransferTableWithFilter } from '@/components/TableWithFilterNew';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function TransfersPage() {
  return (
    <BasePageLayout header={<h2>Заявки: Перевод ШПрот</h2>}>
      <ClaimTransferTableWithFilter />
    </BasePageLayout>
  );
}

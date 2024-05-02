import React from 'react';

import { TransactionsTableWithFilters } from '@/components/TableWithFilterNew';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function TransactionsPage() {
  return (
    <BasePageLayout header={<h2>Транзакции</h2>}>
      <TransactionsTableWithFilters />
    </BasePageLayout>
  );
}

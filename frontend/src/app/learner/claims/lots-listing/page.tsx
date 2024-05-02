import { ClaimPlacingLotTableWithFilter } from '@/components/TableWithFilterNew';
import React from 'react';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function LotsListingPage() {
  return (
    <BasePageLayout header={<h2>Заявки: Размещение лотов</h2>}>
      <ClaimPlacingLotTableWithFilter />
    </BasePageLayout>
  );
}

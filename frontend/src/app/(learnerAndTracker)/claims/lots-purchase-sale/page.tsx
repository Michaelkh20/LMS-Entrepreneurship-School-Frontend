'use client';

import React, { useEffect } from 'react';

import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { ClaimBuyingLotTableWithFilterLearner } from '@/components/TableWithFilterNew/Components/ClaimBuyingLotTableWithFilterLearner';

export default function LotsPurchaseSalePage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [claimId, setClaimId] = React.useState<string | null>(null);

  const handleRowClick = (id: string) => {
    console.log(id);
    setIsModalOpen(true);
    setClaimId(id);
  };

  return (
    <BasePageLayout header={<h2>Заявки: Покупка лотов</h2>}>
      <ClaimBuyingLotTableWithFilterLearner onRowClick={handleRowClick} />
    </BasePageLayout>
  );
}

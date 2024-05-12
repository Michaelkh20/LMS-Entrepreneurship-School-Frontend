'use client';
import React, { useState } from 'react';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { TransactionsTableWithFilters } from '@/components/TableWithFilterNew';

export default function LotsListingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [claimId, setClaimId] = React.useState<string | null>(null);

  const handleOnRowClick = (id: string) => {
    setClaimId(id);
    setIsModalOpen(true);
  };

  return (
    <BasePageLayout header={<h2>Транзакции</h2>}>
      <TransactionsTableWithFilters />
      {/* <ClaimPlacingLotTableWithFilter
        onRow={(record, rowindex) => {
          return {
            onClick: () => handleOnRowClick(record.id),
          };
        }}
      />
      <ClaimListLotViewModal
        claimId={claimId}
        isOpen={isModalOpen}
        onCancel={() => {}}
        onExit={() => setIsModalOpen(false)}
      /> */}
    </BasePageLayout>
  );
}

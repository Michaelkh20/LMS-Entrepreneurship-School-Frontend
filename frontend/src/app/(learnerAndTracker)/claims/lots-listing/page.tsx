'use client';
import { ClaimPlacingLotTableWithFilter } from '@/components/TableWithFilterNew';
import React, { useState } from 'react';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { ClaimListLotViewModal } from '@/components/Modals';

export default function LotsListingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [claimId, setClaimId] = React.useState<string | null>(null);

  const handleOnRowClick = (id: string) => {
    setClaimId(id);
    setIsModalOpen(true);
  };
  return (
    <BasePageLayout header={<h2>Заявки: Размещение лотов</h2>}>
      <ClaimPlacingLotTableWithFilter
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
      />
    </BasePageLayout>
  );
}

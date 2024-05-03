'use client';
import React, { useState } from 'react';
import { ClaimDeadlineTableWithFilter } from '@/components/TableWithFilterNew';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { ClaimDeadlineViewModal } from '@/components/Modals/Claims/ClaimDeadlineViewModal/ClaimDeadlineViewModal';

export default function OverdueDeadlinesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [claimId, setClaimId] = React.useState<string | null>(null);

  const handleOnRowClick = (id: string) => {
    setClaimId(id);
    setIsModalOpen(true);
  };
  return (
    <BasePageLayout header={<h2>Заявки: Просроченный дедлайн</h2>}>
      <ClaimDeadlineTableWithFilter
        onRow={(record, rowindex) => {
          return {
            onClick: () => handleOnRowClick(record.id),
          };
        }}
      />
      <ClaimDeadlineViewModal
        claimId={claimId}
        isOpen={isModalOpen}
        onExit={() => setIsModalOpen(false)}
      />
    </BasePageLayout>
  );
}

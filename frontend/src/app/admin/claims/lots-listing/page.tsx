'use client';

import { ClaimPlacingLotTableWithFilter } from '@/components/TableWithFilterNew';
import React, { useState } from 'react';
import { ClaimListLotViewModal } from '@/components/Modals';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { useApproveListLotClaim, useRejectListLotClaim } from '@/redux/features/marketSlice';

export default function LotsListingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [claimId, setClaimId] = React.useState<string>('');

  const triggerApprove = useApproveListLotClaim()
  const triggerReject = useRejectListLotClaim()

  const handleOnRowClick = (id: string) => {
    setClaimId(id);
    setIsModalOpen(true);
  };

  const handleDecline = () => {
    if (!claimId) return;
    // trigger({
    //   id: claimId,
    //   action: ClaimAction.Reject,
    //   fine: null,
    //   newPrice: null,
    // });
    triggerReject(claimId)
  };

  const handleApprove = () => {
    if (!claimId) return;
    // trigger({
    //   id: claimId,
    //   action: ClaimAction.Approve,
    //   fine: null,
    //   newPrice: null,
    // });
    triggerApprove(claimId)
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
        onCancel={handleDecline}
        onOk={handleApprove}
        onExit={() => setIsModalOpen(false)}
      />
    </BasePageLayout>
  );
}

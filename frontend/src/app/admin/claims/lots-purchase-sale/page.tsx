'use client';

import React, { useEffect } from 'react';
import { ClaimBuyingLotTableWithFilter } from '@/components/TableWithFilterNew';

import styles from '@/app/admin/main.module.css';
import { ClaimBuyLotViewModal } from '@/components/Modals';
import { useApproveRejectClaimMutation } from '@/redux/services/api';
import { message } from 'antd';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { ClaimAction } from '@/types/common';
import { useApproveBuyLotClaim, useRejectBuyLotClaim, useRejectListLotClaim } from '@/redux/features/marketSlice';

export default function LotsPurchaseSalePage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [claimId, setClaimId] = React.useState<string>('');

  const [trigger, result] = useApproveRejectClaimMutation();

  const triggerApprove = useApproveBuyLotClaim()
  const triggerReject = useRejectBuyLotClaim()

  const handleRowClick = (id: string) => {
    console.log(id);
    setIsModalOpen(true);
    setClaimId(id);
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

  const handleExit = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (result.isSuccess) {
      message.success('Успешно');
      setIsModalOpen(false);
    }
    if (result.isError) {
      message.error('Ошибка');
    }
  }, [result.isError, result.isSuccess]);

  return (
    <BasePageLayout header={<h2>Заявки: Покупка лотов</h2>}>
      <ClaimBuyingLotTableWithFilter onRowClick={handleRowClick} />
      <ClaimBuyLotViewModal
        claimId={claimId}
        isOpen={isModalOpen}
        onCancel={handleDecline}
        onOk={handleApprove}
        isOkLoading={result.isLoading}
        isDeclineLoading={result.isLoading}
        onExit={handleExit}
      />
    </BasePageLayout>
  );
}

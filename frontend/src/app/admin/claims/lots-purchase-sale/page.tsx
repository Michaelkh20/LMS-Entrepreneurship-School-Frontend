'use client';

import React, { useEffect } from 'react';
import { ClaimBuyingLotTableWithFilter } from '@/components/TableWithFilterNew';

import styles from '@/app/admin/main.module.css';
import ClaimBuyLotViewModal from '@/components/Modals/ClaimBuyLotViewModal';
import {
  useApproveClaimMutation,
  useDeclineClaimMutation,
} from '@/redux/services/adminApi';
import { message } from 'antd';

export default function LotsPurchaseSalePage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [claimId, setClaimId] = React.useState<string | null>(null);
  const [approve, approveResult] = useApproveClaimMutation();
  const [decline, declineResult] = useDeclineClaimMutation();

  const handleRowClick = (id: string) => {
    console.log(id);
    setIsModalOpen(true);
    setClaimId(id);
  };

  const handleDecline = () => {
    if (!claimId) return;
    decline(claimId);
  };

  const handleApprove = () => {
    if (!claimId) return;
    approve(claimId);
  };

  const handleExit = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (approveResult.isSuccess) {
      message.success('Заявка успешно одобрена');
      setIsModalOpen(false);
    }
  }, [approveResult.isSuccess]);

  useEffect(() => {
    if (declineResult.isSuccess) {
      message.success('Заявка успешно отклонена');
      setIsModalOpen(false);
    }
  }, [declineResult.isSuccess]);

  useEffect(() => {
    if (approveResult.isError) {
      message.error('Ошибка при одобрении заявки');
    }
  }, [approveResult.isError]);

  useEffect(() => {
    if (declineResult.isError) {
      message.error('Ошибка при отклонении заявки');
    }
  }, [declineResult.isError]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Заявки: Купля-продажа лотов</h2>
      </div>
      <ClaimBuyingLotTableWithFilter onRowClick={handleRowClick} />
      <ClaimBuyLotViewModal
        claimId={claimId}
        isOpen={isModalOpen}
        onCancel={handleDecline}
        onOk={handleApprove}
        isOkLoading={approveResult.isLoading}
        isDeclineLoading={declineResult.isLoading}
        onExit={handleExit}
      />
    </div>
  );
}

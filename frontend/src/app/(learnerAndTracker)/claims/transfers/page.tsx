'use client';

import React, { useState } from 'react';
import { ClaimTransferTableWithFilter } from '@/components/TableWithFilterNew';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { Button, Modal } from 'antd';
import TransferForm from '@/components/Forms/Transfer';

export default function TransfersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlaceClaimClick = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const header = (
    <>
      <h2>Заявки: Перевод ШПрот</h2>
      <Button type="primary" size="large" onClick={handlePlaceClaimClick}>
        Подать заявку
      </Button>
    </>
  );

  return (
    <BasePageLayout header={header}>
      <ClaimTransferTableWithFilter />
      <Modal
        open={isModalOpen}
        footer={null}
        title="Подача заявки на перевод ШПрот"
        centered
        onCancel={handleCancel}
      >
        <TransferForm onFinish={handleCancel} />
      </Modal>
    </BasePageLayout>
  );
}

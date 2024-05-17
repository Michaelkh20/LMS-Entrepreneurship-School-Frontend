'use client';

import React, { useState } from 'react';
import { ClaimTransferTableWithFilter } from '@/components/TableWithFilterNew';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { Button, Modal } from 'antd';
import TransferForm from '@/components/Forms/Transfer';
import { useCreateTransferClaim } from '@/redux/features/marketSlice';
import { TransferFormValues } from '@/types/forms';
import { ClaimTransferTableWithFilterLearner } from '@/components/TableWithFilterNew/Components/ClaimTransferTableWithFilterLearner';

export default function TransfersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const createTransfer = useCreateTransferClaim();

  const handlePlaceClaimClick = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFinish = (values: TransferFormValues) => {
    const receiver = {
      id: values.receiver.value,
      name: values.receiver.label.split(' ')[1],
      surname: values.receiver.label.split(' ')[0],
      patronymic: '',
    };

    const isSuccess = createTransfer({ receiver, sum: values.sum });
    console.log(isSuccess);
    if (isSuccess) {
      setIsModalOpen(false);
    }

    return isSuccess;
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
      <ClaimTransferTableWithFilterLearner />
      <Modal
        open={isModalOpen}
        footer={null}
        title="Подача заявки на перевод ШПрот"
        centered
        onCancel={handleCancel}
      >
        <TransferForm onFinish={handleFinish} />
      </Modal>
    </BasePageLayout>
  );
}

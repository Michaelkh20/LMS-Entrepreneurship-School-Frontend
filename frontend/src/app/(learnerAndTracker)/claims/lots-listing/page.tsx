'use client';
import { ClaimPlacingLotTableWithFilter } from '@/components/TableWithFilterNew';
import React, { useState } from 'react';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { ClaimListLotViewModal } from '@/components/Modals';
import { Button, Modal } from 'antd';
import LotListingForm from '@/components/Forms/LotListing';

export default function LotsListingPage() {
  const [isModalViewOpen, setIsModalViewOpen] = useState(false);
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);
  const [claimId, setClaimId] = React.useState<string | null>(null);

  const handleOnRowClick = (id: string) => {
    setClaimId(id);
    setIsModalViewOpen(true);
  };

  const handlePlaceClaimClick = () => {
    setIsModalFormOpen(true);
  };

  const handleCancel = () => {
    setIsModalFormOpen(false);
  };

  const header = (
    <>
      <h2>Заявки: Размещение лотов</h2>
      <Button type="primary" size="large" onClick={handlePlaceClaimClick}>
        Подать заявку
      </Button>
    </>
  );

  return (
    <BasePageLayout header={header}>
      <ClaimPlacingLotTableWithFilter
        onRow={(record, rowindex) => {
          return {
            onClick: () => handleOnRowClick(record.id),
          };
        }}
      />
      <ClaimListLotViewModal
        claimId={claimId}
        isOpen={isModalViewOpen}
        onCancel={() => {}}
        onExit={() => setIsModalViewOpen(false)}
      />
      <Modal
        open={isModalFormOpen}
        footer={null}
        title="Подача заявки на размещение лота"
        centered
        onCancel={handleCancel}
      >
        <LotListingForm onFinish={handleCancel} />
      </Modal>
    </BasePageLayout>
  );
}

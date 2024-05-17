'use client';
import { ClaimPlacingLotTableWithFilter } from '@/components/TableWithFilterNew';
import React, { useState } from 'react';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { ClaimListLotViewModal } from '@/components/Modals';
import { Button, Modal } from 'antd';
import LotListingForm from '@/components/Forms/LotListing';
import { useCreateListLotClaim } from '@/redux/features/marketSlice';
import { ListingLotFormValues } from '@/types/forms';
import { ClaimPlacingLotTableWithFilterLearner } from '@/components/TableWithFilterNew/Components/ClaimPlacingLotTableWithFilterLearner';

export default function LotsListingPage() {
  const [isModalViewOpen, setIsModalViewOpen] = useState(false);
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);
  const [claimId, setClaimId] = React.useState<string | null>(null);
  const createListLotClaim = useCreateListLotClaim();

  const handleOnRowClick = (id: string) => {
    setClaimId(id);
    setIsModalViewOpen(true);
  };

  const handlePlaceClaimClick = () => {
    setIsModalFormOpen(true);
  };

  const handleFinish = (values: ListingLotFormValues) => {
    createListLotClaim(values);
    setIsModalFormOpen(false);
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
      <ClaimPlacingLotTableWithFilterLearner
        onRow={(record) => {
          return {
            onClick: () => handleOnRowClick(record.id),
          };
        }}
      />
      <ClaimListLotViewModal
        claimId={claimId}
        isOpen={isModalViewOpen}
        onExit={() => setIsModalViewOpen(false)}
      />
      <Modal
        open={isModalFormOpen}
        footer={null}
        title="Подача заявки на размещение лота"
        centered
        onCancel={handleCancel}
      >
        <LotListingForm onFinish={handleFinish} />
      </Modal>
    </BasePageLayout>
  );
}

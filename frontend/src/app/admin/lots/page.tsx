'use client';
import { LotTableWithFilter } from '@/components/TableWithFilterNew/Components/LotTableWithFilter';
import React, { useState } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import LotViewModal from '@/components/Modals/LotViewModal';
import LotEditModal from '@/components/Modals/LotEditModal';
import LotCreateModal from '@/components/Modals/LotCreateModal';

export default function LotsPage() {
  const [isViewLotModalOpen, setViewLotModalOpen] = useState<boolean>(true);
  const [isCreateLotModalOpen, setIsCreateLotModalOpen] =
    useState<boolean>(false);
  const [isEditLotModalOpen, setIsEditLotModalOpen] = useState<boolean>(true);

  const handleCancel = () => {
    setViewLotModalOpen(false);
  };

  const handleEditLot = () => {
    // setViewLotModalOpen(false);
    setIsEditLotModalOpen(true);
  };

  const handleCloseEditLotModal = () => {
    // setViewLotModalOpen(false);
    setIsEditLotModalOpen(false);
  };

  const handleCloseCreateLotModal = () => {
    // setViewLotModalOpen(false);
    setIsCreateLotModalOpen(false);
  };

  return (
    <BasePageLayout
      header={
        <>
          <h2>Лоты</h2>
          <Button
            icon={<PlusOutlined height={10} />}
            size="large"
            type="primary"
            onClick={() => {
              setIsCreateLotModalOpen(true);
            }}
          >
            Создать
          </Button>
        </>
      }
    >
      <LotTableWithFilter />
      <LotViewModal
        isOpen={isViewLotModalOpen}
        onCancel={handleCancel}
        onOk={() => {}}
        handleOnEdit={handleEditLot}
      />
      <LotEditModal
        lotId={''}
        isOpen={isEditLotModalOpen}
        onCancel={handleCloseEditLotModal}
      />
      <LotCreateModal
        isOpen={isCreateLotModalOpen}
        onCancel={handleCloseCreateLotModal}
      />
    </BasePageLayout>
  );
}

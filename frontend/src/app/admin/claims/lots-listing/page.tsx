'use client';

import { ClaimPlacingLotTableWithFilter } from '@/components/TableWithFilterNew';
import React, { useState } from 'react';

import styles from '@/app/admin/main.module.css';
import { Modal } from 'antd';
import { ClaimListLotViewModal } from '@/components/Modals';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function LotsListingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [claimId, setClaimId] = React.useState<string | null>(null);

  return (
    <BasePageLayout header={<h2>Заявки: Размещение лотов</h2>}>
      <ClaimPlacingLotTableWithFilter
        onRow={(record, rowindex) => {
          return {
            onClick: (ev) => {
              console.log('clicked');
              setClaimId(record.id);
              setIsModalOpen(true);
            },
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

'use client';

import { ClaimPlacingLotTableWithFilter } from '@/components/TableWithFilterNew';
import React, { useState } from 'react';

import styles from '@/app/admin/main.module.css';
import { Modal } from 'antd';
import { ClaimListLotViewModal } from '@/components/Modals';

export default function LotsListingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [claimId, setClaimId] = React.useState<string | null>(null);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Заявки: Размещение лотов</h2>
      </div>
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
    </div>
  );
}

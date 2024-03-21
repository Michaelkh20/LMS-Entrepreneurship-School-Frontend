import React from 'react';
import styles from '@/app/admin/main.module.css';
import { ClaimTransferTableWithFilter } from '@/components/TableWithFilterNew';

export default function TransfersPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Заявки: Перевод ШПрот</h2>
      </div>
      <ClaimTransferTableWithFilter />
    </div>
  );
}

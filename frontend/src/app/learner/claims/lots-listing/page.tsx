import { ClaimPlacingLotTableWithFilter } from '@/components/TableWithFilterNew';
import React from 'react';

import styles from '@/app/admin/main.module.css';

export default function LotsListingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Заявки: Размещение лотов</h2>
      </div>
      <ClaimPlacingLotTableWithFilter />
    </div>
  );
}

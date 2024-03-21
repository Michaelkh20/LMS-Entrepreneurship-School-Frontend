import React from 'react';
import { ClaimBuyingLotTableWithFilter } from '@/components/TableWithFilterNew';

import styles from '@/app/admin/main.module.css';

export default function LotsPurchaseSalePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Заявки: Купля-продажа лотов</h2>
      </div>
      <ClaimBuyingLotTableWithFilter />
    </div>
  );
}

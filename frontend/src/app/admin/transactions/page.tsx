import React from 'react';

import styles from '@/app/admin/main.module.css';
import { TransactionsTableWithFilters } from '@/components/TableWithFilterNew';

export default function TransactionsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Транзакции</h2>
      </div>
      <TransactionsTableWithFilters />
    </div>
  );
}

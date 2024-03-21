import React from 'react';
import { ClaimDeadlineTableWithFilter } from '@/components/TableWithFilterNew';

import styles from '@/app/admin/main.module.css';

export default function OverdueDeadlinesPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Заявки: Просроченный дедлайн</h2>
      </div>
      <ClaimDeadlineTableWithFilter />
    </div>
  );
}

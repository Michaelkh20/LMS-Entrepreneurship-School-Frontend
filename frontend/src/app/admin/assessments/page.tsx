import React from 'react';

import styles from '../main.module.css';
import { AssessmentAllTasksTableWithFilter } from '@/components/TableWithFilterNew/Components/AssessmentAllTasksTableWithFilter';

export default function AssessmentAllPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Оценки</h2>
      </div>
      <AssessmentAllTasksTableWithFilter />
    </div>
  );
}

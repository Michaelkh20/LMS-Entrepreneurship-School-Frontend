'use client';

import { LearnerAseesmentsTable } from '@/components/TableWithFilterNew/Tables/LearnerAsessmentsTable';
import styles from './assessments.module.css';

export default function LearnerAssessmentsPage() {
  return (
    <div className={styles.main__container}>
      <h1 className={styles.main__header}>Оценки</h1>
      <LearnerAseesmentsTable></LearnerAseesmentsTable>
    </div>
  );
}

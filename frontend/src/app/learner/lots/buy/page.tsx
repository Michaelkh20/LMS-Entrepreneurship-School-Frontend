'use client';
import { LearnerLotBuyTable } from '@/components/TableWithFilterNew/Tables/LearnerLotBuyTable';
import styles from '../../assessments/assessments.module.css';

export default function LotsBuyPage() {
  return (
    <div className={styles.main__container}>
      <h1 className={styles.main__header}>Лоты: купленные</h1>
      <LearnerLotBuyTable></LearnerLotBuyTable>
    </div>
  );
}

'use client';
import { LearnerLotSellTable } from '@/components/TableWithFilterNew/Tables/LearnerLotSellTable';
import styles from '../../assessments/assessments.module.css';

export default function LotsBuyPage() {
  return (
    <div className={styles.main__container}>
      <h1 className={styles.main__header}>Лоты: продаю</h1>
      <LearnerLotSellTable></LearnerLotSellTable>
    </div>
  );
}

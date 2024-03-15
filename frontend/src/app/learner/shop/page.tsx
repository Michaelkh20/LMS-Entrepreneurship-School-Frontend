'use client';

import styles from './page.module.css';
import TradeLotCard from '@/components/LotCard';
import LotCardSkeleton from '@/components/LotCard/LotCardSkeleton';
import { useGetLotsShortQuery } from '@/redux/services/learnerApi';

export default function Home() {
  const { data, isLoading } = useGetLotsShortQuery();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.pageLabel}>Магазин</h1>
      <div className={styles.filtersMock}>Здесь будут фильтры</div>
      <div className={styles.lotsContainer}>
        {data &&
          data.lots.map((lot) => (
            <TradeLotCard
              title={lot.title!}
              number={lot.number!}
              performer={lot.performer!}
              price={lot.price!}
              key={lot.id!}
            />
          ))}
        {isLoading &&
          Array(11)
            .fill(0)
            .map((_, index) => <LotCardSkeleton key={index} />)}
      </div>
    </div>
  );
}

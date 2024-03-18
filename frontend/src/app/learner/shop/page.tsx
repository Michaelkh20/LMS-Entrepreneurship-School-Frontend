'use client';

import styles from './page.module.css';
import TradeLotCard from '@/components/LotCard';
import LotCardSkeleton from '@/components/LotCard/components/LotCardSkeleton';
import { useGetLotsShortQuery } from '@/redux/services/learnerApi';
import { Pagination } from 'antd';
import { useState } from 'react';
import { pageSizes, pageSizesPostfix } from './constants';

export default function Home() {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizes[0]);
  const { data, isLoading } = useGetLotsShortQuery({ pageNumber, pageSize });

  const handlePageChange = (page: number, pageSize: number) => {
    setPageNumber(page);
    setPageSize(pageSize);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.pageLabel}>Магазин</h1>
      <div className={styles.filtersMock}>Здесь будут фильтры</div>
      <div className={styles.content}>
        <div className={styles.lotsContainer}>
          {data &&
            data.lots.map((lot) => (
              <TradeLotCard
                id={lot.id!}
                title={lot.title!}
                number={lot.number!}
                performer={lot.performer!}
                price={lot.price!}
                key={lot.id!}
              />
            ))}
          {isLoading &&
            Array(pageSize)
              .fill(0)
              .map((_, index) => <LotCardSkeleton key={index} />)}
        </div>
        <div className={styles.paginationContainer}>
          <Pagination
            current={pageNumber}
            pageSize={pageSize}
            pageSizeOptions={pageSizes}
            showSizeChanger
            total={data?.totalLotsNumber}
            onChange={handlePageChange}
            locale={{ items_per_page: pageSizesPostfix }}
          />
        </div>
      </div>
    </div>
  );
}

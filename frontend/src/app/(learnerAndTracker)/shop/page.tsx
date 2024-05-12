'use client';

import styles from './page.module.css';
import TradeLotCard from '@/components/LotCard';
import LotCardSkeleton from '@/components/LotCard/components/LotCardSkeleton';
import { Pagination } from 'antd';
import { useState } from 'react';
import { pageSizes, pageSizesPostfix } from './constants';
import { BasicFilter } from '@/components/TableWithFilterNew/BasicFilter';
import {
  LotNumberFormItem,
  LotTitleFormItem,
} from '@/components/Forms/FormItems/Filters';
import { useGetLotsForMarketPlaceQuery } from '@/redux/services/api';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizes[0]);
  const { data, isLoading } = useGetLotsForMarketPlaceQuery({
    page: page,
    size: pageSize,
  });

  const handlePageChange = (page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
  };

  const handleFilterChanges = (changedValues: any, allValues: any) => {
    // setFormData((prevState: T) => {
    //   return {
    //     ...prevState,
    //     ...prepareFormUtil(changedValues),
    //     // ...prepareFormUtil(allValues),
    //   };
    // });
  };

  return (
    <BasePageLayout header={<h2>Магазин</h2>}>
      <BasicFilter onChangeEvent={handleFilterChanges}>
        <LotNumberFormItem></LotNumberFormItem>
        <LotTitleFormItem></LotTitleFormItem>
        {/* //TODO: add LotCostFormItem  */}
      </BasicFilter>
      <div className={styles.content}>
        <div className={styles.lotsContainer}>
          {data &&
            data.lots.map((lot) => (
              <TradeLotCard
                id={lot.id}
                title={lot.title}
                number={lot.number}
                performer={lot.performer.name}
                price={lot.price}
                key={lot.id}
              />
            ))}
          {isLoading &&
            Array(pageSize)
              .fill(0)
              .map((_, index) => <LotCardSkeleton key={index} />)}
        </div>
        <div className={styles.paginationContainer}>
          <Pagination
            current={page}
            pageSize={pageSize}
            pageSizeOptions={pageSizes}
            showSizeChanger
            total={data?.pagination.totalElements}
            onChange={handlePageChange}
            locale={{ items_per_page: pageSizesPostfix }}
          />
        </div>
      </div>
    </BasePageLayout>
  );
}

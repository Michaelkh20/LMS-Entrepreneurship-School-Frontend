'use client';

import styles from './page.module.css';
import TradeLotCard from '@/components/LotCard';
import LotCardSkeleton from '@/components/LotCard/components/LotCardSkeleton';
import { Form, InputNumber, Pagination } from 'antd';
import { useState } from 'react';
import { pageSizes, pageSizesPostfix } from './constants';
import { BasicFilter } from '@/components/TableWithFilterNew/BasicFilter';
import {
  LotNumberFormItem,
  LotTitleFormItem,
} from '@/components/Forms/FormItems/Filters';
import { useGetLotsForMarketPlaceQuery } from '@/redux/services/api';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { lotsMock } from '@/components/LotCard/mock';
import { UserSelection } from '@/components/Selections/UserSelection';
import { LearnerSelectionFormItem } from '@/components/Forms/FormItems/Selection/LearnerSelectionFormItem';

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
      <BasicFilter
        onChangeEvent={handleFilterChanges}
        total={data.pagination.totalElements}
      >
        <LotNumberFormItem />
        <LotTitleFormItem />
        <LearnerSelectionFormItem
          type="filter"
          name="learner"
          placeholder="Владелец лота"
        />
        <Form.Item name={'lotNumber'}>
          <InputNumber
            style={{ minWidth: 130 }}
            min={1}
            placeholder={'Цена от'}
          />
        </Form.Item>
        <Form.Item name={'lotNumber'}>
          <InputNumber
            style={{ minWidth: 130 }}
            min={1}
            placeholder={'Цена до'}
          />
        </Form.Item>
      </BasicFilter>
      <div className={styles.content}>
        <div className={styles.lotsContainer}>
          {data &&
            data.lots.map((lot) => <TradeLotCard key={lot.id} lot={lot} />)}
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
            total={data.pagination.totalElements}
            onChange={handlePageChange}
            locale={{ items_per_page: pageSizesPostfix }}
          />
        </div>
      </div>
    </BasePageLayout>
  );
}

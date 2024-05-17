'use client';

import styles from './page.module.css';
import TradeLotCard from '@/components/LotCard';
import { Form, InputNumber, Pagination } from 'antd';
import { useState } from 'react';
import { pageSizes, pageSizesPostfix } from './constants';
import { BasicFilter } from '@/components/TableWithFilterNew/BasicFilter';
import {
  LotNumberFormItem,
  LotTitleFormItem,
} from '@/components/Forms/FormItems/Filters';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { LearnerSelectionFormItem } from '@/components/Forms/FormItems/Selection/LearnerSelectionFormItem';
import {
  useCreateBuyLotClaim,
  useMarketplace,
} from '@/redux/features/marketSlice';
import { GetLotsForMarketPlaceApiArg } from '@/types/api';
import { prepareFormUtil } from '@/components/TableWithFilterNew/utils';
import LotViewModal from '@/components/Modals/LotViewModal';

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizes[0]);
  const [filterData, setFilterData] = useState<GetLotsForMarketPlaceApiArg>({
    page,
    size: pageSize,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lotId, setLotId] = useState<string | null>(null);

  const data = useMarketplace(filterData);
  const createBuyLotClaim = useCreateBuyLotClaim();

  const handlePageChange = (page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
  };

  const handleFilterChanges = (
    _: any,
    allValues: GetLotsForMarketPlaceApiArg
  ) => {
    setFilterData((prevState: GetLotsForMarketPlaceApiArg) => {
      return {
        ...prevState,
        ...prepareFormUtil(allValues),
      };
    });
  };

  const handleCreateBuyLotClick = (id: string) => {
    return createBuyLotClaim({ lotId: id });
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    setLotId(null);
  };

  const handleLotCardClick = (id: string) => {
    setIsModalOpen(true);
    setLotId(id);
  };

  return (
    <BasePageLayout header={<h2>Магазин</h2>}>
      <BasicFilter
        onChangeEvent={handleFilterChanges}
        total={data.page.totalElements}
      >
        <LotNumberFormItem />
        <LotTitleFormItem />
        <LearnerSelectionFormItem
          type="filter"
          name="performerId"
          placeholder="Исполнитель"
        />
        <Form.Item name="priceFrom">
          <InputNumber
            style={{ minWidth: 130 }}
            min={1}
            placeholder={'Цена от'}
          />
        </Form.Item>
        <Form.Item name="priceTo">
          <InputNumber
            style={{ minWidth: 130 }}
            min={1}
            placeholder={'Цена до'}
          />
        </Form.Item>
      </BasicFilter>
      <div className={styles.content}>
        <div className={styles.lotsContainer}>
          {data.lots.map((lot) => (
            <TradeLotCard
              key={lot.id}
              lot={lot}
              onCreateBuyLotClaimClick={handleCreateBuyLotClick}
              onCardClick={() => handleLotCardClick(lot.id)}
            />
          ))}
        </div>
        <div className={styles.paginationContainer}>
          <Pagination
            current={page}
            pageSize={pageSize}
            pageSizeOptions={pageSizes}
            showSizeChanger
            total={data.page.totalElements}
            onChange={handlePageChange}
            locale={{ items_per_page: pageSizesPostfix }}
          />
        </div>
      </div>
      <LotViewModal
        lotId={lotId}
        isOpen={isModalOpen}
        onCancel={handleModalCancel}
        onOk={() => (lotId ? handleCreateBuyLotClick(lotId) : undefined)}
      />
    </BasePageLayout>
  );
}

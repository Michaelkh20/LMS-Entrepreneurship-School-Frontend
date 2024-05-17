'use client';

import {
  ClaimStatusFormItem,
  LotNumberFormItem,
  DatePickerFormItem,
} from '@/components/Forms/FormItems/Filters';
import { LearnerSelectionFormItem } from '@/components/Forms/FormItems/Selection/LearnerSelectionFormItem';

import type { BuyLotClaim, GetBuyLotClaimsApiArg } from '@/types/api';

import { useState } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { ClaimStatus } from '@/types/common';

import { ColumnsType } from 'antd/es/table';
import { useBuyLotClaims } from '@/redux/features/marketSlice';
import { useAuth } from '@/redux/features/authSlice';

type ClaimBuyingLotColumnsDataType = BuyLotClaim;

const ClaimBuyingLotColumns: ColumnsType<ClaimBuyingLotColumnsDataType> = [
  {
    title: 'Лот №',
    dataIndex: 'lot',
    key: 'lot',
    sorter: true,
    render: (_, record) => {
      return `№${record.lot.number}`;
    },
  },
  {
    title: 'Название лота',
    dataIndex: 'title',
    key: 'title',
    width: '500px',
    render: (_, record) => {
      return record.lot.title;
    },
  },
  {
    title: 'Продавец',
    dataIndex: 'performer',
    key: 'performer',
    render: (_, record) => {
      return `${record.lot.performer.name}`;
    },
  },
  {
    title: 'Дата подачи',
    dataIndex: 'date',
    key: 'date',
    render: (_, record) => {
      return record.date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
      });
    },
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    render: (_, record) => {
      return (
        <>
          {record.status === ClaimStatus.Waiting && (
            <p style={{ color: 'var(--color-primary)' }}>Ожидание</p>
          )}
          {record.status === ClaimStatus.Declined && (
            <p style={{ color: 'var(--color-error)' }}>Отклонено</p>
          )}
          {record.status === ClaimStatus.Approved && (
            <p style={{ color: 'var(--color-success)' }}>Одобрено</p>
          )}
        </>
      );
    },
  },
  {
    title: 'Стоимость лота',
    dataIndex: 'price',
    key: 'price',
    render: (value, record, index) => {
      return record.lot.price;
    },
  },
];

export function ClaimBuyingLotTableWithFilterLearner({
  onRowClick,
}: {
  onRowClick?: (id: string) => void;
}) {
  const [authState] = useAuth();
  const [formData, setFormData] = useState<GetBuyLotClaimsApiArg>({
    page: 1,
    size: 10,
    buyerId: authState.userId!,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);

  const data = useBuyLotClaims(dataForReq);

  return (
    <>
      <BasicTableWithFilter
        totalNumber={data.page.totalElements}
        filterFormItems={
          <>
            <LotNumberFormItem />
            <LearnerSelectionFormItem
              placeholder={'Продавец'}
              name={'sellerId'}
              type="filter"
            />
            <ClaimStatusFormItem name="status" />
            <DatePickerFormItem name="dateFrom" placeholder="Дата от" />
            <DatePickerFormItem name="dateTo" placeholder="Дата до" />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: ClaimBuyingLotColumns,
          pagination: { total: data.page.totalElements },
          dataSource: data.claims,
          rowKey: 'id',
          onRow: (record) => {
            return {
              onClick: () => {
                onRowClick?.(record.id);
              },
            };
          },
        }}
        formData={formData}
        setFormData={setFormData}
        setDataForReq={setDataForReq}
      />
    </>
  );
}

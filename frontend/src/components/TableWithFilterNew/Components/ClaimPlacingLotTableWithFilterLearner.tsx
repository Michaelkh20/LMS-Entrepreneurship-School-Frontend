'use client';

import {
  ClaimStatusFormItem,
  LotNumberFormItem,
  DatePickerFormItem,
  LotTitleFormItem,
} from '@/components/Forms/FormItems/Filters';

import type { GetBuyLotClaimsApiArg, ListLotClaim } from '@/types/api';

import { useState } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';

import { ColumnsType, TableProps } from 'antd/es/table';
import { ClaimStatus } from '../../../types/common';
import { useListLotClaims } from '@/redux/features/marketSlice';
import { useAuth } from '@/redux/features/authSlice';

type ClaimListLotColumnsDataType = ListLotClaim;

const ClaimPlacingLotColumns: ColumnsType<ClaimListLotColumnsDataType> = [
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
      return `${record.lot.price}`;
    },
  },
];

export function ClaimPlacingLotTableWithFilterLearner({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [authState] = useAuth();
  const [formData, setFormData] = useState<GetBuyLotClaimsApiArg>({
    page: 1,
    size: 10,
    buyerId: authState.userId!,
  });
  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);

  const data = useListLotClaims(dataForReq);

  return (
    <>
      <BasicTableWithFilter
        totalNumber={data.page.totalElements}
        filterFormItems={
          <>
            <LotNumberFormItem />
            <LotTitleFormItem />
            <ClaimStatusFormItem name="status" />
            <DatePickerFormItem name="dateFrom" placeholder="Дата от" />
            <DatePickerFormItem name="dateTo" placeholder="Дата до" />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: ClaimPlacingLotColumns,
          pagination: { total: data.page.totalElements },
          dataSource: data.claims,
          rowKey: 'id',
          onRow: onRow,
        }}
        formData={formData}
        setFormData={setFormData}
        setDataForReq={setDataForReq}
      />
    </>
  );
}

'use client';

import {
  ClaimStatusFormItem,
  LotNumberFormItem,
  DatePickerFormItem,
} from '@/components/Forms/FormItems/Filters';
import { LearnerSelectionFormItem } from '@/components/Forms/FormItems/Selection/LearnerSelectionFormItem';

import type { BuyLotClaimsPage, GetBuyLotClaimsApiArg } from '@/types/api';

import { useState, useEffect, useMemo } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { ClaimStatus, TwoSidedClaimStatus } from '@/types/common';

import { ColumnsType } from 'antd/es/table';
import { useGetBuyLotClaimsQuery } from '@/redux/services/api';
import type { BuyLotClaimSnippet } from '@/types/api';

import dateToFormatString from '@/util/dateToFormatString';

type ClaimBuyingLotColumnsDataType = {
  id: number | string;
  number: string;
  status: ClaimStatus; //TODO: LotStaus
  date: Date;
  title: string;
  performer: string;
  price: number;
};

const ClaimBuyingLotColumns: ColumnsType<ClaimBuyingLotColumnsDataType> = [
  {
    title: 'Лот №',
    dataIndex: 'lot',
    key: 'lot',
    sorter: true,
    render: (value, record, index) => {
      return `${record.number}`;
    },
  },
  {
    title: 'Название лота',
    dataIndex: 'title',
    key: 'title',
    width: '500px',
  },
  { title: 'Продавец', dataIndex: 'performer', key: 'performer' },
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
      return `${record.price}`;
    },
  },
];

const mockData: ClaimBuyingLotColumnsDataType[] = [
  {
    id: 7,
    number: '7',
    title: 'SEO-оптимизация веб-сайта',
    price: 1200,
    performer: 'Жуйков Никита',
    date: new Date(2024, 3, 17),
    status: ClaimStatus.Approved,
  },
  {
    id: 8,
    number: '8',
    title: 'Обучение игре на гитаре',
    price: 400,
    performer: 'Кирносов Илья',
    date: new Date(2024, 2, 13),
    status: ClaimStatus.Declined,
  },
  {
    id: 9,
    number: '9',
    title: 'Разработка мобильного приложения',
    price: 5000,
    performer: 'Дубин Василий',
    date: new Date(2024, 3, 18),
    status: ClaimStatus.Waiting,
  },
];

export function ClaimBuyingLotTableWithFilter({
  onRowClick,
}: {
  onRowClick?: (id: string) => void;
}) {
  const [formData, setFormData] = useState<GetBuyLotClaimsApiArg>({
    page: 1,
    size: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);

  const { data, isLoading, isError, isFetching } =
    useGetBuyLotClaimsQuery(dataForReq);
  // const data = mockData;

  const dataForTable = useMemo(() => {
    return data?.claims.map<ClaimBuyingLotColumnsDataType>((claim) => {
      const res: ClaimBuyingLotColumnsDataType = {
        id: claim.id,
        status: claim.status,
        buyer: claim.buyer,
        date: claim.date,
        lot: claim.lot,
      };
      return res;
    });
  }, [data]);

  // const data = mockData;

  return (
    <>
      <BasicTableWithFilter
        totalNumber={data?.pagination.totalElements}
        filterFormItems={
          <>
            <LotNumberFormItem />
            <LearnerSelectionFormItem
              placeholder={'Продавец'}
              name={'receiverId'}
              type="filter"
            />
            <ClaimStatusFormItem />
            <DatePickerFormItem name={'dateFrom'} placeholder={'Дата от'} />
            <DatePickerFormItem name={'dateTo'} placeholder={'Дата до'} />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: ClaimBuyingLotColumns,
          pagination: { total: data?.pagination.totalElements },
          dataSource: dataForTable,
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

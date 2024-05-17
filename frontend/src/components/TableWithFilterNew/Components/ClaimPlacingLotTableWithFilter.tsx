'use client';

import {
  ClaimStatusFormItem,
  LotNumberFormItem,
  DatePickerFormItem,
  LotTitleFormItem,
} from '@/components/Forms/FormItems/Filters';

import type {
  BuyLotClaimsPage,
  GetListLotClaimsApiArg,
  ListLotClaimsPage,
} from '@/types/api';
import { useGetListLotClaimsQuery } from '@/redux/services/api';

import { useState, useMemo } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';

import { ColumnsType, TableProps } from 'antd/es/table';
import { ClaimStatus, TwoSidedClaimStatus } from '@/types/common';
import type { ListLotClaimSnippet } from '@/types/api';
import { LearnerSelectionFormItem } from '@/components/Forms/FormItems/Selection/LearnerSelectionFormItem';
import { useBuyLotClaims, useListLotClaims } from '@/redux/features/marketSlice';

type ClaimListLotColumnsDataType = {
  id: number | string;
  number: number | null;
  status: ClaimStatus; //TODO: LotStaus
  date: Date;
  title: string;
  price: number;
};

const ClaimPlacingLotColumns: ColumnsType<ClaimListLotColumnsDataType> = [
  {
    title: 'Лот №',
    dataIndex: 'lot',
    key: 'lot',
    sorter: true,
    render: (value, record, index) => {
      return `№${record.number}`;
    },
  },
  {
    title: 'Название лота',
    dataIndex: 'title',
    key: 'title',
    width: '500px',
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
      return `${record.price}`;
    },
  },
];

const mockData: ClaimListLotColumnsDataType[] = [
  {
    id: 10,
    number: 10,
    title: 'Создание видеоролика',
    price: 2500,
    date: new Date(2024, 2, 7),
    status: ClaimStatus.Approved,
  },
  {
    id: 11,
    number: 11,
    title: 'Консультация по ведению социальных сетей',
    price: 250,
    date: new Date(2024, 3, 16),
    status: ClaimStatus.Declined,
  },
  {
    id: 12,
    number: 12,
    title: 'Разработка мобильного приложения',
    price: 10000,
    date: new Date(2024, 3, 18),
    status: ClaimStatus.Waiting,
  },
];

export function ClaimPlacingLotTableWithFilter({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetListLotClaimsApiArg>({
    page: 1,
    size: 10,
  });
  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);

  // const { data, isLoading, isError, isFetching } =
  //   useGetListLotClaimsQuery(dataForReq);
  // const data = mockData;
  const data = useListLotClaims(dataForReq);

  const dataForTable = useMemo(() => {
    return data?.claims.map<ClaimListLotColumnsDataType>((claim) => {
      const res: ClaimListLotColumnsDataType = {
        id: claim.id,
        status: claim.status,
        date: claim.date,
        number: claim.lot.number,
        title: claim.lot.title,
        price: claim.lot.price
      };
      return res;
    });
  }, [data]);

  // const data = mockData;

  return (
    <>
      <BasicTableWithFilter
        totalNumber={data?.page.totalElements}
        filterFormItems={
          <>
            <LotNumberFormItem />
            <LotTitleFormItem />
            <ClaimStatusFormItem />
            <DatePickerFormItem name={'dateFrom'} placeholder={'Дата от'} />
            <DatePickerFormItem name={'dateTo'} placeholder={'Дата до'} />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: ClaimPlacingLotColumns,
          pagination: { total: data?.page?.totalElements },
          dataSource: dataForTable,
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

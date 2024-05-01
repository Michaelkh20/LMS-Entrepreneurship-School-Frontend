'use client';

import {
  ClaimStatusFormItem,
  UserSelectionFormItem,
  LotNumberFormItem,
  DatePickerFormItem,
} from '@/components/Forms/FormItems/Filters';

import type {
  BuyLotClaimsPage,
  GetBuyLotClaimsApiArg,
  UserSnippet,
} from '@/types/api';

import { useState, useEffect, useMemo } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { TwoSidedClaimStatus } from '@/types/common';

import { ColumnsType } from 'antd/es/table';
import { useGetBuyLotClaimsQuery } from '@/redux/services/api';
import type { BuyLotClaimSnippet } from '@/types/api';

import dateToFormatString from '@/util/dateToFormatString';

type ClaimBuyingLotColumnsDataType = BuyLotClaimSnippet;

const ClaimBuyingLotColumns: ColumnsType<ClaimBuyingLotColumnsDataType> = [
  {
    title: 'Лот',
    dataIndex: 'lot',
    key: 'lot',
    sorter: true,
    render: (value, record, index) => {
      return `${record.lot.number}`;
    },
  },
  {
    title: 'Покупатель',
    dataIndex: 'buyer',
    key: 'buyer',
    render: (value, record, index) => {
      return `${record.buyer.surname} ${record.buyer.name}`;
    },
  },
  { title: 'Дата', dataIndex: 'date', key: 'date' },
  {
    title: 'Статус',
    dataIndex: 'claimStatus',
    key: 'claimStatus',
    render: (_, record: ClaimBuyingLotColumnsDataType) => {
      return (
        <>
          {record.status === TwoSidedClaimStatus.WaitingAdmin && (
            <p style={{ color: 'var(--color-primary)' }}>Ожидание админа</p>
          )}
          {record.status === TwoSidedClaimStatus.WaitingLearner && (
            <p style={{ color: 'var(--color-primary)' }}>
              Ожидание пользователя
            </p>
          )}
          {record.status === TwoSidedClaimStatus.DeclinedAdmin && (
            <p style={{ color: 'var(--color-error)' }}>Отклонено админом</p>
          )}
          {record.status === TwoSidedClaimStatus.DeclinedLearner && (
            <p style={{ color: 'var(--color-error)' }}>
              Отклонено пользователем
            </p>
          )}
          {record.status === TwoSidedClaimStatus.Approved && (
            <p style={{ color: 'var(--color-success)' }}>Одобрено</p>
          )}
        </>
      );
    },
  },
  {
    title: 'Стоимость',
    dataIndex: 'price',
    key: 'price',
    render: (value, record, index) => {
      return `${record.lot.price}`;
    },
  },
];

const mockData: BuyLotClaimsPage = {
  pagination: {
    total_pages: 1,
    total_elements: 3,
  },
  claims: [
    {
      id: '',
      status: TwoSidedClaimStatus.WaitingAdmin,
      buyer: {
        id: '1',
        name: 'asd',
        surname: 'sdf',
        patronymic: null,
      },
      date: '12.12.12',
      lot: {
        number: null,
        title: '1',
        price: 20,
        performer: {
          id: '2',
          name: 'sdf',
          surname: 'sdf',
          patronymic: null,
        },
      },
    },
  ],
};

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

  return (
    <>
      <BasicTableWithFilter
        totalNumber={data?.pagination.total_elements}
        filterFormItems={
          <>
            <LotNumberFormItem />
            <UserSelectionFormItem
              placeholder={'Покупатель'}
              name={'receiverId'}
            />
            <ClaimStatusFormItem />
            <DatePickerFormItem name={'dateFrom'} placeholder={'Дата от'} />
            <DatePickerFormItem name={'dateTo'} placeholder={'Дата до'} />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: ClaimBuyingLotColumns,
          pagination: { total: data?.pagination.total_elements },
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

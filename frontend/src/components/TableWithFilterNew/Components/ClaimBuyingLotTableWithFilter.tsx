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

import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { TwoSidedClaimStatus } from '@/types/common';

import { ColumnsType } from 'antd/es/table';
import { useGetBuyLotClaimsQuery } from '@/redux/services/api';

import dateToFormatString from '@/util/dateToFormatString';

type ClaimBuyingLotColumnsDataType = {
  id: string;
  claimStatus: TwoSidedClaimStatus;
  date: string;
  buyer: UserSnippet;
  lot: string;
  price: number;
};

const ClaimBuyingLotColumns: ColumnsType<ClaimBuyingLotColumnsDataType> = [
  {
    title: 'Лот',
    dataIndex: 'lot',
    key: 'lot',
    sorter: true,
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
          {record.claimStatus === TwoSidedClaimStatus.WaitingAdmin && (
            <p style={{ color: 'var(--color-primary)' }}>Ожидание админа</p>
          )}
          {record.claimStatus === TwoSidedClaimStatus.DeclinedAdmin && (
            <p style={{ color: 'var(--color-error)' }}>Отклонено админом</p>
          )}
          {record.claimStatus === TwoSidedClaimStatus.WaitingLearner && (
            <p style={{ color: 'var(--color-primary)' }}>
              Ожидание пользователя
            </p>
          )}
          {record.claimStatus === TwoSidedClaimStatus.DeclinedLearner && (
            <p style={{ color: 'var(--color-error)' }}>
              Отклонено пользователем
            </p>
          )}
          {record.claimStatus === TwoSidedClaimStatus.Approved && (
            <p style={{ color: 'var(--color-success)' }}>Одобрено</p>
          )}
        </>
      );
    },
  },
  { title: 'Стоимость', dataIndex: 'price', key: 'price' },
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
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<ClaimBuyingLotColumnsDataType[]>();

  const { data, isLoading, isError, isFetching } =
    useGetBuyLotClaimsQuery(dataForReq);

  console.log(data);

  useEffect(() => {
    const dataForTable: ClaimBuyingLotColumnsDataType[] = mockData?.claims.map(
      (claim) => {
        return {
          id: claim.id,
          claimStatus: claim.status,
          date: dateToFormatString(claim.date || undefined),
          buyer: claim.buyer,
          lot: claim.lot.title,
          price: claim.lot.price,
        } as ClaimBuyingLotColumnsDataType;
      }
    );
    setDataTable(dataForTable);
  }, [mockData, data]);

  useEffect(() => {
    console.log('FormData1:', formData);
  }, [formData]);

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
          dataSource: dataTable,
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

'use client';

import {
  ClaimStatusFormItem,
  UserSelectionFormItem,
  LotNumberFormItem,
  DatePickerFormItem,
} from '@/components/Forms/FormItems/Filters';

import type { GetListLotClaimsApiArg } from '@/types/api';
import { useGetListLotClaimsQuery } from '@/redux/services/api';

import { useState, useMemo } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';

import { ColumnsType, TableProps } from 'antd/es/table';
import { TwoSidedClaimStatus } from '@/types/common';
import type { ListLotClaimSnippet } from '@/types/api';

type ClaimListLotColumnsDataType = ListLotClaimSnippet;

const ClaimPlacingLotColumns: ColumnsType<ClaimListLotColumnsDataType> = [
  {
    title: 'Лот',
    dataIndex: 'lot',
    key: 'lot',
    sorter: true,
    render: (value, record, index) => {
      return <>{record.lot.title}</>;
    },
  },
  {
    title: 'Исполнитель',
    dataIndex: 'performer',
    key: 'performer',
    render: (value, record, index) => {
      return (
        <>{`${record.lot.performer.surname} ${record.lot.performer.name}`}</>
      );
    },
  },
  { title: 'Дата', dataIndex: 'date', key: 'date' },
  {
    title: 'Статус',
    dataIndex: 'claimStatus',
    key: 'claimStatus',
    render: (_, record: ClaimListLotColumnsDataType) => {
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
      return <>{record.lot.price}</>;
    },
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

  const { data, isLoading, isError, isFetching } =
    useGetListLotClaimsQuery(dataForReq);

  const dataForTable = useMemo(() => {
    return data?.claims.map<ClaimListLotColumnsDataType>((claim) => {
      const res: ClaimListLotColumnsDataType = {
        id: claim.id,
        status: claim.status,
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
          columns: ClaimPlacingLotColumns,
          pagination: { total: data?.pagination?.total_elements },
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

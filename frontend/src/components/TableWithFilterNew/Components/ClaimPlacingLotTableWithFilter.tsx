'use client';

import {
  ClaimStatusFormItem,
  UserSelectionFormItem,
  LotNumberFormItem,
  DatePickerFormItem,
} from '@/components/Forms/FormItems/Filters';
// import { accountsColumns } from '@/components/TableWithFilter/TableColumns';
// import { useGetClaimsQuery } from '@/redux/services/adminApi';
import type { GetClaimsApiArg } from '@/types/requests';
import type {
  AdminClaimTableItem,
  LotSelectionItem,
  TaskSelectionItem,
  UserSelectionItem,
} from '@/types/responses';
import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { ClaimType, ClaimStatus, Delay } from '@/types/common';
import { ColumnsType } from 'antd/es/table';

type ClaimPlacingLotColumnsDataType = {
  id: AdminClaimTableItem['id'];
  claimStatus: AdminClaimTableItem['status'];
  date: AdminClaimTableItem['dateTime'];
  receiver: UserSelectionItem['name'];
  lot: LotSelectionItem['number'];
  sum: AdminClaimTableItem['sum'];
};

const ClaimPlacingLotColumns: ColumnsType<ClaimPlacingLotColumnsDataType> = [
  {
    title: 'Лот',
    dataIndex: 'lot',
    key: 'lot',
    defaultSortOrder: 'ascend',
    sorter: true,
  },
  { title: 'Покупатель', dataIndex: 'receiver', key: 'receiver' },
  { title: 'Дата', dataIndex: 'date', key: 'date' },
  {
    title: 'Статус',
    dataIndex: 'claimStatus',
    key: 'claimStatus',
    render: (_, record: ClaimPlacingLotColumnsDataType) => {
      return (
        <>
          {record.claimStatus === ClaimStatus.Waiting && <p style={{color: 'var(--color-primary)'}}>Ожидание</p>}
          {record.claimStatus === ClaimStatus.Declined && <p style={{color: 'var(--color-error)'}}>Отклонено</p>}
          {record.claimStatus === ClaimStatus.Approved && <p style={{color: 'var(--color-success)'}}>Одобрено</p>}
        </>
      );
    },
  },
  { title: 'Стоимость', dataIndex: 'sum', key: 'sum' },
];

const mockData: ClaimPlacingLotColumnsDataType[] = [
  {
    id: 12,
    lot: 5,
    claimStatus: ClaimStatus.Approved,
    receiver: 'Иван Обучающийся',
    date: '123123',
    sum: 5000,
  },
  {
    id: 122,
    lot: 6,
    claimStatus: ClaimStatus.Declined,
    receiver: 'Иван Обучающийся',
    date: '123123',
    sum: 5000,
  },
  {
    id: 13,
    lot: 7,
    claimStatus: ClaimStatus.Waiting,
    receiver: 'Иван Обучающийся',
    date: '222',
    sum: 300,
  },
];

export function ClaimPlacingLotTableWithFilter() {
  const [formData, setFormData] = useState<GetClaimsApiArg>({
    claimType: ClaimType.PlacingLot,
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] =
    useState<ClaimPlacingLotColumnsDataType[]>(mockData);
  // const { data, isLoading, isError, isFetching } =
  //   useGetClaimsQuery(dataForReq);

  useEffect(() => {
    console.log('FormData1:', formData);
  }, [formData]);

  return (
    <>
      <BasicTableWithFilter
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
          // pagination: { total: data?.pagination?.totalElements },
          dataSource: dataTable,
          rowKey: 'id',
        }}
        formData={formData}
        setFormData={setFormData}
        setDataForReq={setDataForReq}
      />
    </>
  );
}

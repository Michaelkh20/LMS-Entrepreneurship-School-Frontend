'use client';

import {
  ClaimStatusFormItem,
  UserSelectionFormItem,
  LotNumberFormItem,
  DatePickerFormItem,
} from '@/components/Forms/FormItems/Filters';
// import { accountsColumns } from '@/components/TableWithFilter/TableColumns';
// import { useGetClaimsQuery } from '@/redux/services/adminApi';
import type { GetLotsApiArg } from '@/types/requests';
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

type LotColumnsDataType = {
  id: AdminClaimTableItem['id'];
  status: string;
  date: AdminClaimTableItem['dateTime'];
  user: UserSelectionItem['name'];
  lot: LotSelectionItem['number'];
  price: number;
};

const LotColumns: ColumnsType<LotColumnsDataType> = [
  {
    title: 'Лот',
    dataIndex: 'lot',
    key: 'lot',
    defaultSortOrder: 'ascend',
    sorter: true,
  },
  { title: 'Владелец', dataIndex: 'user', key: 'user' },
  { title: 'Дата', dataIndex: 'date', key: 'date' },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    // render: (_, record: LotColumnsDataType) => {
    //   return (
    //     <>
    //       {record.claimStatus === ClaimStatus.Waiting && <p style={{color: 'var(--color-primary)'}}>Ожидание</p>}
    //       {record.claimStatus === ClaimStatus.Declined && <p style={{color: 'var(--color-error)'}}>Отклонено</p>}
    //       {record.claimStatus === ClaimStatus.Approved && <p style={{color: 'var(--color-success)'}}>Одобрено</p>}
    //     </>
    //   );
    // },
  },
  { title: 'Стоимость', dataIndex: 'price', key: 'price' },
];

const mockData: LotColumnsDataType[] = [
  {
    id: 12,
    lot: 5,
    status: ClaimStatus.Approved,
    user: 'Иван Обучающийся',
    date: '123123',
    price: 5000,
  },
  {
    id: 122,
    lot: 6,
    status: ClaimStatus.Declined,
    user: 'Иван Обучающийся',
    date: '123123',
    price: 5000,
  },
  {
    id: 13,
    lot: 7,
    status: ClaimStatus.Waiting,
    user: 'Иван Обучающийся',
    date: '222',
    price: 300,
  },
];

export function LotTableWithFilter() {
  const [formData, setFormData] = useState<GetLotsApiArg>({
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] =
    useState<LotColumnsDataType[]>(mockData);
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
          columns: LotColumns,
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

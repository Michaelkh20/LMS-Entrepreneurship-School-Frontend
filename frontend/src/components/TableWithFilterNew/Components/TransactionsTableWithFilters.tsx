'use client';

import {
  NameFormItem,
  EmailFormItem,
} from '@/components/Forms/FormItems/Filters';
// import { accountsColumns } from '@/components/TableWithFilter/TableColumns';
// import { useGetTransactionsQuery } from '@/redux/services/adminApi';
import type { GetTransactionsApiArg } from '@/types/requests';
import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import {
  Name,
  Email,
  TeamNumber,
  Role,
  Balance,
  Id,
  TransactionType,
} from '@/types/common';
import { ColumnsType, TableProps } from 'antd/es/table';

import type {
  AdminTransactionTableItem,
  UserSelectionItem,
} from '@/types/responses';

type TransactionsColumnsDataType = {
  id: AdminTransactionTableItem['id'];
  user: UserSelectionItem['name'];
  type: TransactionType;
  description: AdminTransactionTableItem['description'];
  dateTime: AdminTransactionTableItem['dateTime'];
  sum: AdminTransactionTableItem['sum'];
};

const TransactionsColumns: ColumnsType<TransactionsColumnsDataType> = [
  {
    title: 'Имя',
    dataIndex: 'user',
    key: 'user',
    sorter: true,
  },
  { title: 'Тип', dataIndex: 'type', key: 'type' },
  { title: 'Описание', dataIndex: 'description', key: 'description' },
  { title: 'Дата', dataIndex: 'dateTime', key: 'dateTime' },
  { title: 'Сумма', dataIndex: 'sum', key: 'sum' },
];

const mockData: TransactionsColumnsDataType[] = [
  {
    id: 12,
    type: TransactionType.Activity,
    user: 'Иван Обучающийся',
    dateTime: '123123',
    description: 'Aboba Aboba Aboba Aboba Aboba Aboba Aboba Aboba ',
    sum: 5000,
  },
  {
    id: 123,
    type: TransactionType.AdminIncome,
    user: 'Иван Обучающийся',
    dateTime: '123123',
    description: 'Aboba Aboba Aboba Aboba Aboba Aboba Aboba Aboba ',
    sum: 5000,
  },
  {
    id: 124,
    type: TransactionType.BuyLot,
    user: 'Иван Обучающийся',
    dateTime: '123123',
    description: 'Aboba Aboba Aboba Aboba Aboba Aboba Aboba Aboba ',
    sum: 5000,
  },
];

export function TransactionsTableWithFilters({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetTransactionsApiArg>({
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] =
    useState<TransactionsColumnsDataType[]>(mockData);
  // const { data, isLoading, isError, isFetching } =
  //   useGetTransactionsQuery(dataForReq);

  useEffect(() => {
    console.log('FormData1:', formData);
  }, [formData]);

  return (
    <>
      <BasicTableWithFilter
        // totalNumber={data?.totalElems}
        filterFormItems={
          <>
            <NameFormItem />
            <EmailFormItem />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: TransactionsColumns,
          // pagination: { total: data?.pagination?.totalElements },
          dataSource: dataTable,
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

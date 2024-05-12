'use client';

import {
  NameFormItem,
  EmailFormItem,
  TransactionTypeFormItem,
  DatePickerFormItem,
} from '@/components/Forms/FormItems/Filters';

import { useState, useEffect, useMemo } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { TransactionType } from '@/types/common';

import { ColumnsType, TableProps } from 'antd/es/table';

import type {
  GetTransactionsApiArg,
  Transaction,
  TransactionsPage,
} from '@/types/api';
import { useGetTransactionsQuery } from '@/redux/services/api';
import { transactionTypeToString } from '@/util/enumsToString';

type TransactionsColumnsDataType = Transaction;
const TransactionsColumns: ColumnsType<TransactionsColumnsDataType> = [
  {
    title: 'Имя',
    dataIndex: 'user',
    key: 'user',
    sorter: true,
    render: (_value, record, _index) => {
      return `${record.learner.surname} ${record.learner.name}`;
    },
  },
  {
    title: 'Тип',
    dataIndex: 'type',
    key: 'type',
    render: (_value, record, _index) => {
      return `${transactionTypeToString(record.type)}`;
    },
  },
  {
    title: 'Описание',
    dataIndex: 'description',
    key: 'description',
    render: (_value, record, _index) => {
      return `${record.description}`;
    },
  },
  //TODO: Дата сейчас в строках
  {
    title: 'Дата',
    dataIndex: 'dateTime',
    key: 'dateTime',
    render: (_value, record, _index) => {
      return `${record.date}`;
    },
  },
  {
    title: 'Сумма',
    dataIndex: 'sum',
    key: 'sum',
    render: (_value, record, _index) => {
      return `${record.sum}`;
    },
  },
];

const mockData: TransactionsPage = {
  pagination: {
    total_pages: 0,
    total_elements: 0,
  },
  content: [
    {
      id: '',
      learner: {
        id: '',
        name: '',
        surname: '',
      },
      type: TransactionType.Activity,
      description: null,
      date: '',
      sum: 0,
    },
  ],
};

export function TransactionsTableWithFilters({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetTransactionsApiArg>({
    page: 1,
    size: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);

  const { data, isLoading, isError, isFetching } =
    useGetTransactionsQuery(dataForReq);

  const dataForTable = useMemo(() => {
    return data?.content.map<TransactionsColumnsDataType>((transaction) => {
      const res: TransactionsColumnsDataType = {
        id: transaction.id,
        learner: transaction.learner,
        type: transaction.type,
        description: transaction.description,
        date: transaction.date,
        sum: transaction.sum,
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
            <NameFormItem />
            <TransactionTypeFormItem />
            <DatePickerFormItem name={'dateFrom'} placeholder={'Дата от'} />
            <DatePickerFormItem name={'dateTo'} placeholder={'Дата до'} />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: TransactionsColumns,
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

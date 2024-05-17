'use client';

import {
  ClaimStatusFormItem,
  DatePickerFormItem,
} from '@/components/Forms/FormItems/Filters';

import type {
  GetTransferClaimsApiArg,
  TransferClaim,
  TransferClaimsPage,
} from '@/types/api';

import { useState, useMemo } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { ColumnsType, TableProps } from 'antd/es/table';
import { Space, Popconfirm, Button } from 'antd';

import { useGetTransferClaimsQuery } from '@/redux/services/api';
import { ClaimStatus } from '@/types/common';
import { useAuth } from '../../../redux/features/authSlice';
import { LearnerSelectionFormItem } from '@/components/Forms/FormItems/Selection/LearnerSelectionFormItem';
import { UserSnippet } from '@proto/users/users_api';
import { useTransferClaimsLearner } from '@/redux/features/marketSlice';

type ClaimTransferColumnsDataType = TransferClaim;

const ClaimTransferColumns: ColumnsType<ClaimTransferColumnsDataType> = [
  {
    title: 'Отправитель',
    dataIndex: 'sender',
    key: 'sender',
    sorter: true,
    render: (_, record) => {
      return `${record.sender.surname} ${record.sender.name}`;
    },
  },
  {
    title: 'Получатель',
    dataIndex: 'receiver',
    key: 'receiver',
    render: (_, record) => {
      return `${record.receiver.surname} ${record.receiver.name}`;
    },
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    render: (_, record: ClaimTransferColumnsDataType) => {
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
    title: 'Сумма',
    dataIndex: 'sum',
    key: 'sum',
    render: (_, record) => {
      return record.sum;
    },
  },
];

export function ClaimTransferTableWithFilterLearner({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetTransferClaimsApiArg>({
    page: 1,
    size: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);

  const data = useTransferClaimsLearner(dataForReq);

  return (
    <>
      <BasicTableWithFilter
        totalNumber={data.page.totalElements}
        filterFormItems={
          <>
            <LearnerSelectionFormItem
              placeholder={'Отправитель'}
              name={'senderId'}
              type="filter"
            />
            <LearnerSelectionFormItem
              placeholder={'Получатель'}
              name={'receiverId'}
              type="filter"
            />
            <ClaimStatusFormItem />
            <DatePickerFormItem name="dateFrom" placeholder="Дата от" />
            <DatePickerFormItem name="dateTo" placeholder="Дата до" />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: ClaimTransferColumns,
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

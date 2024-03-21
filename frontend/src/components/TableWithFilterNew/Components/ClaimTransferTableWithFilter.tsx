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
import { Space, Popconfirm, Button } from 'antd';

type ClaimTransferColumnsDataType = {
  id: AdminClaimTableItem['id'];
  claimStatus: AdminClaimTableItem['status'];
  date: AdminClaimTableItem['dateTime'];
  learner: UserSelectionItem['name'];
  receiver: UserSelectionItem['name'];
  sum: AdminClaimTableItem['sum'];
};

const ClaimTransferColumns: ColumnsType<ClaimTransferColumnsDataType> = [
  {
    title: 'Отправитель',
    dataIndex: 'learner',
    key: 'learner',
    defaultSortOrder: 'ascend',
    sorter: true,
  },
  {
    title: 'Получатель',
    dataIndex: 'receiver',
    key: 'receiver',
    defaultSortOrder: 'ascend',
    sorter: true,
  },
  { title: 'Дата', dataIndex: 'date', key: 'date' },
  {
    title: 'Статус',
    dataIndex: 'claimStatus',
    key: 'claimStatus',
    render: (_, record: ClaimTransferColumnsDataType) => {
      return (
        <>
          {record.claimStatus === ClaimStatus.Waiting && (
            <p style={{ color: 'var(--color-primary)' }}>Ожидание</p>
          )}
          {record.claimStatus === ClaimStatus.Declined && (
            <p style={{ color: 'var(--color-error)' }}>Отклонено</p>
          )}
          {record.claimStatus === ClaimStatus.Approved && (
            <p style={{ color: 'var(--color-success)' }}>Одобрено</p>
          )}
        </>
      );
    },
  },

  { title: 'Сумма', dataIndex: 'sum', key: 'sum' },
  { title: 'Подтверждение', dataIndex: 'delay', key: 'delay' },
  {
    title: 'Подтверждение',
    dataIndex: '',
    key: 'x',
    render: (_: any, record: ClaimTransferColumnsDataType) => {
      return (
        <>
          {record.claimStatus === ClaimStatus.Waiting && (
            <ConfirmButtons record={record} />
          )}
        </>
      );
    },
  },
];

const ConfirmButtons = ({
  record,
}: {
  record: ClaimTransferColumnsDataType;
}) => {
  return (
    <Space>
      <Popconfirm
        cancelText="Нет"
        okText="Да"
        title={'Отклонить заявку?'}
        onConfirm={() => console.log('Reject', record.id, record.sum)}
      >
        <Button>Нет</Button>
      </Popconfirm> 
      <Popconfirm
        title={'Одобрить заявку?'}
        cancelText="Нет"
        okText="Да"
        onConfirm={() => console.log('Approve', record.id, record.sum)}
      >
        <Button>Да</Button>
      </Popconfirm>
    </Space>
  );
};

const mockData: ClaimTransferColumnsDataType[] = [
  {
    id: 12,
    claimStatus: ClaimStatus.Approved,
    learner: 'Иван Обучающийся',
    receiver: 'Иван Получающий',
    date: '123123',
    sum: 5000,
  },
  {
    id: 123123,
    claimStatus: ClaimStatus.Waiting,
    learner: 'Иван Обучающийся',
    receiver: 'Иван Ожидающий',
    date: '123123',
    sum: 5000,
  },
  {
    id: 1234,
    claimStatus: ClaimStatus.Declined,
    learner: 'Иван Обучающийся',
    receiver: 'Иван Получающий',
    date: '123123',
    sum: 5000,
  },
];

export function ClaimTransferTableWithFilter() {
  const [formData, setFormData] = useState<GetClaimsApiArg>({
    claimType: ClaimType.Transfer,
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] =
    useState<ClaimTransferColumnsDataType[]>(mockData);
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
  
            <UserSelectionFormItem
              placeholder={'Отправитель'}
              name={'learnerId'}
            />
            <UserSelectionFormItem
              placeholder={'Получатель'}
              name={'receiverId'}
            />
            <ClaimStatusFormItem />
            <DatePickerFormItem name={'dateFrom'} placeholder={'Дата от'} />
            <DatePickerFormItem name={'dateTo'} placeholder={'Дата до'} />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: ClaimTransferColumns,
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

'use client';

import {
  ClaimStatusFormItem,
  UserSelectionFormItem,
  LotNumberFormItem,
  DatePickerFormItem,
} from '@/components/Forms/FormItems/Filters';
// import { accountsColumns } from '@/components/TableWithFilter/TableColumns';
// import { useGetClaimsQuery } from '@/redux/services/adminApi';
import type { GetTransferClaimsApiArg, TransferClaimsPage } from '@/types/api';

import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { ColumnsType, TableProps } from 'antd/es/table';
import { Space, Popconfirm, Button } from 'antd';

import { useGetTransferClaimsQuery } from '@/redux/services/api';

type ClaimTransferColumnsDataType = {
  id: AdminClaimTableItem['id'];
  claimStatus: AdminClaimTableItem['status'];
  sender: UserSelectionItem['name'];
  receiver: UserSelectionItem['name'];
  sum: AdminClaimTableItem['sum'];
};

const ClaimTransferColumns: ColumnsType<ClaimTransferColumnsDataType> = [
  {
    title: 'Отправитель',
    dataIndex: 'sender',
    key: 'sender',
    sorter: true,
  },
  {
    title: 'Получатель',
    dataIndex: 'receiver',
    key: 'receiver',
    sorter: true,
  },
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

// const mockData: ClaimTransferColumnsDataType[] = [
//   {
//     id: 12,
//     claimStatus: ClaimStatus.Approved,
//     learner: 'Иван Обучающийся',
//     receiver: 'Иван Получающий',
//     date: '123123',
//     sum: 5000,
//   },
//   {
//     id: 123123,
//     claimStatus: ClaimStatus.Waiting,
//     learner: 'Иван Обучающийся',
//     receiver: 'Иван Ожидающий',
//     date: '123123',
//     sum: 5000,
//   },
//   {
//     id: 1234,
//     claimStatus: ClaimStatus.Declined,
//     learner: 'Иван Обучающийся',
//     receiver: 'Иван Получающий',
//     date: '123123',
//     sum: 5000,
//   },
// ];

const mockData: TransferClaimsPage = {
  pagination: {
    total_pages: 1,
    total_elements: 1
  },
  claims: [{
    id: '1',
    sender: {
      id: '1',
      name: 'Иван',
      surname: 'Обучающийся',
      patronymic: null
    },
    receiver: {
      id: '2',
      name: 'Иван',
      surname: 'Получающий',
      patronymic: null
    },
    sum: 100
  }]
}

export function ClaimTransferTableWithFilter({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetTransferClaimsApiArg>({
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<ClaimTransferColumnsDataType[]>();
  const { data, isLoading, isError, isFetching } =
    useGetTransferClaimsQuery(dataForReq);

  useEffect(() => {
    const dataForTable: ClaimTransferColumnsDataType[] = mockData?.claims.map(
      (claim): ClaimTransferColumnsDataType => {
        const res: ClaimTransferColumnsDataType = {
          id: undefined,
          claimStatus: undefined,
          date: undefined,
          sender: claim.sender,
          receiver: claim.receiver,
          sum: claim.sum
        };
        return res;
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
        // totalNumber={data?.totalElems}
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
          onRow: onRow,
        }}
        formData={formData}
        setFormData={setFormData}
        setDataForReq={setDataForReq}
      />
    </>
  );
}

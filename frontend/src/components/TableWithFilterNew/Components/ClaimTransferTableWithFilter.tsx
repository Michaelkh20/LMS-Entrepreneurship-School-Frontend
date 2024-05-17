'use client';

import {
  ClaimStatusFormItem,
  DatePickerFormItem,
} from '@/components/Forms/FormItems/Filters';

import type { GetTransferClaimsApiArg, TransferClaimsPage } from '@/types/api';

import { useState, useMemo } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { ColumnsType, TableProps } from 'antd/es/table';
import { Space, Popconfirm, Button } from 'antd';

import { useGetTransferClaimsQuery } from '@/redux/services/api';
import { ClaimStatus } from '@/types/common';
import { useAuth } from '../../../redux/features/authSlice';
import { LearnerSelectionFormItem } from '@/components/Forms/FormItems/Selection/LearnerSelectionFormItem';
import { UserSnippet } from '@proto/users/users_api';

type ClaimTransferColumnsDataType = {
  id: string;
  claimStatus: ClaimStatus;
  sender: UserSnippet;
  receiver: UserSnippet;
  date: Date;
  sum: number;
};

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
    id: '1',
    sender: {
      id: '1',
      name: 'Сергей',
      surname: 'Никитин',
      patronymic: undefined,
    },
    receiver: {
      id: '2',
      name: 'Михаил',
      surname: 'Хооллгм',
      patronymic: undefined,
    },
    sum: 1000,
    date: new Date(2024, 3, 16),
    claimStatus: ClaimStatus.Approved,
  },
  {
    id: '2',
    sender: {
      id: '2',
      name: 'Михаил',
      surname: 'Хооллгм',
      patronymic: undefined,
    },
    receiver: {
      id: '2',
      name: 'Никита',
      surname: 'Жуйков',
      patronymic: undefined,
    },
    sum: 300,
    date: new Date(2024, 1, 9),
    claimStatus: ClaimStatus.Declined,
  },
  {
    id: '3',
    sender: {
      id: '2',
      name: 'Михаил',
      surname: 'Хооллгм',
      patronymic: undefined,
    },
    receiver: {
      id: '2',
      name: 'Михаил',
      surname: 'Лукашевич',
      patronymic: undefined,
    },
    sum: 500,
    date: new Date(2024, 3, 19),
    claimStatus: ClaimStatus.Waiting,
  },
];

export function ClaimTransferTableWithFilter({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetTransferClaimsApiArg>({
    page: 1,
    size: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const { data, isLoading, isError, isFetching } =
    useGetTransferClaimsQuery(dataForReq);

  const dataForTable = useMemo(() => {
    return data?.claims.map<ClaimTransferColumnsDataType>((claim) => {
      const res: ClaimTransferColumnsDataType = {
        id: claim.id,
        claimStatus: ClaimStatus.Waiting,
        sender: claim.sender,
        receiver: claim.receiver,
        sum: claim.sum,
      };
      return res;
    });
  }, [data]);

  const [, , { isAdmin }] = useAuth();

  // const [isAdminMock, setIsAdminMock] = useState(false);

  const ClaimTransferColumns: ColumnsType<ClaimTransferColumnsDataType> = [
    {
      title: 'Отправитель',
      dataIndex: 'sender',
      key: 'sender',
      sorter: true,
      render: (value, record, index) => {
        return <>{`${record.sender.surname} ${record.sender.name}`}</>;
      },
    },
    {
      title: 'Получатель',
      dataIndex: 'receiver',
      key: 'receiver',
      sorter: true,
      render: (value, record, index) => {
        return <>{`${record.receiver.surname} ${record.receiver.name}`}</>;
      },
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

    { title: 'Сумма', dataIndex: 'sum', key: 'sum' },

    //TODO: Проверить работает ли с изменением состояния isAdmin
    {
      hidden: !isAdmin,
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

  return (
    <>
      <BasicTableWithFilter
        totalNumber={data?.pagination.totalElements}
        filterFormItems={
          <>
            <LearnerSelectionFormItem
              placeholder={'Отправитель'}
              name={'learnerId'}
              type="filter"
            />
            <LearnerSelectionFormItem
              placeholder={'Получатель'}
              name={'receiverId'}
              type="filter"
            />
            <ClaimStatusFormItem />
            <DatePickerFormItem name={'dateFrom'} placeholder={'Дата от'} />
            <DatePickerFormItem name={'dateTo'} placeholder={'Дата до'} />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: ClaimTransferColumns,
          pagination: { total: data?.pagination?.totalElements },
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

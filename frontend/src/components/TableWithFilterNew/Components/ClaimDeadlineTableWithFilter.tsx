'use client';

import {
  ClaimStatusFormItem,
  UserSelectionFormItem,
  TaskSelectionFormItem,
} from '@/components/Forms/FormItems/Filters';
// import { accountsColumns } from '@/components/TableWithFilter/TableColumns';
// import { useGetClaimsQuery } from '@/redux/services/adminApi';
import type { GetClaimsApiArg } from '@/types/requests';
import type {
  AdminClaimTableItem,
  TaskSelectionItem,
  UserSelectionItem} from '@/types/responses';
import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { ClaimType, ClaimStatus, Delay } from '@/types/common';
import { ColumnsType } from 'antd/es/table';

type ClaimDeadlineColumnsDataType = {
  id: AdminClaimTableItem['id'];
  claimStatus: AdminClaimTableItem['status'];
  task: TaskSelectionItem['title'];
  date: AdminClaimTableItem['dateTime'];
  learner: UserSelectionItem['name'];
  sum?: AdminClaimTableItem['sum'];
  delay: Delay;
};

const ClaimDeadlineColumns: ColumnsType<ClaimDeadlineColumnsDataType> = [
  {
    title: 'Ученик',
    dataIndex: 'learner',
    key: 'learner',
    defaultSortOrder: 'ascend',
    sorter: true,
  },
  { title: 'Задание', dataIndex: 'task', key: 'task' },
  { title: 'Дата сдачи', dataIndex: 'date', key: 'date' },
  {
    title: 'Статус',
    dataIndex: 'claimStatus',
    key: 'claimStatus',
    render: (_, record: ClaimDeadlineColumnsDataType) => {
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
  { title: 'Просрочка', dataIndex: 'delay', key: 'delay' },
  { title: 'Штраф', dataIndex: 'sum', key: 'sum' },
];

const mockData: ClaimDeadlineColumnsDataType[] = [
  {
    id: 12,
    claimStatus: ClaimStatus.Approved,
    learner: 'Иван Обучающийся',
    delay: 3000,
    task: 'ДЗ_1',
    date: '123123',
    sum: 5000,
  },
];

export function ClaimDeadlineTableWithFilter() {
  const [formData, setFormData] = useState<GetClaimsApiArg>({
    claimType: ClaimType.FailedDeadline,
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] =
    useState<ClaimDeadlineColumnsDataType[]>(mockData);
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
              placeholder={'Ученик'}
              name={'learnerId'}
            />
            <TaskSelectionFormItem placeholder={'Задание'} name={'taskId'} />
            <ClaimStatusFormItem />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: ClaimDeadlineColumns,
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

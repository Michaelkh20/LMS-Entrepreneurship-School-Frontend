'use client';

import {
  ClaimStatusFormItem,
  UserSelectionFormItem,
  TaskSelectionFormItem,
} from '@/components/Forms/FormItems/Filters';
import type {
  FailedDeadlineClaimsPage,
  GetFailedDeadlineClaimsApiArg,
} from '@/types/api';

import { useState, useMemo } from 'react';

import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { ColumnsType, TableProps } from 'antd/es/table';

import { useGetFailedDeadlineClaimsQuery } from '@/redux/services/api';
import type { FailedDeadlineClaim } from '@/types/api';
import { ClaimStatus } from '@/types/common';

type ClaimDeadlineColumnsDataType = FailedDeadlineClaim;

const ClaimDeadlineColumns: ColumnsType<ClaimDeadlineColumnsDataType> = [
  {
    title: 'Ученик',
    dataIndex: 'learner',
    key: 'learner',
    sorter: true,
    render: (_value, record, _index) => {
      return `${record.learner.surname} ${record.learner.name}`;
    },
  },
  {
    title: 'Задание',
    dataIndex: 'assignment',
    key: 'assignment',
    render: (_value, record, _index) => {
      return `${record.assignment.title}`;
    },
  },
  { title: 'Дата сдачи', dataIndex: 'completeDate', key: 'completeDate' },
  {
    title: 'Статус',
    dataIndex: 'claimStatus',
    key: 'claimStatus',
    render: (_value, record, _index) => {
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
  { title: 'Просрочка', dataIndex: 'delay', key: 'delay' },
  // { title: 'Штраф', dataIndex: 'sum', key: 'sum' },
];

const mockData: FailedDeadlineClaimsPage = {
  pagination: {
    total_pages: 1,
    total_elements: 3,
  },
  claims: [
    {
      id: '1',
      status: ClaimStatus.Waiting,
      learner: {
        id: '1',
        name: 'asd',
        surname: 'asd',
        patronymic: null,
      },
      completeDate: '12/12/12',
      delay: 0,
      assignment: {
        id: 'tt',
        title: 'tt',
        deadline: '12.12.12',
      },
    },
  ],
};

export function ClaimDeadlineTableWithFilter({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetFailedDeadlineClaimsApiArg>({
    page: 1,
    size: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);

  const { data, isLoading, isError, isFetching } =
    useGetFailedDeadlineClaimsQuery(dataForReq);

  // const data = mockData;

  const dataForTable = useMemo(() => {
    return data?.claims.map<ClaimDeadlineColumnsDataType>((claim) => {
      const res: ClaimDeadlineColumnsDataType = {
        id: claim.id,
        status: claim.status,
        learner: claim.learner,
        completeDate: claim.completeDate,
        delay: claim.delay,
        assignment: claim.assignment,
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
            <UserSelectionFormItem placeholder={'Ученик'} name={'learnerId'} />
            <TaskSelectionFormItem placeholder={'Задание'} name={'taskId'} />
            <ClaimStatusFormItem />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: ClaimDeadlineColumns,
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

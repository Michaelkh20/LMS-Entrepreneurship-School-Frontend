'use client';

import {
  ClaimStatusFormItem,
  UserSelectionFormItem,
  TaskSelectionFormItem,
} from '@/components/Forms/FormItems/Filters';
// import { accountsColumns } from '@/components/TableWithFilter/TableColumns';
// import { useGetClaimsQuery } from '@/redux/services/adminApi';
import type {
  FailedDeadlineClaimsPage,
  GetFailedDeadlineClaimsApiArg,
  HwSnippetWithDeadline,
  UserSnippet,
} from '@/types/api';

import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';

import { ColumnsType, TableProps } from 'antd/es/table';

import { useGetFailedDeadlineClaimsQuery } from '@/redux/services/api';
import { ClaimStatus } from '@/types/common';
import dateToFormatString from '@/util/dateToFormatString';

type ClaimDeadlineColumnsDataType = {
  id: string;
  claimStatus: ClaimStatus;
  assignment: HwSnippetWithDeadline['title'];
  completeDate: string;
  learner: UserSnippet;
  // sum?: AdminClaimTableItem['sum'];
  delay: number;
};

const ClaimDeadlineColumns: ColumnsType<ClaimDeadlineColumnsDataType> = [
  {
    title: 'Ученик',
    dataIndex: 'learner',
    key: 'learner',
    sorter: true,
    render: (value, record, index) => {
        return `${record.learner.surname} ${record.learner.name}`
    },
  },
  { title: 'Задание', dataIndex: 'assignment', key: 'assignment' },
  { title: 'Дата сдачи', dataIndex: 'completeDate', key: 'completeDate' },
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
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<ClaimDeadlineColumnsDataType[]>();

  const { data, isLoading, isError, isFetching } =
    useGetFailedDeadlineClaimsQuery(dataForReq);

  useEffect(() => {
    const dataForTable: ClaimDeadlineColumnsDataType[] = mockData?.claims.map(
      (claim): ClaimDeadlineColumnsDataType => {
        const res: ClaimDeadlineColumnsDataType = {
          id: claim.id,
          claimStatus: claim.status,
          assignment: claim.assignment.title,
          completeDate: claim.completeDate,
          learner: claim.learner,
          delay: claim.delay,
        };
        return res;
      }
    );
    setDataTable(dataForTable);
  }, [mockData, data]);

  // useEffect(() => {
  //   console.log('FormData1:', formData);
  // }, [formData]);

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

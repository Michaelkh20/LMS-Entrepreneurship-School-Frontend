'use client';

import {
  ClaimStatusFormItem,
  UserSelectionFormItem,
  TaskSelectionFormItem,
  DatePickerFormItem,
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

type SubmissionsColumnsDataType = FailedDeadlineClaim;

const SubmissionsColumns: ColumnsType<SubmissionsColumnsDataType> = [
  {
    title: 'Кто сдал',
    dataIndex: 'learner',
    key: 'learner',
    sorter: true,
    render: (_value, record, _index) => {
      return `${record.learner.surname} ${record.learner.name}`;
    },
  },
  { title: 'Дата сдачи', dataIndex: 'completeDate', key: 'completeDate' },
  {
    title: 'Задание',
    dataIndex: 'assignment',
    key: 'assignment',
    render: (_value, record, _index) => {
      return `${record.assignment.title}`;
    },
  },
];

const mockData: FailedDeadlineClaimsPage = {};

export function SubmissionsTableWithFilter({
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
    return data?.claims.map<SubmissionsColumnsDataType>((claim) => {
      const res: SubmissionsColumnsDataType = {
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
            <UserSelectionFormItem
              placeholder={'Кто сдал'}
              name={'learnerId'}
            />
            <TaskSelectionFormItem placeholder={'Задание'} name={'taskId'} />
            <DatePickerFormItem name={'date'} placeholder={'Дата сдачи'} />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: SubmissionsColumns,
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

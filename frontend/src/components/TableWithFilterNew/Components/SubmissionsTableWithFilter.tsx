'use client';

import {
  UserSelectionFormItem,
  TaskSelectionFormItem,
} from '@/components/Forms/FormItems/Filters';

import { useState, useMemo } from 'react';

import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { ColumnsType, TableProps } from 'antd/es/table';
import type { GetSubmissionsApiArg } from '@/types/api';
import { useGetSubmissionsQuery } from '@/redux/services/api';
import type {
  GetSubmissions_Response,
  Submission,
} from '@proto/submissions/submissions_api';

type SubmissionsColumnsDataType = Submission;

const SubmissionsColumns: ColumnsType<SubmissionsColumnsDataType> = [
  {
    title: 'Кто сдал',
    dataIndex: 'learner',
    key: 'learner',
    sorter: true,
    render: (_value, record, _index) => {
      return `${record.owner?.surname} ${record.owner?.name}`;
    },
  },
  {
    title: 'Дата сдачи',
    dataIndex: 'completeDate',
    key: 'completeDate',
    render: (_value, record, _index) => {
      return `${record.publishedAt?.toLocaleDateString('ru-RU')}`;
    },
  },
  {
    title: 'Задание',
    dataIndex: 'assignment',
    key: 'assignment',
    render: (_value, record, _index) => {
      return `${record.homework?.title}`;
    },
  },
];

const mockData: GetSubmissions_Response = {
  page: undefined,
  submissions: [
    {
      id: '',
      homework: undefined,
      owner: undefined,
      publisher: undefined,
      team: undefined,
      publishedAt: undefined,
      payload: undefined,
    },
  ],
};

export function SubmissionsTableWithFilter({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetSubmissionsApiArg>({
    page: 1,
    size: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);

  const { data, isLoading, isError, isFetching } =
    useGetSubmissionsQuery(dataForReq);

  // const data = mockData;

  const dataForTable = useMemo(() => {
    return data?.submissions.map<SubmissionsColumnsDataType>((submission) => {
      const res: SubmissionsColumnsDataType = {
        id: submission.id,
        homework: submission.homework,
        owner: submission.owner,
        publisher: submission.publisher,
        team: submission.team,
        publishedAt: submission.publishedAt,
        payload: submission.payload,
      };
      return res;
    });
  }, [data]);

  return (
    <>
      <BasicTableWithFilter
        totalNumber={data?.page?.totalElements}
        filterFormItems={
          <>
            <UserSelectionFormItem placeholder={'Кто сдал'} name={'ownerId'} />
            <TaskSelectionFormItem
              placeholder={'Задание'}
              name={'assignmentId'}
            />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: SubmissionsColumns,
          pagination: { total: data?.page?.totalElements },
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

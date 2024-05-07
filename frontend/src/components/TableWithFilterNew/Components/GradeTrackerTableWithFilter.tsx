'use client';

import {
  UserSelectionFormItem,
  TaskSelectionFormItem,
  TaskTypeFormItem,
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

type GradeTrackerColumnsDataType = Submission;

const GradeTrackerColumns: ColumnsType<GradeTrackerColumnsDataType> = [
  {
    title: 'Задание',
    dataIndex: 'assignment',
    key: 'assignment',
    render: (_value, record, _index) => {
      return `${record.homework?.title}`;
    },
  },
  {
    title: 'Ученик',
    dataIndex: 'learner',
    key: 'learner',
    sorter: true,
    render: (_value, record, _index) => {
      return `${record.owner?.surname} ${record.owner?.name}`;
    },
  },
  {
    title: 'Статус',
    dataIndex: 'gradeStatus',
    key: 'gradeStatus',
    render: (_value, record, _index) => {
      return `${'todo' /* record.grades.some((gradeData) => gradeData.trackerId === currentId) ? 'Проверено' : 'Не проверено'*/}`;
    },
  },
  {
    title: 'Оценка',
    dataIndex: 'grade',
    key: 'grade',
    render: (_value, record, _index) => {
      return `${
        'todo' /* record.grades.find((gradeData) => gradeData.trackerId === currentId)).grade */
      }`;
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

export function GradeTrackerTableWithFilter({
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
    return data?.submissions.map<GradeTrackerColumnsDataType>((submission) => {
      const res: GradeTrackerColumnsDataType = {
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
            <TaskTypeFormItem name="taskType" />
            <UserSelectionFormItem placeholder={'Ученик'} name={'learnerId'} />
            {/* <>Оценено / не оценено</> */}
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: GradeTrackerColumns,
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

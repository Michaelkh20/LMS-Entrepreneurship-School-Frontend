'use client';

import {
  DatePickerFormItem,
  LessonNumberFormItem,
} from '@/components/Forms/FormItems/Filters';

import type { GetTestListApiArg } from '@/types/api';
import { useGetTestListQuery } from '@/redux/services/api';

import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';

import { ColumnsType, TableProps } from 'antd/es/table';
import { LessonTitleFormItem } from '@/components/Forms/FormItems/Filters/LessonTitleFormItem';
import { GetTests_Response } from '@proto/assignments/test_api';

type TestsColumnsDataType = {
  id: string;
  title: string;
  lesson: number | undefined;
  deadline: Date | undefined;
};

const TestsColumns: ColumnsType<TestsColumnsDataType> = [
  {
    title: 'Задание',
    dataIndex: 'title',
    key: 'title',
    sorter: true,
  },
  {
    title: 'Урок',
    dataIndex: 'lesson',
    key: 'lesson',
    render: (value, record, index) => {
      return <>{record.lesson ? record.lesson : '-'}</>;
    },
  },
  {
    title: 'Дедлайн',
    dataIndex: 'deadline',
    key: 'deadline',
    render: (value, record, index) => {
      return (
        <>
          {record.deadline &&
            `${record.deadline?.getDate()}.${record.deadline?.getMonth()}.${record.deadline?.getFullYear()}`}
          -
        </>
      );
    },
  },
];

const mockData: GetTests_Response = {
  page: undefined,
  tests: [
    {
      id: '1',
      // lesson: {
      //   id: '2',
      //   title: 'lesson 1',
      //   lessonNumber: 1,
      //   publishDate: undefined,
      // },\
      lesson: undefined,
      title: 'test',
      deadlineDate: undefined,
    },
  ],
};

export function TestsTableWithFilter({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetTestListApiArg>({
    page: 1,
    size: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<TestsColumnsDataType[]>();
  const { data, isLoading, isError, isFetching } =
    useGetTestListQuery(dataForReq);

  useEffect(() => {
    const dataForTable: TestsColumnsDataType[] | undefined = data?.tests.map(
      (test): TestsColumnsDataType => {
        const res: TestsColumnsDataType = {
          id: test.id,
          title: test.title,
          deadline: test.deadlineDate,
          lesson: test.lesson?.lessonNumber || undefined,
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
        totalNumber={data?.page?.totalElements}
        filterFormItems={
          <>
            <LessonNumberFormItem />
            <LessonTitleFormItem />
            <DatePickerFormItem
              name={'dateFrom'}
              placeholder={'Дата проведения'}
            />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: TestsColumns,
          pagination: { total: data?.page?.totalElements },
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

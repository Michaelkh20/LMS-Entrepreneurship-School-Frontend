'use client';

import {
  DatePickerFormItem,
  LessonNumberFormItem,
} from '@/components/Forms/FormItems/Filters';

import type { GetTestListApiArg } from '@/types/api';
import { useGetTestListQuery } from '@/redux/services/api';

import { useState, useEffect, useMemo } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';

import { ColumnsType, TableProps } from 'antd/es/table';
import { TitleFormItem } from '@/components/Forms/FormItems/Filters/TitleFormItem';
import type { LessonSnippet } from '@projTypes/proto';
import { Flex } from 'antd';
import { LessonSelectionFormItem } from '@/components/Forms/FormItems/Selection/LessonSelectionFormItem';

type TestsColumnsDataType = {
  id: string;
  title: string;
  lesson: LessonSnippet | undefined;
  deadline: Date | undefined;
};

const TestsColumns: ColumnsType<TestsColumnsDataType> = [
  {
    title: 'Название теста',
    dataIndex: 'title',
    key: 'title',
    sorter: true,
  },
  {
    title: 'Урок',
    dataIndex: 'lesson',
    key: 'lesson',
    render: (value, record, index) => {
      return (
        <>
          {record.lesson ? (
            <Flex justify="space-between">
              <div>{`Урок №${record.lesson.lessonNumber}, ${record.lesson.title}`}</div>
              <div>
                {record.lesson.publishDate?.toLocaleDateString('ru-RU') || '-'}
              </div>
            </Flex>
          ) : (
            '-'
          )}
        </>
      );
    },
  },
  {
    title: 'Дедлайн',
    dataIndex: 'deadline',
    key: 'deadline',
    render: (value, record, index) => {
      return (
        <>
          {record.deadline ? record.deadline.toLocaleDateString('ru-RU') : '-'}
        </>
      );
    },
  },
];

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
  const { data, isLoading, isError, isFetching } =
    useGetTestListQuery(dataForReq);

  const dataForTable = useMemo(() => {
    console.log(data?.tests);
    return data?.tests.map<TestsColumnsDataType>((test) => ({
      id: test.id,
      title: test.title,
      deadline: test.deadlineDate,
      lesson: test.lesson,
    }));
  }, [data]);

  useEffect(() => {
    console.log('FormData1:', formData);
  }, [formData]);

  return (
    <>
      <BasicTableWithFilter
        totalNumber={data?.page?.totalElements}
        filterFormItems={
          <>
            <TitleFormItem placeholder="Название теста" />
            <LessonSelectionFormItem type="filter" />
            <DatePickerFormItem
              name={'deadlineFrom'}
              placeholder={'Дедлайн от'}
            />
            <DatePickerFormItem
              name={'deadlineTo'}
              placeholder={'Дедлайн до'}
            />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: TestsColumns,
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

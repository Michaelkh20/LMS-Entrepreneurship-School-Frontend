'use client';

import {
  DatePickerFormItem,
  LessonNumberFormItem,
} from '@/components/Forms/FormItems/Filters';

import type { GetLessonsApiArg } from '@/types/api';

import { useState, useEffect, useMemo } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { ColumnsType, TableProps } from 'antd/es/table';
import { TitleFormItem } from '@/components/Forms/FormItems/Filters/TitleFormItem';

import { useGetLessonsQuery } from '@/redux/services/api';
import { GetLessons_Response } from '@proto/lessons/lessons_api';

type LessonsColumnsDataType = {
  id: string;
  lessonNumber: number;
  lessonTheme: string;
  date: Date | undefined;
};

const LessonsColumns: ColumnsType<LessonsColumnsDataType> = [
  {
    title: 'Урок',
    dataIndex: 'lessonNumber',
    key: 'lessonNumber',
    sorter: true,
  },
  { title: 'Тема', dataIndex: 'lessonTheme', key: 'lessonTheme' },
  {
    title: 'Дата проведения',
    dataIndex: 'date',
    key: 'date',
    render: (value, record, index) => {
      return <>{record.date ? record.date.toLocaleDateString('ru-RU') : '-'}</>;
    },
  },
];

const mockData: GetLessons_Response = {
  lessons: [
    {
      id: '1',
      title: 'asd',
      lessonNumber: 0,
      publishDate: undefined,
    },
  ],
  page: {
    totalElements: 1,
    totalPages: 1,
  },
};

export function LessonsTableWithFilter({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetLessonsApiArg>({
    page: 1,
    size: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const { data, isLoading, isError, isFetching } =
    useGetLessonsQuery(dataForReq);

  const dataForTable = useMemo(() => {
    return data?.lessons.map<LessonsColumnsDataType>((lesson) => ({
      id: lesson.id,
      lessonNumber: lesson.lessonNumber,
      lessonTheme: lesson.title,
      date: lesson.publishDate,
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
            <LessonNumberFormItem  />
            <TitleFormItem placeholder="Тема урока" />
            <DatePickerFormItem
              name={'publishDateFrom'}
              placeholder={'Дата проведения от'}
            />
            <DatePickerFormItem
              name={'publishDateTo'}
              placeholder={'Дата проведения до'}
            />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: LessonsColumns,
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

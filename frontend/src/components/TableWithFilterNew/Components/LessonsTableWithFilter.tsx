'use client';

import {
  ClaimStatusFormItem,
  UserSelectionFormItem,
  LotNumberFormItem,
  DatePickerFormItem,
  LessonNumberFormItem,
} from '@/components/Forms/FormItems/Filters';
// import { accountsColumns } from '@/components/TableWithFilter/TableColumns';
// import { useGetClaimsQuery } from '@/redux/services/adminApi';
import type { GetLessonsApiArg, LessonsPage } from '@/types/api';

import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { ColumnsType, TableProps } from 'antd/es/table';
import { LessonTitleFormItem } from '@/components/Forms/FormItems/Filters/LessonTitleFormItem';

import { useGetLessonsQuery } from '@/redux/services/api';

type LessonsColumnsDataType = {
  id: string;
  lessonNumber: number;
  lessonTheme: string;
  date: string;
};

const LessonsColumns: ColumnsType<LessonsColumnsDataType> = [
  {
    title: 'Урок',
    dataIndex: 'lessonNumber',
    key: 'lessonNumber',
    sorter: true,
  },
  { title: 'Тема', dataIndex: 'lessonTheme', key: 'lessonTheme' },
  { title: 'Дата проведения', dataIndex: 'date', key: 'date' },
];

const mockData: LessonsPage = {
  pagination: {
    total_pages: 0,
    total_elements: 0,
  },
  lessons: [
    {
      id: '1',
      number: 1,
      theme: 'Тема_1',
      date: '01.01.2001',
    },
  ],
};

export function LessonsTableWithFilter({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetLessonsApiArg>({
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<LessonsColumnsDataType[]>();
  const { data, isLoading, isError, isFetching } =
    useGetLessonsQuery(dataForReq);

  useEffect(() => {
    const dataForTable: LessonsColumnsDataType[] = mockData?.lessons.map(
      (lesson): LessonsColumnsDataType => {
        const res: LessonsColumnsDataType = {
          id: lesson.id,
          lessonNumber: lesson.number,
          lessonTheme: lesson.theme,
          date: lesson.date,
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
        // totalNumber={data?.totalElems}
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
          columns: LessonsColumns,
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

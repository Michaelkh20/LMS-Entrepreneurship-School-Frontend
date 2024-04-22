'use client';

import {
  DatePickerFormItem,
  LessonNumberFormItem,
} from '@/components/Forms/FormItems/Filters';
import type { GetExamListApiArg } from '@/types/api';
import { useGetExamListQuery } from '@/redux/services/api';

import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';

import { ColumnsType, TableProps } from 'antd/es/table';
import { LessonTitleFormItem } from '@/components/Forms/FormItems/Filters/LessonTitleFormItem';
import { GetExams_Response } from '@proto/assignments/exam_api';

//GetExams_Response

type ExamsColumnsDataType = {
  id: string;
  title: string;
  deadlineDate: Date | undefined;
};

const ExamsColumns: ColumnsType<ExamsColumnsDataType> = [
  {
    title: 'Задание',
    dataIndex: 'title',
    key: 'title',
    sorter: true,
  },
  {
    title: 'Дедлайн',
    dataIndex: 'deadlineDate',
    key: 'deadlineDate',
    render: (value, record, index) => {
      return (
        <>
          {record.deadlineDate &&
            `${record.deadlineDate?.getDate()}.${record.deadlineDate?.getMonth()}.${record.deadlineDate?.getFullYear()}`}
          -
        </>
      );
    },
  },
];

const mockData: GetExams_Response = {
  page: undefined,
  exams: [
    {
      id: 'ex1',
      title: 'exam',
      deadlineDate: undefined,
    },
  ],
};

export function ExamsTableWithFilter({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetExamListApiArg>({
    page: 1,
    size: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<ExamsColumnsDataType[]>();
  const { data, isLoading, isError, isFetching } =
    useGetExamListQuery(dataForReq);

  useEffect(() => {
    const dataForTable: ExamsColumnsDataType[] = mockData?.exams.map(
      (exam): ExamsColumnsDataType => {
        const res: ExamsColumnsDataType = {
          id: exam.id,
          title: exam.title,
          deadlineDate: exam.deadlineDate,
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
          columns: ExamsColumns,
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

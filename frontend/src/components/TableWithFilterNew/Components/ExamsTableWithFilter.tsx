'use client';

import {
  DatePickerFormItem,
  LessonNumberFormItem,
} from '@/components/Forms/FormItems/Filters';
import type { GetExamListApiArg } from '@/types/api';
import { useGetExamListQuery } from '@/redux/services/api';

import { useState, useEffect, useMemo } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';

import { ColumnsType, TableProps } from 'antd/es/table';
import { LessonTitleFormItem } from '@/components/Forms/FormItems/Filters/LessonTitleFormItem';

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
          {record.deadlineDate
            ? record.deadlineDate.toLocaleDateString('ru-RU')
            : '-'}
        </>
      );
    },
  },
];

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
  const { data, isLoading, isError, isFetching } =
    useGetExamListQuery(dataForReq);

  const dataForTable = useMemo(() => {
    return data?.exams.map<ExamsColumnsDataType>((exam) => ({
      id: exam.id,
      title: exam.title,
      deadlineDate: exam.deadlineDate,
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

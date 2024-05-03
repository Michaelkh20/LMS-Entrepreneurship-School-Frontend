'use client';

//TODO: Hooks

//TODO: route to next page by row

import {
  DatePickerFormItem,
  LessonNumberFormItem,
} from '@/components/Forms/FormItems/Filters';
// import { accountsColumns } from '@/components/TableWithFilter/TableColumns';
// import { useGetClaimsQuery } from '@/redux/services/adminApi';
import type { GetLessonsApiArg } from '@/types/requests';
import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { Id, Date } from '@/types/common';
import { ColumnsType, TableProps } from 'antd/es/table';
import { LessonTitleFormItem } from '@/components/Forms/FormItems/Filters/TitleFormItem';

import { useRouter } from 'next/navigation';

type AttendanceLessonsColumnsDataType = {
  id: Id;
  lessonNumber: string;
  lessonTheme: string;
  date: Date;
};

const AttendanceLessonsColumns: ColumnsType<AttendanceLessonsColumnsDataType> =
  [
    {
      title: 'Урок',
      dataIndex: 'lessonNumber',
      key: 'lessonNumber',
      sorter: true,
    },
    { title: 'Тема', dataIndex: 'lessonTheme', key: 'lessonTheme' },
    { title: 'Дата проведения', dataIndex: 'date', key: 'date' },
  ];

const mockData: AttendanceLessonsColumnsDataType[] = [
  {
    id: 1,
    lessonNumber: 'Ур_1',
    lessonTheme: 'Тема_1',
    date: '01.01.2001',
  },
  {
    id: 2,
    lessonNumber: 'Ур_2',
    lessonTheme: 'Тема_2',
    date: '01.01.2001',
  },
  {
    id: 3,
    lessonNumber: 'Ур_3',
    lessonTheme: 'Тема_3',
    date: '01.01.2001',
  },
];

export function AttendanceLessonsTableWithFilter({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const router = useRouter();

  const [formData, setFormData] = useState<GetLessonsApiArg>({
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] =
    useState<AttendanceLessonsColumnsDataType[]>(mockData);
  // const { data, isLoading, isError, isFetching } =
  //   useGetClaimsQuery(dataForReq);

  useEffect(() => {
    console.log('FormData1:', formData);
  }, [formData]);

  return (
    <>
      <BasicTableWithFilter
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
          columns: AttendanceLessonsColumns,
          // pagination: { total: data?.pagination?.totalElements },
          dataSource: dataTable,
          rowKey: 'id',
          onRow:
            onRow ||
            function (record, rowIndex) {
              return {
                onClick: (ev) => {
                  console.log(record);
                  router.push(`/admin/attendance/${record.id}`);
                },
              };
            },
        }}
        formData={formData}
        setFormData={setFormData}
        setDataForReq={setDataForReq}
      />
    </>
  );
}

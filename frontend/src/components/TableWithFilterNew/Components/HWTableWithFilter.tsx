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
import type { GetHwListApiArg, LessonTableSnippet } from '@/types/api';
import { useGetHwListQuery } from '@/redux/services/api';

import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';

import { ColumnsType, TableProps } from 'antd/es/table';
import { LessonTitleFormItem } from '@/components/Forms/FormItems/Filters/LessonTitleFormItem';
import { GetHomeworks_Response } from '@proto/assignments/homework_api';

//GetHomeworks_Response

type HWColumnsDataType = {
  id: string;
  title: string;
  lesson: LessonTableSnippet['number'] | undefined;
  deadline: Date | undefined;
};

const HWColumns: ColumnsType<HWColumnsDataType> = [
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

const mockData: GetHomeworks_Response = {
  page: undefined,
  homeworks: [
    {
      id: '1',
      // lesson: {
      //   id: '2',
      //   title: 'lesson 1',
      //   lessonNumber: 1,
      //   publishDate: undefined,
      // },\
      lesson: undefined,
      title: 'HW',
      deadlineDate: undefined,
    },
  ],
};
// const mockData: TasksColumnsDataType[] = [
//   {
//     id: 1,
//     taskTitle: 'ДЗ_1',
//     lessonNumber: 'Ур_1',
//     taskType: TaskType.HW,
//     deadline: '01.01.2001',
//   },
//   {
//     id: 2,
//     taskTitle: 'ДЗ_2',
//     lessonNumber: 'Ур_2',
//     taskType: TaskType.HW,
//     deadline: '01.01.2001',
//   },
//   {
//     id: 3,
//     taskTitle: 'ДЗ_3',
//     lessonNumber: 'Ур_3',
//     taskType: TaskType.HW,
//     deadline: '01.01.2001',
//   },
// ];

export function HWTableWithFilter({ onRow }: { onRow?: TableProps['onRow'] }) {
  const [formData, setFormData] = useState<GetHwListApiArg>({
    page: 1,
    size: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<HWColumnsDataType[]>();
  const { data, isLoading, isError, isFetching } =
    useGetHwListQuery(dataForReq);

  useEffect(() => {
    const dataForTable: HWColumnsDataType[] | undefined = data?.homeworks.map(
      (hw): HWColumnsDataType => {
        const res: HWColumnsDataType = {
          id: hw.id,
          title: hw.title,
          deadline: hw.deadlineDate,
          lesson: hw.lesson?.lessonNumber,
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
          columns: HWColumns,
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

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
import type { GetTasksApiArg } from '@/types/requests';
import type {
  AdminClaimTableItem,
  LessonSelectionItem,
  LotSelectionItem,
  TaskSelectionItem,
  UserSelectionItem,
} from '@/types/responses';
import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import {
  ClaimType,
  ClaimStatus,
  Delay,
  Id,
  Date,
  TaskType,
  DateTime,
} from '@/types/common';
import { ColumnsType } from 'antd/es/table';
import { LessonTitleFormItem } from '@/components/Forms/FormItems/Filters/LessonTitleFormItem';

type TasksColumnsDataType = {
  id: Id;
  taskTitle: string;
  taskType: TaskType;
  lessonNumber: LessonSelectionItem['number'] | string;
  deadline: DateTime;
};

const TasksColumns: ColumnsType<TasksColumnsDataType> = [
  {
    title: 'Задание',
    dataIndex: 'taskTitle',
    key: 'taskTitle',
    defaultSortOrder: 'ascend',
    sorter: true,
  },
  { title: 'Тип', dataIndex: 'taskType', key: 'taskType' },
  { title: 'Урок', dataIndex: 'lessonNumber', key: 'lessonNumber' },
  { title: 'Дедлайн', dataIndex: 'deadline', key: 'deadline' },
];

const mockData: TasksColumnsDataType[] = [
  {
    id: 1,
    taskTitle: 'ДЗ_1',
    lessonNumber: 'Ур_1',
    taskType: TaskType.HW,
    deadline: '01.01.2001',
  },
  {
    id: 2,
    taskTitle: 'ДЗ_2',
    lessonNumber: 'Ур_2',
    taskType: TaskType.HW,
    deadline: '01.01.2001',
  },
  {
    id: 3,
    taskTitle: 'ДЗ_3',
    lessonNumber: 'Ур_3',
    taskType: TaskType.HW,
    deadline: '01.01.2001',
  },
];

export function TasksTableWithFilter({ taskType }: { taskType?: TaskType }) {
  const [formData, setFormData] = useState<GetTasksApiArg>({
    taskType: taskType,
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<TasksColumnsDataType[]>(mockData);
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
          columns: TasksColumns,
          // pagination: { total: data?.pagination?.totalElements },
          dataSource: dataTable,
          rowKey: 'id',
        }}
        formData={formData}
        setFormData={setFormData}
        setDataForReq={setDataForReq}
      />
    </>
  );
}

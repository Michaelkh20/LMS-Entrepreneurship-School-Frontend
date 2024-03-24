'use client';

import {
  LessonSelectionFormItem,
  TaskTypeFormItem,
  DatePickerFormItem,
} from '@/components/Forms/FormItems/Filters';
import { accountsColumns } from '@/components/TableWithFilter/TableColumns';
// import { useGetTasksQuery } from '@/redux/services/adminApi';
import type { GetTasksApiArg } from '@/types/requests';
import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { Id, TaskType, DateTime } from '@/types/common';
import { ColumnsType } from 'antd/es/table';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

type AssessmentAllTasksTableItem = {
  id: Id;
  taskTitle: string;
  lesson: string;
  taskType: TaskType;
  deadline: DateTime;
};

//TODO: по клику на строку таблицы переходить на следующую страницу оценивания по конкретному заданию,
//      useRouter не получилось заюзать пока что (ошибка router not mounted)

const AssessmentAllTasksColumns: ColumnsType<AssessmentAllTasksTableItem> = [
  {
    title: 'Задание',
    dataIndex: 'taskTitle',
    key: 'taskTitle',
    sorter: true,
  },
  { title: 'Урок', dataIndex: 'lesson', key: 'lesson' },
  { title: 'Тип', dataIndex: 'taskType', key: 'taskType' },
  { title: 'Дедлайн', dataIndex: 'deadline', key: 'deadline' },
];

const mockData: AssessmentAllTasksTableItem[] = [
  {
    id: 1,
    taskTitle: 'ДЗ_1',
    lesson: 'Урок_1',
    taskType: TaskType.HW,
    deadline: '23.11.2024',
  },
  {
    id: 2,
    taskTitle: 'ДЗ_2',
    lesson: 'Урок_2',
    taskType: TaskType.HW,
    deadline: '23.11.2024',
  },
  {
    id: 3,
    taskTitle: 'ДЗ_3',
    lesson: 'Урок_3',
    taskType: TaskType.HW,
    deadline: '23.11.2024',
  },
];

export function AssessmentAllTasksTableWithFilter({
  taskType,
}: {
  taskType?: TaskType;
}) {
  const router = useRouter();

  const [formData, setFormData] = useState<GetTasksApiArg>({
    taskType: taskType,
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<AssessmentAllTasksTableItem[]>(
    mockData || []
  );
  // const { data, isLoading, isError, isFetching } = useGetTasksQuery(dataForReq);

  useEffect(() => {
    console.log('dataForReq:', dataForReq);
  }, [dataForReq]);

  // const router = useRouter()

  return (
    <>
      <BasicTableWithFilter
        // totalNumber={data?.totalElems}
        filterFormItems={
          <>
            <LessonSelectionFormItem
              placeholder={'Урок'}
              name={'lesson'}
              width={150}
            />
            <TaskTypeFormItem />
            <DatePickerFormItem name={'dateFrom'} placeholder={'Дедлайн от'} />
            <DatePickerFormItem name={'dateTo'} placeholder={'Дедлайн до'} />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: AssessmentAllTasksColumns,
          // pagination: { total: data?.pagination?.totalElements },
          dataSource: dataTable,
          rowKey: 'id',
          onRow: (record, rowIndex) => {
            return {
              onClick: (ev) => {
                router.push(`/admin/assessments/${record.id}`);
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

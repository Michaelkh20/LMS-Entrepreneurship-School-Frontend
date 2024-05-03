'use client';

import { DatePickerFormItem } from '@/components/Forms/FormItems/Filters';
import type { GetHwListApiArg } from '@/types/api';
import { useGetHwListQuery } from '@/redux/services/api';

import { useState, useEffect, useMemo } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';

import { ColumnsType, TableProps } from 'antd/es/table';
import { LessonSnippet } from '@types/proto';
import { Flex } from 'antd';
import { TitleFormItem } from '@/components/Forms/FormItems/Filters/TitleFormItem';
import { LessonSelectionFormItem } from '@/components/Forms/FormItems/EntityForms/LessonSelectionFormItem';

//GetHomeworks_Response

type HWColumnsDataType = {
  id: string;
  title: string;
  lesson: LessonSnippet | undefined;
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

export function HWTableWithFilter({ onRow }: { onRow?: TableProps['onRow'] }) {
  const [formData, setFormData] = useState<GetHwListApiArg>({
    page: 1,
    size: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const { data, isLoading, isError, isFetching } =
    useGetHwListQuery(dataForReq);

  const dataForTable = useMemo(() => {
    return data?.homeworks.map<HWColumnsDataType>((hw) => ({
      id: hw.id,
      title: hw.title,
      deadline: hw.deadlineDate,
      lesson: hw.lesson,
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
            <TitleFormItem placeholder="Название ДЗ" />
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
          columns: HWColumns,
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

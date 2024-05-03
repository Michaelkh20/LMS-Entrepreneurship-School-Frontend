'use client';

import {
  DatePickerFormItem,
  LessonNumberFormItem,
} from '@/components/Forms/FormItems/Filters';
import type { GetCompetitionListApiArg } from '@/types/api';
import { useGetCompetitionListQuery } from '@/redux/services/api';

import { useState, useEffect, useMemo } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';

import { ColumnsType, TableProps } from 'antd/es/table';
import { LessonTitleFormItem } from '@/components/Forms/FormItems/Filters/LessonTitleFormItem';

type CompetitionsColumnsDataType = {
  id: string;
  title: string;
  deadlineDate: Date | undefined;
};

const CompetitionsColumns: ColumnsType<CompetitionsColumnsDataType> = [
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

export function CompetitionsTableWithFilter({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetCompetitionListApiArg>({
    page: 1,
    size: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const { data, isLoading, isError, isFetching } =
    useGetCompetitionListQuery(dataForReq);

  const dataForTable = useMemo(() => {
    return data?.competitions.map<CompetitionsColumnsDataType>(
      (competition) => ({
        id: competition.id,
        title: competition.title,
        deadlineDate: competition.deadlineDate,
      })
    );
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
          columns: CompetitionsColumns,
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

'use client';

import {
  DatePickerFormItem,
  LessonNumberFormItem,
} from '@/components/Forms/FormItems/Filters';
import type { GetCompetitionListApiArg } from '@/types/api';
import { useGetCompetitionListQuery } from '@/redux/services/api';

import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';

import { ColumnsType, TableProps } from 'antd/es/table';
import { LessonTitleFormItem } from '@/components/Forms/FormItems/Filters/LessonTitleFormItem';
import { GetCompetitions_Response } from '@proto/assignments/competition_api';

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
          {record.deadlineDate &&
            `${record.deadlineDate?.getDate()}.${record.deadlineDate?.getMonth()}.${record.deadlineDate?.getFullYear()}`}
          -
        </>
      );
    },
  },
];

const mockData: GetCompetitions_Response = {
  page: undefined,
  competitions: [
    {
      id: '1',
      title: 'comp_1',
      deadlineDate: undefined,
    },
  ],
};

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
  const [dataTable, setDataTable] = useState<CompetitionsColumnsDataType[]>();
  const { data, isLoading, isError, isFetching } =
    useGetCompetitionListQuery(dataForReq);

  useEffect(() => {
    const dataForTable: CompetitionsColumnsDataType[] | undefined =
      data?.competitions.map((competition): CompetitionsColumnsDataType => {
        const res: CompetitionsColumnsDataType = {
          id: competition.id,
          title: competition.title,
          deadlineDate: competition.deadlineDate,
        };
        return res;
      });
    setDataTable(dataForTable);
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

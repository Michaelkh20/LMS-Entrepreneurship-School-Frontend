'use client';

// TODO: themeSelectionFormItem

import { TeamNumberFormItem } from '@/components/Forms/FormItems/Filters';
import { useGetTeamsQuery } from '@/redux/services/adminApi';
import type { GetTeamsApiArg } from '@/types/requests';
import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import type { ColumnsType } from 'antd/es/table';
import { Id } from '@/types/common';

type TeamsColumnsDataType = {
  id: Id;
  teamNumber: number;
  theme: string;
};

const TeamsColumns: ColumnsType<TeamsColumnsDataType> = [
  {
    title: '№ Команды',
    dataIndex: 'teamNumber',
    key: 'teamNumber',
    defaultSortOrder: 'ascend',
    sorter: true,
    width: 200,
    render(value, record, index) {
      return (
        <div>№ {value}</div>
      )
    },
  },
  { title: 'Тема', dataIndex: 'theme', key: 'theme' },
];

const mockData: TeamsColumnsDataType[] = [
  {
    id: 1,
    teamNumber: 1,
    theme: "Выпечка"
  },
  {
    id: 2,
    teamNumber: 2,
    theme: "Булочки"
  },
  {
    id: 3,
    teamNumber: 3,
    theme: "Чаёчек"
  }
]

export function TeamTableWithFilter() {
  const [formData, setFormData] = useState<GetTeamsApiArg>({
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<TeamsColumnsDataType[]>(mockData || []);
  const { data, isLoading, isError, isFetching } = useGetTeamsQuery(dataForReq);

  //   useEffect(() => {
  //     console.log('FormData1:', formData);
  //   }, [formData]);

  return (
    <>
      <BasicTableWithFilter
        filterFormItems={
          <>
            <TeamNumberFormItem />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: TeamsColumns,
          pagination: { total: data?.pagination?.totalElements },
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

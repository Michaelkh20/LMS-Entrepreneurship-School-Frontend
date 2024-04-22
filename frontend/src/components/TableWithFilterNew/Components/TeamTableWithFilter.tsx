'use client';

// TODO: themeSelectionFormItem

import { TeamNumberFormItem } from '@/components/Forms/FormItems/Filters';
// import { useGetTeamsQuery } from '@/redux/services/adminApi';
import type { GetTeamsApiArg, TeamsPage } from '@/types/api';
import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import type { ColumnsType, TableProps } from 'antd/es/table';

import { useGetTeamsQuery } from '@/redux/services/api';
import { useRouter } from 'next/navigation';

type TeamsColumnsDataType = {
  teamId: string;
  teamNumber: number;
  theme: string;
};

const TeamsColumns: ColumnsType<TeamsColumnsDataType> = [
  {
    title: '№ Команды',
    dataIndex: 'teamNumber',
    key: 'teamNumber',
    sorter: true,
    width: 200,
    render(value, record, index) {
      return <div>№ {value}</div>;
    },
  },
  { title: 'Тема', dataIndex: 'theme', key: 'theme' },
];

const mockData: TeamsPage = {
  pagination: {
    total_pages: 1,
    total_elements: 3,
  },
  teams: [
    {
      id: '1',
      number: 1,
      project_theme: 'чаёчек',
    },
    {
      id: '2',
      number: 2,
      project_theme: 'выпечка',
    },
  ],
};

export function TeamTableWithFilter({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetTeamsApiArg>({
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<TeamsColumnsDataType[]>();

  const router = useRouter();
  const { data, isLoading, isError, isFetching } = useGetTeamsQuery(dataForReq);

  useEffect(() => {
    const dataForTable: TeamsColumnsDataType[] = mockData?.teams.map(
      (team): TeamsColumnsDataType => {
        const res: TeamsColumnsDataType = {
          teamId: team.id,
          teamNumber: team.number,
          theme: team.project_theme,
        };
        return res;
      }
    );
    setDataTable(dataForTable);
  }, [mockData, data]);

  //   useEffect(() => {
  //     console.log('FormData1:', formData);
  //   }, [formData]);

  return (
    <>
      <BasicTableWithFilter
        // totalNumber={data?.totalElems}
        filterFormItems={
          <>
            <TeamNumberFormItem />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: TeamsColumns,
          // pagination: { total: data?.pagination?.totalElements },
          dataSource: dataTable,
          rowKey: 'teamId',
          onRow:
            onRow ||
            function (record, rowIndex) {
              return {
                onClick: (event) => {
                  router.push(`/admin/teams/${record.teamId}`);
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

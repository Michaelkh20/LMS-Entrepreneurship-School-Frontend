'use client';

// TODO: themeSelectionFormItem

import { TeamNumberFormItem } from '@/components/Forms/FormItems/Filters';
import type { GetTeamsApiArg } from '@/types/api';
import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import type { ColumnsType, TableProps } from 'antd/es/table';

import { useGetTeamsQuery } from '@/redux/services/api';
import { useRouter } from 'next/navigation';
import { GetTeams_Response } from '@proto/teams/teams_api';

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

const mockData: GetTeams_Response = {
  teams: [
    {
      id: '1',
      number: 2,
      projectTheme: 'чаёчек',
      description: 'чаёчек_дескрипшн',
    },
    {
      id: '2',
      number: 3,
      projectTheme: 'кофеёчек',
      description: 'кофеёчек_дескрипшн',
    },
  ],
  page: {
    totalElements: 2,
    totalPages: 1,
  },
};

export function TeamTableWithFilter({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetTeamsApiArg>({
    page: 1,
    size: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<TeamsColumnsDataType[]>();

  const router = useRouter();
  const { data, isLoading, isError, isFetching } = useGetTeamsQuery(dataForReq);

  useEffect(() => {
    const dataForTable: TeamsColumnsDataType[] | undefined = data?.teams.map(
      (team): TeamsColumnsDataType => {
        const res: TeamsColumnsDataType = {
          teamId: team.id,
          teamNumber: team.number,
          theme: team.projectTheme,
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
        totalNumber={data?.page?.totalElements}
        filterFormItems={
          <>
            <TeamNumberFormItem />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: TeamsColumns,
          pagination: { total: data?.page?.totalElements },
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

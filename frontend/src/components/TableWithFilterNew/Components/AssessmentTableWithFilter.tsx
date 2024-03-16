'use client';

import {
  NameFormItem,
  EmailFormItem,
  TeamNumberFormItem
} from '@/components/Forms/FormItems/Filters';
import { accountsColumns } from '@/components/TableWithFilter/TableColumns';
import { useGetAssessmentsQuery } from '@/redux/services/adminApi';
import { GetAssessmentsApiArg } from '@/types/requests';
import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { Name, Email, TeamNumber, Role, Balance, Id } from '@/types/common';
import { ColumnsType } from 'antd/es/table';


type AssessmentColumnsDataType = {
    id: Id;
    name: Name;
    email: Email;
    team: TeamNumber[];
    role: Role;
    balance: Balance
  }
  
const AssessmentColumns: ColumnsType<AssessmentColumnsDataType> = [
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
        defaultSortOrder: "ascend",
        sorter: true
    },
    {title: 'Email', dataIndex: 'email', key: 'email'},
    {title: 'Команда', dataIndex: 'team', key: 'team'},
    {title: 'Роль', dataIndex: 'role', key: 'role'},
    {title: 'Баланс', dataIndex: 'balance', key: 'balance'}
  ]



export function AssessmentTableWithFilter() {
  const [formData, setFormData] = useState<GetAssessmentsApiArg>({
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<(typeof accountsColumns)[]>([]);
  const { data, isLoading, isError, isFetching } = useGetAssessmentsQuery(dataForReq);

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
          columns: accountsColumns,
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

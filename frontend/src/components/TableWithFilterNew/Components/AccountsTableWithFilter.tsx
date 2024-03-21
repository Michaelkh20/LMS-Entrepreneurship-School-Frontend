'use client'

import {
  NameFormItem,
  TeamNumberFormItem,
  RoleFormItem
} from '@/components/Forms/FormItems/Filters';
// import { accountsColumns } from '@/components/TableWithFilter/TableColumns';
// import { useGetAccountsQuery } from '@/redux/services/adminApi';
import { GetAccountsApiArg } from '@/types/requests';
import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { Name, Email, TeamNumber, Role, Balance, Id } from '@/types/common';
import { ColumnsType } from 'antd/es/table';




type AccountColumnsDataType = {
  id: Id;
  name: Name;
  email: Email;
  team: TeamNumber[];
  role: Role;
  balance: Balance
}

const AccountsColumns: ColumnsType<AccountColumnsDataType> = [
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

const mockData = [
  {
    id: 12,
    name: 'ivan',
    email: 'ivan',
    team: [1],
    role: Role.Learner,
    balance: 100,
  },
  {
    id: 122,
    name: 'ivan',
    email: 'ivan',
    team: [2],
    role: Role.Learner,
    balance: 10000,
  },
  {
    id: 1221,
    name: 'ivan',
    email: 'ivan',
    team: [2, 2],
    role: Role.Tracker,
    balance: 10000,
  },
]


export function AccountsTableWithFilter() {
  const [formData, setFormData] = useState<GetAccountsApiArg>({
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<AccountColumnsDataType[]>(mockData);
  // const { data, isLoading, isError, isFetching } =
  //   useGetAccountsQuery(dataForReq);

  useEffect(() => {
    console.log('FormData1:', formData);
  }, [formData]);

  return (
    <>
      <BasicTableWithFilter
        filterFormItems={
          <>
            <NameFormItem />
            <TeamNumberFormItem />
            <RoleFormItem />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: AccountsColumns,
          // pagination: { total: data?.pagination?.totalElements },
          dataSource: dataTable,
          rowKey: "id"
        }}
        formData={formData}
        setFormData={setFormData}
        setDataForReq={setDataForReq}
      />
    </>
  );
}




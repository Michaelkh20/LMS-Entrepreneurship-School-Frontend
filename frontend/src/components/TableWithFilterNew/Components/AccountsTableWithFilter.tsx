'use client';

import {
  NameFormItem,
  TeamNumberFormItem,
  RoleFormItem,
} from '@/components/Forms/FormItems/Filters';
import { GetAccountsApiArg, TeamSnippet, UsersPage } from '@/types/api';
import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
// import { Name, Email, TeamNumber, Balance, Id } from '';
import { ColumnsType } from 'antd/es/table';
// import { useGetAccountsListQuery } from '@/redux/services/adminApi';
import { useGetAccountsQuery } from '@/redux/services/api';
// import Role = dto.Role;
import { Role, Sex } from '@/types/common';
import { useRouter } from 'next/navigation';
import { TableProps } from 'antd/lib';

type AccountColumnsDataType = {
  id: string;
  name: string;
  email: string;
  teams: TeamSnippet[];
  role: Role;
  balance: string;
};

const mockData: UsersPage = {
  pagination: {
    total_pages: 0,
    total_elements: 0,
  },
  users: [
    {
      id: '1',
      name: 'ivan',
      surname: 'ivan',
      patronymic: null,
      email: 'ivan',
      phone_number: null,
      messenger: null,
      teams: [],
      sex: Sex.MALE,
      role: Role.STUDENT,
      balance: '1',
    },
    {
      id: '2',
      name: 'ivan',
      surname: 'ivanov',
      patronymic: null,
      email: 'ivan',
      phone_number: null,
      messenger: null,
      teams: [
        {
          id: '1',
          number: 1,
        },
        {
          id: '2',
          number: 2,
        },
      ],
      sex: Sex.MALE,
      role: Role.STUDENT,
      balance: '1',
    },
  ],
};

const AccountsColumns: ColumnsType<AccountColumnsDataType> = [
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
  },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  {
    title: 'Команда',
    dataIndex: 'team',
    key: 'team',
    render(value, record, index) {
      return record.teams.map((team) => `№${team.number} `) || '-';
    },
  },
  { title: 'Роль', dataIndex: 'role', key: 'role', render(value, record, index) {
      return (
        <>
        {record.role === Role.ADMIN && (<p>Администратор</p>)}
        {record.role === Role.STUDENT && (<p>Ученик</p>)}
        {record.role === Role.TRACKER && (<p>Трекер</p>)}
        {record.role === Role.NOT_INITIALISED && (<p>-</p>)}
        </>
      )
  }, },
  { title: 'Баланс', dataIndex: 'balance', key: 'balance' },
];

export function AccountsTableWithFilter({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetAccountsApiArg>({
    page: 1,
    pageSize: 10,
  });

  const router = useRouter();

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<AccountColumnsDataType[]>();
  const { data } = useGetAccountsQuery(dataForReq);

  console.log(data);

  // const dataForTable = data?.users.map((user) => {
  //   return {
  //     id: user.id,
  //     name: `${user.surname} ${user.name}`,
  //     email: user.email,
  //     team: user.teams,
  //     // role: roleToString(user.role),
  //     role: user.role,
  //     balance: user.balance,
  //   };
  // });

  useEffect(() => {
    const dataForTable: AccountColumnsDataType[] = mockData?.users.map(
      (user) => {
        return {
          id: user.id,
          name: `${user.surname} ${user.name}`,
          email: user.email,
          teams: user.teams,
          role: user.role,
          balance: user.balance,
        };
      }
    );
    setDataTable(dataForTable);
  }, [mockData, data]);

  // useEffect(() => {
  //   console.log('FormData1:', dataForReq);
  // }, [dataForReq]);

  return (
    <>
      <BasicTableWithFilter
        totalNumber={data?.pagination.total_elements}
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
          pagination: { total: data?.pagination.total_elements },
          dataSource: dataTable,
          rowKey: 'id',
          onRow:
            onRow ||
            function (record, rowIndex) {
              return {
                onClick: (ev) => {
                  console.log(record);
                  router.push(`/admin/accounts/${record.id}`);
                }, // click row
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

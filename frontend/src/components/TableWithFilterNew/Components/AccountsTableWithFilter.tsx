'use client';

import {
  NameFormItem,
  TeamNumberFormItem,
  RoleFormItem,
} from '@/components/Forms/FormItems/Filters';
import { GetAccountsApiArg } from '@/types/api';
import { useState, useEffect, useMemo } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { ColumnsType } from 'antd/es/table';

import { useGetUsersQuery } from '@/redux/services/api';

import { Role, Sex } from '@/types/common';
import { useRouter } from 'next/navigation';
import { TableProps } from 'antd/lib';
import { GetUsers_Response } from '@proto/users/users_api';
import type { TeamSnippet } from '@projTypes/proto';

type AccountColumnsDataType = {
  id: string;
  name: string;
  email: string;
  teams: TeamSnippet[];
  role: Role;
  balance: string;
};

const mockData: GetUsers_Response = {
  page: {
    totalElements: 0,
    totalPages: 0,
  },
  users: [
    {
      id: '1',
      name: 'ivan',
      surname: 'ivan',
      patronymic: undefined,
      messengerContact: undefined,
      sex: Sex.MALE,
      email: 'ivan@',
      phoneNumber: undefined,
      balance: '19',
      role: Role.LEARNER,
      memberOfTeams: [
        {
          id: '1',
          number: 1,
          projectTheme: 'asd',
          description: 'asd',
        },
      ],
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
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render(value, record, index) {
      return record.email;
    },
  },
  {
    title: 'Команда',
    dataIndex: 'team',
    key: 'team',
    render(value, record, index) {
      return record.teams.length > 0
        ? record.teams.map((team) => `№${team.number} `)
        : 'Не в команде';
    },
  },
  {
    title: 'Роль',
    dataIndex: 'role',
    key: 'role',
    render(value, record, index) {
      return (
        <>
          {record.role === Role.ADMIN && <p>Администратор</p>}
          {record.role === Role.LEARNER && <p>Ученик</p>}
          {record.role === Role.TRACKER && <p>Трекер</p>}
          {record.role === Role.NOT_INITIALISED && <p>-</p>}
        </>
      );
    },
  },
  { title: 'Баланс', dataIndex: 'balance', key: 'balance' },
];

export function AccountsTableWithFilter({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const router = useRouter();

  const [formData, setFormData] = useState<GetAccountsApiArg>({
    page: 1,
    size: 10,
  });
  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);

  const { data } = useGetUsersQuery(dataForReq);

  const dataForTable = useMemo(() => {
    return data?.users.map<AccountColumnsDataType>((user) => {
      return {
        id: user.id,
        name: `${user.surname} ${user.name}`,
        email: user.email,
        teams: user.memberOfTeams,
        role: user.role,
        balance: user.balance,
      };
    });
  }, [data]);

  return (
    <>
      <BasicTableWithFilter
        totalNumber={data?.page?.totalElements}
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
          pagination: { total: data?.page?.totalElements },
          dataSource: dataForTable,
          rowKey: 'id',
          onRow:
            onRow ||
            function (record, rowIndex) {
              return {
                onClick: (ev) => {
                  console.log(record);
                  router.push(`/admin/users/${record.id}`);
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

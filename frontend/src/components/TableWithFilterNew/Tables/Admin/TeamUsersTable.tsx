'use client';

import { useAuth } from '@/redux/features/authSlice';
import { GetTeam_Response } from '@proto/teams/teams_api';
import {
  User,
  UserRoleNamespace_Role,
  UserSexNamespace_Sex,
} from '@proto/users/users_api';
import { Table } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';

type TeamUsersColumnsType = {
  userId: string;
  userName: string;
  userEmail: string;
  userBalance: string;
};

const TeamUsersColumns: (
  isAdmin: boolean
) => ColumnsType<TeamUsersColumnsType> = (isAdmin) => [
  { title: 'Имя', dataIndex: 'userName', key: 'userName' },
  { title: 'Email', dataIndex: 'userEmail', key: 'userEmail' },
  { title: 'Баланс', dataIndex: 'userBalance', key: 'userBalance', hidden: !isAdmin },
];

// const mockData: GetTeam_Response = {
//   team: {
//     id: 't1',
//     number: 1,
//     projectTheme: 'тема_проекта',
//     description: '__описание__',
//     students: [
//       {
//         id: 'us1',
//         name: 'Petya',
//         surname: 'Петоров',
//         patronymic: '-',
//         messengerContact: 'meess',
//         sex: UserSexNamespace_Sex.MALE,
//         email: '@email',
//         phoneNumber: '+7 999 999 99 99',
//         balance: '100',
//         role: UserRoleNamespace_Role.LEARNER,
//         memberOfTeams: [],
//       },
//       {
//         id: 'us2',
//         name: 'Petya2',
//         surname: 'Петоров2',
//         patronymic: '-',
//         messengerContact: 'meess',
//         sex: UserSexNamespace_Sex.MALE,
//         email: '@email',
//         phoneNumber: '+7 999 999 99 99',
//         balance: '100',
//         role: UserRoleNamespace_Role.LEARNER,
//         memberOfTeams: [],
//       },
//     ],
//     trackers: [
//       {
//         id: 'us3',
//         name: 'Petya',
//         surname: 'Трекеров',
//         patronymic: '-',
//         messengerContact: 'meess',
//         sex: UserSexNamespace_Sex.MALE,
//         email: '@email',
//         phoneNumber: '+7 999 999 99 99',
//         balance: '100',
//         role: UserRoleNamespace_Role.TRACKER,
//         memberOfTeams: [],
//       },
//     ],
//   },
// };

const mockData: User[] = [
  {
    id: 'us1',
    name: 'Petya',
    surname: 'Петоров',
    patronymic: '-',
    messengerContact: 'meess',
    sex: UserSexNamespace_Sex.MALE,
    email: '@email',
    phoneNumber: '+7 999 999 99 99',
    balance: '100',
    role: UserRoleNamespace_Role.LEARNER,
    memberOfTeams: [],
  },
  {
    id: 'us2',
    name: 'Petya2',
    surname: 'Петоров2',
    patronymic: '-',
    messengerContact: 'meess',
    sex: UserSexNamespace_Sex.MALE,
    email: '@email',
    phoneNumber: '+7 999 999 99 99',
    balance: '100',
    role: UserRoleNamespace_Role.LEARNER,
    memberOfTeams: [],
  },
];

export const TeamUsersTable = ({
  users = mockData,
  onRow,
}: {
  users?: User[];
  onRow?: TableProps['onRow'];
}) => {
  //TODO: user type

  const router = useRouter();
  const [, , { isAdmin }] = useAuth();

  const [userDataTable, setUserDataTable] = useState<TeamUsersColumnsType[]>(
    []
  );

  useEffect(() => {
    const dataForTable: TeamUsersColumnsType[] | undefined = users?.map(
      (user): TeamUsersColumnsType => {
        const res: TeamUsersColumnsType = {
          userId: user.id,
          userName: `${user.surname} ${user.name}`,
          userEmail: user.email,
          userBalance: user.balance,
        };
        return res;
      }
    );
    setUserDataTable(dataForTable || []);
  }, [users]);

  return (
    <Table
      columns={TeamUsersColumns(isAdmin)}
      dataSource={userDataTable || mockData}
      pagination={false}
      rowKey={'userId'}
      style={{width: '100%'}}
      onRow={
        onRow ||
        function (record, rowIndex) {
          return {
            onClick: (event) => {
              router.push(`/admin/users/${record.userId}`);
            },
          };
        }
      }
    />
  );
};

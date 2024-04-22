'use client';

import { User } from '@proto/users/users_api';
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

const TeamUsersColumns: ColumnsType<TeamUsersColumnsType> = [
  { title: 'Имя', dataIndex: 'userName', key: 'userName' },
  { title: 'Email', dataIndex: 'userEmail', key: 'userEmail' },
  { title: 'Баланс', dataIndex: 'userBalance', key: 'userBalance' },
];

const mockData: TeamUsersColumnsType[] = [
  {
    userId: '1',
    userName: 'Лёха Петров',
    userEmail: 'lexa@edu.hse.ru',
    userBalance: '0',
  },
  {
    userId: '2',
    userName: 'Ванёк Петров',
    userEmail: 'ioann@edu.hse.ru',
    userBalance: '55',
  },
  {
    userId: '3',
    userName: 'Саня Петров',
    userEmail: 'sanek@edu.hse.ru',
    userBalance: '110',
  },
];

export const TeamUsersTable = ({
  users,
  onRow,
}: {
  users?: User[];
  onRow?: TableProps['onRow'];
}) => {
  //TODO: user type

  const router = useRouter();

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
      columns={TeamUsersColumns}
      dataSource={userDataTable || mockData}
      pagination={false}
      rowKey={'userId'}
      onRow={
        onRow ||
        function (record, rowIndex) {
          return {
            onClick: (event) => {
              router.push(`/admin/accounts/${record.userId}`);
            },
          };
        }
      }
    />
  );
};

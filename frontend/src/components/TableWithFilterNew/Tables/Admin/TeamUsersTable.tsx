'use client';

import { ClaimStatus, DateTime } from '@/types/common';
import { dto } from '@dto';
import { Table } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type TeamUsersColumnsType = {
  userId: number | string;
  userName: string;
  userEmail: string;
  userBalance: number;
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
    userBalance: 0,
  },
  {
    userId: '2',
    userName: 'Ванёк Петров',
    userEmail: 'ioann@edu.hse.ru',
    userBalance: 55,
  },
  {
    userId: '3',
    userName: 'Саня Петров',
    userEmail: 'sanek@edu.hse.ru',
    userBalance: 110,
  },
];

export const TeamUsersTable = ({
  users,
  onRow,
}: {
  users?: dto.TeamResponse.IPersonShortInfo[];
  onRow?: TableProps['onRow'];
}) => {
  //TODO: user type

  const router = useRouter();

  const [userDataTable, setUserDataTable] = useState<TeamUsersColumnsType[]>(
    []
  );

  useEffect(() => {
    const u = users?.map((user) => ({
      userId: user.id,
      userName: user.partName,
      userEmail: user.email,
      userBalance: user.balance,
    })) as TeamUsersColumnsType[];

    setUserDataTable(u);
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

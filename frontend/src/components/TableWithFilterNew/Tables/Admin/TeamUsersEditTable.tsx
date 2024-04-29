'use client';

import { ClaimStatus, DateTime } from '@/types/common';
import { DeleteOutlined } from '@ant-design/icons';
import { dto } from '@dto';
import { Button, Table } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type TeamUsersEditColumnsType = {
  userId: number | string;
  userName: string;
  userEmail: string;
  userBalance: number;
};

const TeamUsersEditColumns: ColumnsType<TeamUsersEditColumnsType> = [
  { title: 'Имя', dataIndex: 'userName', key: 'userName' },
  { title: 'Email', dataIndex: 'userEmail', key: 'userEmail' },
  // { title: 'Баланс', dataIndex: 'userBalance', key: 'userBalance' },
  {
    title: 'Удалить',
    dataIndex: '_',
    key: '_',
    render(value, record, index) {
      return (
        <>
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => {
              console.log(record);
            }}
          />
        </>
      );
    },
  },
];

const mockData: TeamUsersEditColumnsType[] = [
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

export const TeamUsersEditTable = ({
  users,
  onRow,
}: {
  users?: dto.TeamResponse.IPersonShortInfo[];
  onRow?: TableProps['onRow'];
}) => {
  //TODO: user type

  const router = useRouter();

  const [userDataTable, setUserDataTable] = useState<
    TeamUsersEditColumnsType[]
  >([]);

  useEffect(() => {
    const u = users?.map((user) => ({
      userId: user.id,
      userName: user.partName,
      userEmail: user.email,
      userBalance: user.balance,
    })) as TeamUsersEditColumnsType[];

    setUserDataTable(u);
  }, [users]);

  return (
    <Table
      columns={TeamUsersEditColumns}
      dataSource={userDataTable || mockData}
      pagination={false}
      rowKey={'userId'}
      onRow={onRow}
      // onRow={(record, rowIndex) => {
      //   return {
      //     onClick: (event) => {
      //       router.push(`/admin/users/${record.userId}`);
      //     },
      //   };
      // }}
    />
  );
};

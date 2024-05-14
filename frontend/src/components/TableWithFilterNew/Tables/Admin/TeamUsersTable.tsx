'use client';

import { useAuth } from '@/redux/features/authSlice';
import { Table } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import { useRouter } from 'next/navigation';

export type TeamUsersColumnsType = {
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
  {
    title: 'Баланс',
    dataIndex: 'userBalance',
    key: 'userBalance',
    hidden: !isAdmin,
  },
];

export const TeamUsersTable = ({
  onRow,
  tableData
}: {
  onRow?: TableProps['onRow'];
  tableData:TeamUsersColumnsType[]
}) => {
  const router = useRouter();
  const [, , { isAdmin }] = useAuth();

  return (
    <Table
      columns={TeamUsersColumns(isAdmin)}
      dataSource={tableData}
      pagination={false}
      rowKey={'userId'}
      style={{ width: '100%' }}
      onRow={
        onRow ||
        function (record, rowIndex) {
          return {
            onClick: (event) => {
              isAdmin && router.push(`/admin/users/${record.userId}`);
            },
          };
        }
      }
    />
  );
};

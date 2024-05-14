'use client';

import { DeleteOutlined } from '@ant-design/icons';

import { Button, Table } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import { useMemo } from 'react';

export type TeamUsersEditColumnsType = {
  userId: string;
  userName: string;
  userEmail: string;
  userBalance: string;
};

export const TeamUsersEditTable = ({
  onRow,
  tableData,
  onDelete,
}: {
  onRow?: TableProps['onRow'];
  tableData?: TeamUsersEditColumnsType[];
  onDelete: (id: string) => void;
}) => {
  const colums = useMemo<ColumnsType<TeamUsersEditColumnsType>>(
    () => [
      { title: 'Имя', dataIndex: 'userName', key: 'userName' },
      { title: 'Email', dataIndex: 'userEmail', key: 'userEmail' },
      {
        title: 'Удалить',
        dataIndex: '_',
        key: '_',
        width: 90,
        render(value, record, index) {
          return (
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              onClick={() => {
                onDelete(record.userId);
              }}
            />
          );
        },
      },
    ],
    [onDelete]
  );

  return (
    <Table
      columns={colums}
      dataSource={tableData}
      pagination={false}
      rowKey={'userId'}
      onRow={onRow}
    />
  );
};

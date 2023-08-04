"use client"

import { Table, Space } from 'antd';
import { ColumnsType } from 'antd/lib/table';

interface Tracker {
  name: string;
  email: string;
  balance: number;
}

interface TrackerTableProps {
  trackers: Tracker[];
}

const TrackerTable: React.FC<TrackerTableProps> = ({ trackers }) => {
  const columns: ColumnsType<Tracker> = [
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Баланс',
      dataIndex: 'balance',
      key: 'balance',
    },
  ];

  return (
    <Table
      dataSource={trackers}
      columns={columns}
      style={{ marginTop: '1rem' }}
      pagination={false}
    />
  );
};

export default TrackerTable;

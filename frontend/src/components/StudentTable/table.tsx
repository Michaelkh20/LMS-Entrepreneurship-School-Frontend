"use client"

import { Table, Space } from 'antd';
import { ColumnsType } from 'antd/lib/table';

interface Student {
  name: string;
  email: string;
  messenger: string;
  balance: number;
}

interface StudentTableProps {
  students: Student[];
}

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
  const columns: ColumnsType<Student> = [
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
      title: 'Мессенджер',
      dataIndex: 'messenger',
      key: 'messenger',
    },
    {
      title: 'Баланс',
      dataIndex: 'balance',
      key: 'balance',
    },
  ];

  return (
    <Table
      dataSource={students}
      columns={columns}
      style={{ marginTop: '1rem' }}
      pagination={false}
    />
  );
};

export default StudentTable;


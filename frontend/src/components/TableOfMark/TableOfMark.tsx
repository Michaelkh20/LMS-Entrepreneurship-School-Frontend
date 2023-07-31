'use client';

import React from 'react';
import { Table } from 'antd';

interface TableData {
  key: string;
  elementControl: string;
  testing: string;
  homework: string;
  contests: string;
  exam: string;
  attendance: string;
  bonus: string;
  total: string;
}

interface TableComponentProps {
  data: TableData[];
}

const columns = [
  {
    title: 'Элемент контроля',
    dataIndex: 'elementControl',
    key: 'elementControl',
  },
  {
    title: '20% тестирования',
    dataIndex: 'testing',
    key: 'testing',
  },
  {
    title: '40% Домашнее задание',
    dataIndex: 'homework',
    key: 'homework',
  },
  {
    title: '10% конкурсы',
    dataIndex: 'contests',
    key: 'contests',
  },
  {
    title: '20% экзамен',
    dataIndex: 'exam',
    key: 'exam',
  },
  {
    title: '10% посещаемость',
    dataIndex: 'attendance',
    key: 'attendance',
  },
  {
    title: 'Бонус',
    dataIndex: 'bonus',
    key: 'bonus',
  },
  {
    title: 'Итог',
    dataIndex: 'total',
    key: 'total',
  },
];

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={false}
      bordered // Добавляем границы ячеек таблицы
      style={{ margin: '3rem' }} // Добавляем отступ от краев
    />
  );
};

export default TableComponent;

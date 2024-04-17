import { DateTime } from '@/types/common';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

type LearnerAseesmentsColumnsType = {
  id: number | string;
  taskTitle: string;
  lessonTitle: string;
  taskType: string;
  deadline: DateTime;
  grade: number;
};

const LearnerAseesmentsColumns: ColumnsType<LearnerAseesmentsColumnsType> = [
  { title: 'Задание', dataIndex: 'taskTitle', key: 'taskTitle' },
  { title: 'Урок', dataIndex: 'lessonTitle', key: 'lessonTitle' },
  { title: 'Тип', dataIndex: 'taskType', key: 'taskType' },
  { title: 'Дедлайн', dataIndex: 'deadline', key: 'deadline' },
  { title: 'Оценка', dataIndex: 'grade', key: 'grade' },
];

const mockData: LearnerAseesmentsColumnsType[] = [
  {
    id: 1,
    taskTitle: 'ДЗ_1',
    lessonTitle: 'Урок_1',
    taskType: 'ДЗ',
    deadline: '12.12.2024',
    grade: 8,
  },
  {
    id: 2,
    taskTitle: 'ДЗ_2',
    lessonTitle: 'Урок_2',
    taskType: 'ДЗ',
    deadline: '12.12.2024',
    grade: 6,
  },
  {
    id: 3,
    taskTitle: 'Экзамен',
    lessonTitle: 'Урок_10',
    taskType: 'Экзамен',
    deadline: '12.12.2024',
    grade: 10,
  },
];

export const LearnerAseesmentsTable = () => {
  return (
    <Table
      columns={LearnerAseesmentsColumns}
      dataSource={mockData}
      pagination={false}
      rowKey={'id'}
    />
  );
};

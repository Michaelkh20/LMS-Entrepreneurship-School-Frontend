import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

type FinalGradeColumnsType = {
  id: number;
  totalGrade: number;
  testGrade: number;
  hwGrade: number;
  examGrade: number;
  competitionGrade: number;
  attendanceGrade: number;
  bonusGrade: number;
};

const FinalGradeColumns: ColumnsType<FinalGradeColumnsType> = [
  {
    title: 'Итоговая',
    dataIndex: 'totalGrade',
    key: 'totalGrade',
    render(value, record, index) {
      return (
        <div style={{ color: '#1677ff', fontWeight: 'bold' }}>{value}</div>
      );
    },
  },
  { title: 'Тестирование', dataIndex: 'testGrade', key: 'testGrade' },
  { title: 'ДЗ', dataIndex: 'hwGrade', key: 'hwGrade' },
  { title: 'Конкурсы', dataIndex: 'examGrade', key: 'examGrade' },
  { title: 'Экзамен', dataIndex: 'competitionGrade', key: 'competitionGrade' },
  {
    title: 'Посещаемость',
    dataIndex: 'attendanceGrade',
    key: 'attendanceGrade',
  },
  { title: 'Бонус', dataIndex: 'bonusGrade', key: 'bonusGrade' },
];

const mockData: FinalGradeColumnsType = {
  id: 0,
  totalGrade: 0,
  testGrade: 0,
  hwGrade: 0,
  examGrade: 0,
  competitionGrade: 0,
  attendanceGrade: 0,
  bonusGrade: 0,
};

export const FinalGradeTable = () => {
  return (
    <Table
      columns={FinalGradeColumns}
      dataSource={[mockData]}
      pagination={false}
      rowKey={'id'}
    />
  );
};

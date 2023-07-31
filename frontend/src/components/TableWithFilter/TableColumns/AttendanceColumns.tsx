import { ColumnsType } from 'antd/es/table';
import { Button, Input, Checkbox } from 'antd';

export type AttendanceColumnsDataType = {
  key: React.Key;
  learner: string;
  email: string;
  didCome: boolean;
};

export const AttendanceColumns: ColumnsType<AttendanceColumnsDataType> = [
  {
    title: '',
    dataIndex: '',
    key: 'w',
    render: (_, record: AttendanceColumnsDataType, rowIndex) => {
      return (
        <>
          <Checkbox
            checked={record.didCome}
            onChange={() => {
              record.didCome = !record.didCome;
            }}
          />
        </>
      );
    },
  },
  {
    title: 'Имя',
    dataIndex: 'learner',
    key: 'learner',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Начислить ШП',
    dataIndex: '',
    key: 'x',
    width: 150,
    render: (_, record: AttendanceColumnsDataType) => {
      return <>{record.didCome && <Input placeholder={'ШП'}></Input>}</>;
    },
  },
];

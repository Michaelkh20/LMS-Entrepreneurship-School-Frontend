import { ColumnsType } from 'antd/es/table';

type ColumnsDataType = {
  key: React.Key;
  name: string;
  email: string;
  team: string;
  role: string;
  balance: number;
};

export const accountsColumns: ColumnsType<ColumnsDataType> = [
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
    defaultSortOrder: 'ascend',
    sorter: true
  },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Команда', dataIndex: 'team', key: 'team' },
  { title: 'Роль', dataIndex: 'role', key: 'role' },
  { title: 'Баланс', dataIndex: 'balance', key: 'balance' },
];

const mockData:ColumnsDataType[] = [
  { 
    key: "123123", 
    name: "ivan",
    email: "ivan",
    team: "#1",
    role: "BABY",
    balance: 100,
  }
]

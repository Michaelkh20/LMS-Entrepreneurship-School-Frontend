import { ClaimStatus } from '@/types/common';
import { Table } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';

type LearnerLotBuyColumnsType = {
  id: number | string;
  lotNumber: number;
  status: ClaimStatus; //TODO: LotStaus
  date: string;
  ownerName: string;
  sum: number;
};

const LearnerLotBuyColumns: ColumnsType<LearnerLotBuyColumnsType> = [
  { title: 'Лот №', dataIndex: 'lotNumber', key: 'lotNumber' },
  { title: 'Владелец', dataIndex: 'ownerName', key: 'ownerName' },
  { title: 'Дата', dataIndex: 'date', key: 'date' },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    render: (_, record: LearnerLotBuyColumnsType) => {
      return (
        <>
          {record.status === ClaimStatus.Waiting && (
            <p style={{ color: 'var(--color-primary)' }}>Ожидание</p>
          )}
          {record.status === ClaimStatus.Declined && (
            <p style={{ color: 'var(--color-error)' }}>Отклонено</p>
          )}
          {record.status === ClaimStatus.Approved && (
            <p style={{ color: 'var(--color-success)' }}>Одобрено</p>
          )}
        </>
      );
    },
  },
  { title: 'Стоимость', dataIndex: 'sum', key: 'sum' },
];

const mockData: LearnerLotBuyColumnsType[] = [
  {
    id: 12,
    lotNumber: 5,
    status: ClaimStatus.Approved,
    ownerName: 'Иван Обучающийся',
    date: '123123',
    sum: 5000,
  },
  {
    id: 13,
    lotNumber: 6,
    status: ClaimStatus.Waiting,
    ownerName: 'Иван Обучающийся',
    date: '123123',
    sum: 300,
  },
  {
    id: 14,
    lotNumber: 7,
    status: ClaimStatus.Declined,
    ownerName: 'Иван Обучающийся',
    date: '123123',
    sum: 50002,
  },
];

export const LearnerLotBuyTable = ({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) => {
  return (
    <Table
      columns={LearnerLotBuyColumns}
      dataSource={mockData}
      pagination={false}
      rowKey={'id'}
      onRow={onRow}
    />
  );
};

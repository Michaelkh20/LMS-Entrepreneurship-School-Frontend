import { ClaimStatus } from '@/types/common';
import { Form, InputNumber, Select, Table } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import {
  LotNumberFormItem,
  LotTitleFormItem,
} from '@/components/Forms/FormItems/Filters';
import { useState } from 'react';

type LearnerLotSellColumnsType = {
  id: number | string;
  number: string;
  status: ClaimStatus; //TODO: LotStaus
  date: Date;
  title: string;
  // ownerName: string;
  price: number;
};

const LearnerLotSellColumns: ColumnsType<LearnerLotSellColumnsType> = [
  { title: 'Лот №', dataIndex: 'number', key: 'number', width: '100px' },
  // { title: 'Владелец', dataIndex: 'ownerName', key: 'ownerName' },
  {
    title: 'Название',
    dataIndex: 'title',
    key: 'title',
    width: '500px',
  },
  {
    title: 'Дата выставления',
    dataIndex: 'date',
    key: 'date',
    render: (_, record: LearnerLotSellColumnsType) => {
      return record.date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
      });
    },
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    render: (_, record: LearnerLotSellColumnsType) => {
      return (
        <>
          {record.status === ClaimStatus.Waiting && (
            <p style={{ color: 'var(--color-primary)' }}>Ожидание</p>
          )}
          {record.status === ClaimStatus.Declined && (
            <p style={{ color: 'var(--color-error)' }}>Снят с продажи</p>
          )}
          {record.status === ClaimStatus.Approved && (
            <p style={{ color: 'var(--color-success)' }}>В продаже</p>
          )}
        </>
      );
    },
  },
  { title: 'Стоимость', dataIndex: 'price', key: 'price', width: '200px' },
];

const mockData: LearnerLotSellColumnsType[] = [
  {
    id: 1,
    number: '1',
    title: 'Организация корпоративного мероприятия',
    price: 2000,
    date: new Date(2024, 1, 12),
    status: ClaimStatus.Declined,
  },

  {
    id: 2,
    number: '2',
    title: 'Разработка дизайна логотипа',
    price: 300,
    date: new Date(2024, 3, 11),
    status: ClaimStatus.Approved,
  },
  {
    id: 3,
    number: '3',
    title: 'Курс по основам программирования',
    price: 500,
    date: new Date(2024, 3, 23),
    status: ClaimStatus.Waiting,
  },
];

export const LearnerLotSellTable = ({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) => {
  const [formData, setFormData] = useState({
    page: 1,
    size: 10,
  });
  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);

  return (
    <BasicTableWithFilter
      totalNumber={3}
      filterFormItems={
        <>
          <LotNumberFormItem />
          <LotTitleFormItem />
          <Form.Item name={'lotNumber'}>
            <Select style={{ minWidth: 130 }} placeholder="Cтатус" />
          </Form.Item>
          <Form.Item name={'lotNumber'}>
            <InputNumber
              style={{ minWidth: 130 }}
              min={1}
              placeholder={'Цена от'}
            />
          </Form.Item>
          <Form.Item name={'lotNumber'}>
            <InputNumber
              style={{ minWidth: 130 }}
              min={1}
              placeholder={'Цена до'}
            />
          </Form.Item>
        </>
      }
      tableProps={{
        scroll: { x: true },
        columns: LearnerLotSellColumns,
        pagination: false,
        dataSource: mockData,
        rowKey: 'id',
        onRow: onRow,
      }}
      formData={formData}
      setFormData={setFormData}
      setDataForReq={setDataForReq}
    />
  );
};

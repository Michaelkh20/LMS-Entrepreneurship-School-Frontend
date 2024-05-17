import { ClaimStatus } from '@/types/common';
import { Form, InputNumber, Table } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import {
  LotNumberFormItem,
  LotTitleFormItem,
} from '@/components/Forms/FormItems/Filters';
import { LearnerSelectionFormItem } from '@/components/Forms/FormItems/Selection/LearnerSelectionFormItem';
import { useState } from 'react';

type LearnerLotBuyColumnsType = {
  id: number;
  number: string;
  date: Date;
  performer: string;
  price: number;
  title: string;
};

const LearnerLotBuyColumns: ColumnsType<LearnerLotBuyColumnsType> = [
  { title: 'Лот №', dataIndex: 'number', key: 'number' },
  {
    title: 'Название',
    dataIndex: 'title',
    key: 'title',
    width: '400px',
  },
  { title: 'Владелец', dataIndex: 'performer', key: 'performer' },
  {
    title: 'Дата покупки',
    dataIndex: 'date',
    key: 'date',
    render: (_, record) => {
      return record.date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
      });
    },
  },
  { title: 'Стоимость', dataIndex: 'price', key: 'price' },
];

const mockData: LearnerLotBuyColumnsType[] = [
  {
    id: 4,
    number: '4',
    title: 'Организация корпоративного мероприятия',
    price: 2000,
    performer: 'Кривоус Тарас',
    date: new Date(2024, 1, 12),
  },
  {
    id: 5,
    number: '5',
    title: 'Профессиональная фотосъемка',
    price: 150,
    performer: 'Лукашевич Михаил',
    date: new Date(2024, 3, 11),
  },
  {
    id: 6,
    number: '6',
    title: 'Перевод документов с английского на русский',
    price: 50,
    performer: 'Волкова Полина',
    date: new Date(2024, 2, 25),
  },
];

export const LearnerLotBuyTable = ({
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
          <LearnerSelectionFormItem
            name="learner"
            type="filter"
            placeholder="Исполнитель"
          />
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
        columns: LearnerLotBuyColumns,
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

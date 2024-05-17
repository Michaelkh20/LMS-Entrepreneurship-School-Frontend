'use client';

import { Form, InputNumber } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import {
  LotNumberFormItem,
  LotTitleFormItem,
} from '@/components/Forms/FormItems/Filters';
import { LearnerSelectionFormItem } from '@/components/Forms/FormItems/Selection/LearnerSelectionFormItem';
import { useState } from 'react';
import { GetBuyedLotsApiArg, LotWithBuyDate } from '@/types/api';
import { useBuyedLots } from '@/redux/features/marketSlice';

type LearnerLotBuyColumnsType = LotWithBuyDate;

const LearnerLotBuyColumns: ColumnsType<LearnerLotBuyColumnsType> = [
  {
    title: 'Лот №',
    dataIndex: 'number',
    key: 'number',
    render: (_, record) => {
      return record.number;
    },
  },
  {
    title: 'Название',
    dataIndex: 'title',
    key: 'title',
    width: '400px',
    render: (_, record) => {
      return record.title;
    },
  },
  {
    title: 'Владелец',
    dataIndex: 'performer',
    key: 'performer',
    render: (_, record) => {
      return record.performer.name;
    },
  },
  {
    title: 'Дата покупки',
    dataIndex: 'date',
    key: 'date',
    render: (_, { buyDate }) => {
      return buyDate
        ? buyDate.toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: '2-digit',
            day: 'numeric',
          })
        : '-';
    },
  },
  {
    title: 'Стоимость',
    dataIndex: 'price',
    key: 'price',
    render: (_, record) => {
      return record.price;
    },
  },
];

export const LearnerLotBuyTable = ({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) => {
  const [formData, setFormData] = useState<GetBuyedLotsApiArg>({
    page: 1,
    size: 10,
  });
  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);

  const data = useBuyedLots(dataForReq);

  return (
    <BasicTableWithFilter
      totalNumber={data.page.totalElements}
      filterFormItems={
        <>
          <LotNumberFormItem />
          <LotTitleFormItem />
          <LearnerSelectionFormItem
            name="performerId"
            type="filter"
            placeholder="Исполнитель"
          />
          <Form.Item name="priceFrom">
            <InputNumber
              style={{ minWidth: 130 }}
              min={1}
              placeholder={'Цена от'}
            />
          </Form.Item>
          <Form.Item name="priceTo">
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
        pagination: { total: data.page.totalElements },
        dataSource: data.lots,
        rowKey: 'id',
        onRow: onRow,
      }}
      formData={formData}
      setFormData={setFormData}
      setDataForReq={setDataForReq}
    />
  );
};

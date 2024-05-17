import { LotStatus } from '../../../types/common';
import { Form, InputNumber } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import {
  LotNumberFormItem,
  LotTitleFormItem,
} from '@/components/Forms/FormItems/Filters';
import { useState } from 'react';
import { GetSellingLotsApiArg, Lot } from '@/types/api';
import { LotStatusFormItem } from '@/components/Forms/FormItems/Filters/LotStatusFormItem';
import { useSellingLots } from '@/redux/features/marketSlice';

type LearnerLotSellColumnsType = Lot;

const LearnerLotSellColumns: ColumnsType<LearnerLotSellColumnsType> = [
  {
    title: 'Лот №',
    dataIndex: 'number',
    key: 'number',
    width: '100px',
    render: (_, record) => {
      return record.number;
    },
  },
  {
    title: 'Название',
    dataIndex: 'title',
    key: 'title',
    width: '500px',
    render: (_, record) => {
      return record.title;
    },
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    render: (_, record: LearnerLotSellColumnsType) => {
      return (
        <>
          {record.status === LotStatus.Approval && (
            <p style={{ color: 'var(--color-primary)' }}>Ожидание</p>
          )}
          {record.status === LotStatus.Withdrawn && (
            <p style={{ color: 'var(--color-error)' }}>Снят с продажи</p>
          )}
          {record.status === LotStatus.OnSale && (
            <p style={{ color: 'var(--color-success)' }}>В продаже</p>
          )}
        </>
      );
    },
  },
  {
    title: 'Дата выставления',
    dataIndex: 'date',
    key: 'date',
    render: (_, { listingDate }) => {
      return listingDate
        ? listingDate.toLocaleDateString('ru-RU', {
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
    width: '200px',
    render: (_, record) => {
      return record.price;
    },
  },
];

export const LearnerLotSellTable = ({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) => {
  const [formData, setFormData] = useState<GetSellingLotsApiArg>({
    page: 1,
    size: 10,
  });
  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);

  const data = useSellingLots(dataForReq);

  return (
    <BasicTableWithFilter
      totalNumber={data.page.totalElements}
      filterFormItems={
        <>
          <LotNumberFormItem />
          <LotTitleFormItem />
          <LotStatusFormItem />
          <Form.Item name="priceFrom">
            <InputNumber
              style={{ minWidth: 130 }}
              min={1}
              placeholder="Цена от"
            />
          </Form.Item>
          <Form.Item name="priceTo">
            <InputNumber
              style={{ minWidth: 130 }}
              min={1}
              placeholder="Цена до"
            />
          </Form.Item>
        </>
      }
      tableProps={{
        scroll: { x: true },
        columns: LearnerLotSellColumns,
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

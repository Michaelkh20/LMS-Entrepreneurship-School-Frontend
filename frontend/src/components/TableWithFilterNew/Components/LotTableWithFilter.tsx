'use client';

import {
  LotNumberFormItem,
  DatePickerFormItem,
} from '@/components/Forms/FormItems/Filters';

import type { GetLotsApiArg, LotSnippetForTable, LotsPage } from '@/types/api';
import { useGetLotsQuery } from '@/redux/services/api';

import { useState, useMemo } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { LotStatus } from '@/types/common';
import { ColumnsType, TableProps } from 'antd/es/table';
import { lotStatusToString } from '../../../util/enumsToString';
import { LearnerSelectionFormItem } from '@/components/Forms/FormItems/Selection/LearnerSelectionFormItem';

type LotColumnsDataType = LotSnippetForTable;

const LotColumns: ColumnsType<LotColumnsDataType> = [
  {
    title: 'Лот',
    dataIndex: 'lotNumber',
    key: 'lotNumber',
    sorter: true,
    render: (_value, record, _index) => {
      return `№${record.number}`;
    },
  },
  {
    title: 'Название',
    dataIndex: 'lotTitle',
    key: 'lotTitle',
    sorter: true,
    render: (_value, record, _index) => {
      return `${record.title}`;
    },
  },
  {
    title: 'Исполнитель',
    dataIndex: 'performer',
    key: 'performer',
    render: (_value, record, _index) => {
      return `${record.performer.name}`;
    },
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
    render: (_value, record, _index) => {
      return `${record.listingDate}`;
    },
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    render: (_value, record, _index) => {
      return (
        <>
          {record.status === LotStatus.Approval && (
            <p style={{ color: 'var(--color-primary)' }}>
              {lotStatusToString(record.status)}
            </p>
          )}
          {record.status === LotStatus.Withdrawn && (
            <p style={{ color: 'var(--color-error)' }}>
              {lotStatusToString(record.status)}
            </p>
          )}
          {record.status === LotStatus.OnSale && (
            <p style={{ color: 'var(--color-success)' }}>
              {lotStatusToString(record.status)}
            </p>
          )}
        </>
      );
    },
  },
  {
    title: 'Стоимость',
    dataIndex: 'price',
    key: 'price',
    render: (_value, record, _index) => {
      return `${record.price}`;
    },
  },
];

const mockData: LotsPage = {
  pagination: {
    totalPages: 1,
    totalElements: 1,
  },
  lots: [
    {
      id: '1',
      number: 23,
      title: 'Курс по основам программирования',
      status: LotStatus.OnSale,
      listingDate: '15.05.2024',
      price: 500,
      performer: {
        id: 'id1',
        name: 'Жуйков Никита',
      },
    },
  ],
};


export function LotTableWithFilter({ onRow }: { onRow?: TableProps['onRow'] }) {
  const [formData, setFormData] = useState<GetLotsApiArg>({
    page: 1,
    size: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const { data, isLoading, isError, isFetching } = useGetLotsQuery(dataForReq);

  // const data = mockData
  const dataForTable = useMemo(() => {
    return data?.lots.map<LotColumnsDataType>((lot) => {
      const res: LotColumnsDataType = {
        id: lot.id,
        number: lot.number,
        title: lot.title,
        status: lot.status,
        listingDate: lot.listingDate,
        price: lot.price,
        performer: lot.performer,
      };
      return res;
    });
  }, [data]);

  return (
    <>
      <BasicTableWithFilter
        totalNumber={data?.pagination.totalElements}
        filterFormItems={
          <>
            <LotNumberFormItem />
            <LearnerSelectionFormItem
              placeholder={'Исполнитель'}
              name={'performerId'}
              type="filter"
            />
            {/* TODO: LotStatusFrotmItem */}
            <DatePickerFormItem name={'dateFrom'} placeholder={'Дата от'} />
            <DatePickerFormItem name={'dateTo'} placeholder={'Дата до'} />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: LotColumns,
          pagination: { total: data?.pagination.totalElements },
          dataSource: dataForTable,
          rowKey: 'id',
          onRow: onRow,
        }}
        formData={formData}
        setFormData={setFormData}
        setDataForReq={setDataForReq}
      />
    </>
  );
}

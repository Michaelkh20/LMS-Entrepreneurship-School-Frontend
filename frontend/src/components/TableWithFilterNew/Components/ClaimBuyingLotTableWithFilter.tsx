'use client';

import {
  ClaimStatusFormItem,
  LotNumberFormItem,
  DatePickerFormItem,
} from '@/components/Forms/FormItems/Filters';
import { LearnerSelectionFormItem } from '@/components/Forms/FormItems/Selection/LearnerSelectionFormItem';

import type { BuyLotClaimsPage, GetBuyLotClaimsApiArg, Lot } from '@/types/api';

import { useState, useEffect, useMemo } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { ClaimStatus, TwoSidedClaimStatus } from '@/types/common';

import { ColumnsType } from 'antd/es/table';
import { useGetBuyLotClaimsQuery } from '@/redux/services/api';
import type { BuyLotClaimSnippet } from '@/types/api';
import { useBuyLotClaims } from '@/redux/features/marketSlice';

// type ClaimBuyingLotColumnsDataType = BuyLotClaimSnippet;

type ClaimBuyingLotColumnsDataType = {
  id: number | string;
  number: number | null;
  status: ClaimStatus; //TODO: LotStaus
  date: Date;
  title: string;
  performer: string;
  price: number;
  lot: Lot;
  buyer: string;
};

const ClaimBuyingLotColumns: ColumnsType<ClaimBuyingLotColumnsDataType> = [
  {
    title: 'Лот №',
    dataIndex: 'lot',
    key: 'lot',
    sorter: true,
    render: (value, record, index) => {
      return `№${record.lot.number}`;
    },
  },
  {
    title: 'Название лота',
    dataIndex: 'title',
    key: 'title',
    width: '500px',
  },
  {
    title: 'Покупатель',
    dataIndex: 'buyer',
    key: 'buyer',
    render: (value, record, index) => {
      return `${record.buyer}`;
    },
  },
  {
    title: 'Продавец',
    dataIndex: 'performer',
    key: 'performer',
    render: (value, record, index) => {
      return `${record.lot.performer.name}`;
    },
  },
  {
    title: 'Дата подачи',
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
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    render: (_, record) => {
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
  {
    title: 'Стоимость лота',
    dataIndex: 'price',
    key: 'price',
    render: (value, record, index) => {
      return `${record.price}`;
    },
  },
];

// const mockData: ClaimBuyingLotColumnsDataType[] = [
//   {
//     id: 7,
//     number: '7',
//     title: 'SEO-оптимизация веб-сайта',
//     price: 1200,
//     performer: 'Жуйков Никита',
//     date: new Date(2024, 3, 17),
//     status: ClaimStatus.Approved,
//   },
//   {
//     id: 8,
//     number: '8',
//     title: 'Обучение игре на гитаре',
//     price: 400,
//     performer: 'Кирносов Илья',
//     date: new Date(2024, 2, 13),
//     status: ClaimStatus.Declined,
//   },
//   {
//     id: 9,
//     number: '9',
//     title: 'Разработка мобильного приложения',
//     price: 5000,
//     performer: 'Дубин Василий',
//     date: new Date(2024, 3, 18),
//     status: ClaimStatus.Waiting,
//   },
// ];

// const mockData: BuyLotClaimsPage = {
//   pagination: {
//     totalPages: 1,
//     totalElements: 3,
//   },
//   claims: [
//     {
//       id: '',
//       status: TwoSidedClaimStatus.WaitingAdmin,
//       buyer: {
//         id: '1',
//         name: 'Михаил',
//         surname: 'Хооллгм',
//         patronymic: '',
//       },
//       date: '15.05.2024',
//       lot: {
//         number: 23,
//         title: '23',
//         price: 500,
//         performer: {
//           id: '2',
//           name: 'Никита',
//           surname: 'Жуйков',
//           patronymic: 'null',
//         },
//       },
//     },
//   ],
// };

export function ClaimBuyingLotTableWithFilter({
  onRowClick,
}: {
  onRowClick?: (id: string) => void;
}) {
  const [formData, setFormData] = useState<GetBuyLotClaimsApiArg>({
    page: 1,
    size: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);

  // const { data, isLoading, isError, isFetching } =
  //   useGetBuyLotClaimsQuery(dataForReq);
  // const data = mockData;

  const data = useBuyLotClaims(dataForReq);

  const dataForTable = useMemo(() => {
    return data?.claims.map<ClaimBuyingLotColumnsDataType>((claim) => {
      const res: ClaimBuyingLotColumnsDataType = {
        id: claim.id,
        status: claim.status,
        buyer: `${claim.buyer.surname} ${claim.buyer.name}`,
        date: claim.date,
        lot: claim.lot,
        number: claim.lot.number,
        title: claim.lot.title,
        performer: `${claim.lot.performer.name}`,
        price: claim.lot.price,
      };
      return res;
    });
  }, [data]);

  // const data = mockData;

  return (
    <>
      <BasicTableWithFilter
        totalNumber={data?.page.totalElements}
        filterFormItems={
          <>
            <LotNumberFormItem />
            <LearnerSelectionFormItem
              placeholder={'Продавец'}
              name={'receiverId'}
              type="filter"
            />
            <ClaimStatusFormItem />
            <DatePickerFormItem name={'dateFrom'} placeholder={'Дата от'} />
            <DatePickerFormItem name={'dateTo'} placeholder={'Дата до'} />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: ClaimBuyingLotColumns,
          pagination: { total: data?.page.totalElements },
          dataSource: dataForTable,
          rowKey: 'id',
          onRow: (record) => {
            return {
              onClick: () => {
                onRowClick?.(record.id);
              },
            };
          },
        }}
        formData={formData}
        setFormData={setFormData}
        setDataForReq={setDataForReq}
      />
    </>
  );
}

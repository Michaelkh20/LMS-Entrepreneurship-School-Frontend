import { Key, SetStateAction, useEffect, useState } from 'react';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { InputNumber } from 'antd';

// @ts-ignore
import _debounce from 'lodash.debounce';

export type AttendanceColumnsDataType = {
  key: number;
  learner: string;
  email: string;
  didCome: boolean;
  accruedCurrency?: number | null;
  cachedAccruedCurrency?: number;
};

export const AttendanceColumnsDataMock: AttendanceColumnsDataType[] = [
  {
    key: 1,
    learner: 'Ivan',
    email: 'Ivan@email.com',
    didCome: false,
  },
  {
    key: 22,
    learner: 'Ivan',
    email: 'Ivan@email.com',
    didCome: true,
    accruedCurrency: 300,
  },
  {
    key: 2,
    learner: 'Ivan',
    email: 'Ivan@email.com',
    didCome: false,
  },
  {
    key: 33,
    learner: 'Ivan',
    email: 'Ivan@email.com',
    didCome: true,
    accruedCurrency: 300,
  },
  {
    key: 3,
    learner: 'Ivan',
    email: 'Ivan@email.com',
    didCome: false,
  },
  {
    key: 44,
    learner: 'Ivan',
    email: 'Ivan@email.com',
    didCome: true,
    accruedCurrency: 300,
  },
  {
    key: 5,
    learner: 'Ivan',
    email: 'Ivan@email.com',
    didCome: false,
  },
  {
    key: 55,
    learner: 'Ivan',
    email: 'Ivan@email.com',
    didCome: true,
    accruedCurrency: 300,
  },
  {
    key: 6,
    learner: 'Ivan',
    email: 'Ivan@email.com',
    didCome: false,
  },
  {
    key: 66,
    learner: 'Ivan',
    email: 'Ivan@email.com',
    didCome: true,
    accruedCurrency: 300,
  },
  {
    key: 7,
    learner: 'Ivan',
    email: 'Ivan@email.com',
    didCome: false,
  },
];

export const AttendanceColumnsNew = ({
  setDataTable,
}: {
  setDataTable: React.Dispatch<SetStateAction<AttendanceColumnsDataType[]>>;
}) => {
  return [
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
      render: (_: any, record: AttendanceColumnsDataType) => {
        return (
          <>
            {record.didCome && (
              <InputNumber
                placeholder={`${record.accruedCurrency} ШП`}
                defaultValue={record.accruedCurrency || undefined}
                onChange={_debounce((value: number) => {
                  if (value) {
                    record.accruedCurrency = value;
                  } else {
                    record.accruedCurrency = 0;
                  }
                  setDataTable((prevState: any[]) => [
                    ...prevState.map((student) =>
                      student.key === record.key ? record : student
                    ),
                  ]);
                }, 600)}
              ></InputNumber>
            )}
          </>
        );
      },
    },
  ];
};

// const AttendanceColumns: ColumnsType<AttendanceColumnsDataType> = [
//   {
//     title: 'Имя',
//     dataIndex: 'learner',
//     key: 'learner',
//   },
//   {
//     title: 'Email',
//     dataIndex: 'email',
//     key: 'email',
//   },
//   {
//     title: 'Начислить ШП',
//     dataIndex: '',
//     key: 'x',
//     width: 150,
//     render: (_, record: AttendanceColumnsDataType) => {
//       return (
//         <>
//           {record.didCome && (
//             <InputNumber
//               placeholder={`${record.accruedCurrency} ШП`}
//               defaultValue={record.accruedCurrency || undefined}
//               onChange={_debounce((value: number) => {
//                 if (value) {
//                   record.accruedCurrency = value;
//                 } else {
//                   record.accruedCurrency = 0;
//                 }
//                 setDataTable((prevState) => [
//                   ...prevState.map((student) =>
//                     student.key === record.key ? record : student
//                   ),
//                 ]);
//               }, 600)}
//             ></InputNumber>
//           )}
//         </>
//       );
//     },
//   },
// ];

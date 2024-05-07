'use client';

import { Key, useEffect, useMemo, useState } from 'react';
import { ColumnsType, TableProps } from 'antd/es/table';

// @ts-ignore
import _debounce from 'lodash.debounce';
import { Button, ConfigProvider, InputNumber, Space, Table } from 'antd';

import tableStyles from '../table.module.css';

// import {
//   useGetAttendanceQuery,
//   useUpdateAttendanceMutation,
// } from '@/redux/services/adminApi';

import { AttendanceInfo } from '@/types/api';

import { useGetAttendanceQuery } from '@/redux/services/api';
import { useUpdateAttendanceMutation } from '@/redux/services/api';
// import { UpdateAttendanceApiArg } from '@/types/api';
import type { AttendanceUpdateRequest } from '@/types/api';

export type AttendanceColumnsDataType = {
  key: string;
  learner: string;
  email: string;
  didCome: boolean;
  accruedCurrency?: number | null;
  cachedAccruedCurrency?: number;
};

export function AttendanceTable({
  lessonId,
  onRow,
}: {
  lessonId: string;
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<AttendanceUpdateRequest>({
    lessonId: lessonId,
    learners: [],
  });

  const { data, isLoading, isError, isFetching } =
    useGetAttendanceQuery(lessonId);

  const [dataForTable, setDataForTable] = useState<AttendanceColumnsDataType[]>(
    []
  );

  const [trigger, { isLoading: isL, isSuccess: isS }] =
    useUpdateAttendanceMutation();

  useEffect(() => {
    console.log('ATTEN DATA: ', data);
    const d = data?.learners.map<AttendanceColumnsDataType>((learner) => {
      const res: AttendanceColumnsDataType = {
        key: learner.learner.id,
        learner: learner.learner.name,
        email: learner.learner.email,
        didCome: learner.hasCome,
        accruedCurrency: learner.accruedСurrency,
      };
      return res;
    });
    setDataForTable(d || []);
  }, [data]);

  // const dataForTable = useMemo(() => {
  //   return data?.learners.map<AttendanceColumnsDataType>((learner) => {
  //     const res: AttendanceColumnsDataType = {
  //       key: learner.learner.id,
  //       learner: learner.learner.name,
  //       email: learner.learner.email,
  //       didCome: learner.hasCome,
  //       accruedCurrency: learner.accruedСurrency,
  //     };
  //     return res;
  //   });
  // }, [data]);

  const AttendanceColumns: ColumnsType<AttendanceColumnsDataType> = [
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
        return (
          <>
            {record.didCome && (
              <InputNumber
                placeholder={`${record.accruedCurrency} ШП`}
                defaultValue={record.accruedCurrency || undefined}
                // formatter={(value) => `ШП ${value}`}
                onChange={_debounce((value: number) => {
                  if (value) {
                    record.accruedCurrency = value;
                  } else {
                    record.accruedCurrency = 0;
                  }
                  setDataForTable((prevState) => [
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

  // useEffect(() => {
  //   console.log('FormData:', formData);
  // }, [formData]);

  useEffect(() => {
    console.log('Table:', dataForTable);
    setFormData((prevState): AttendanceUpdateRequest => {
      return {
        ...prevState,
        learners: dataForTable
          .filter((st) => st.didCome)
          .map((st) => {
            const res: {
              learnerId: string;
              accruedСurrency: number | null;
            } = {
              learnerId: st.key,
              accruedСurrency: st.accruedCurrency!,
            };
            return res;
          }),
      };
    });
  }, [dataForTable]);

  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>(() => {
    const students = dataForTable.filter((e) => e.didCome).map((e) => e.key);
    console.log('students did come:', students);
    return students;
  });

  const onSelectChange = (
    newSelectedRowKeys: Key[],
    selectRows: AttendanceColumnsDataType[]
  ) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const handleOnSelect = (record: any, selected: any) => {
    record.didCome = selected;

    if (selected) {
      if (record.cachedAccruedCurrency) {
        record.accruedCurrency = record.cachedAccruedCurrency;
      } else {
        record.accruedCurrency = 0;
      }
    } else {
      record.cachedAccruedCurrency = record.accruedCurrency;
      record.accruedCurrency = 0;
    }

    setDataForTable((prevState) => [
      ...prevState.map((student) =>
        student.key === record.key ? record : student
      ),
    ]);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            controlItemBgActive: '#fafafa',
            controlItemBgActiveHover: '#e6f4ff',
          },
        },
      }}
    >
      <div>Lesson ID: {lessonId}</div>
      <Table
        columns={AttendanceColumns}
        dataSource={dataForTable}
        pagination={false}
        // loading={isFetching || isLoading}
        className={tableStyles.table}
        rowClassName={tableStyles.row}
        scroll={{ x: true }}
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
          onSelect: handleOnSelect,
          hideSelectAll: true,
        }}
        onRow={onRow}
      ></Table>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '1rem 0',
        }}
      >
        <Space size={32}>
          <div>Выбрано: {selectedRowKeys.length}</div>
          {/* <Button size={'large'} onClick={() => trigger(formData)}> */}
          <Button size={'large'} onClick={() => trigger(formData)}>
            Подтвердить
          </Button>
        </Space>
      </div>
    </ConfigProvider>
  );
}

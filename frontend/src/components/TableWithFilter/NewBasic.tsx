'use client';
import { useEffect, useState, SetStateAction } from 'react';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';

// @ts-ignore
import _debounce from 'lodash.debounce';
import { Table, Form } from 'antd';
import { AccountsFilter } from '@/components/TableWithFilter/Filter/Filters/AccountsFilter';
import {
  DEBOUNCE_DURATION,
  SORT_ORDER,
} from '@/components/TableWithFilter/entity';
import { accountsColumns, AttendanceColumnsNew } from './TableColumns';
import tableStyles from './table.module.css';
import { LessonNumber, SortOrder } from '@/types/common';
import { NameFormItem, EmailFormItem } from '../Forms/FormItems/Filters';
import {
  useGetAccountsQuery,
  useGetAttendanceQuery,
} from '@/redux/services/adminApi';
// import { TableProps } from 'antd/es/table';
import { TableProps } from 'antd/lib';
import formStyles from './Filter/form.module.css';

import type { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import type { GetAccountsApiArg, AttendanceRequest } from '@/types/requests';
import { AttendanceColumnsDataType, AttendanceColumnsDataMock } from './TableColumns/AttendanceColumns';

type AccountsRequestType = {
  name?: string;
  email?: string;
  teamNumber?: string;
  role?: string;
  sortProperty?: string;
  sortOrder?: string;
  page?: number;
  pageSize?: number;
};
type Props = {
  columns: ColumnsType<any>;
};

const BasicFilter = ({
  onChangeEvent,
  children,
  total = 0,
}: {
  onChangeEvent: any;
  children?: React.ReactNode;
  total?: number;
}) => {
  return (
    <div className={formStyles.wrapper}>
      <div className={formStyles.header}>
        <h3>Фильтры</h3>
        <div className={formStyles.header_span}>
          <span>Найдено:</span>
          <span>{total}</span>
        </div>
      </div>
      <Form
        layout={'inline'}
        size={'large'}
        onValuesChange={onChangeEvent}
        className={''}
      >
        {children}
      </Form>
    </div>
  );
};

type AttendanceTableColumnsType = (
  prop: SetStateAction<any>
) => ColumnsType<any>;

export function BasicTableWithFilter<T, T1>({
  filterFormItems,
  //   tableColumns,
  //   attendanceTableColumns,
  tableProps,
  setFormData,
  dataTable, //   useQueryMethod,
}: {
  filterFormItems: React.ReactElement;
  //   tableColumns?: ColumnsType<any>;
  //   attendanceTableColumns?: AttendanceTableColumnsType;
  tableProps: TableProps;
  setFormData: React.Dispatch<SetStateAction<T>>;
  dataTable: T1[];

  //   useQueryMethod: UseQuery<any>;
}) {
  //   const [formData, setFormData] = useState<s>({
  //     page: 1,
  //     pageSize: 10,
  //   });

  //   const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  //   const [dataTable, setDataTable] = useState<any[]>([]);
  // //   const { data, isLoading, isError, isFetching } =
  // //     useGetAccountsQuery(dataForReq);
  // const { data, isLoading, isError, isFetching } =
  // useQueryMethod(dataForReq);

  console.log(useGetAccountsQuery);

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: any,
    sorter: any
  ) => {
    setFormData((prevState: T) => {
      return {
        ...prevState,
        page: pagination.current,
        pageSize: pagination.pageSize,
        sortProperty: sorter.field,
        sortOrder: sorter.order === 'descend' ? SortOrder.Desc : SortOrder.Asc,
      };
    });
  };

  const handleFilterChanges = (changedValues: any, allValues: any) => {
    setFormData((prevState: T) => {
      return {
        ...prevState,
        ...changedValues,
      };
    });
  };

  return (
    <>
      <BasicFilter onChangeEvent={handleFilterChanges}>
        {filterFormItems}
      </BasicFilter>
      <Table
        // columns={tableColumns || attendanceTableColumns?.(setDataTable)}
        dataSource={dataTable}
        className={tableStyles.table}
        // scroll={{ x: true }}
        {...tableProps}
      ></Table>
    </>
  );
}

export function FilledExampleBasicTableWithFilter() {
  const [formData, setFormData] = useState<GetAccountsApiArg>({
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<(typeof accountsColumns)[]>([]);
  const { data, isLoading, isError, isFetching } =
    useGetAccountsQuery(dataForReq);

  return (
    <>
      <BasicTableWithFilter
        filterFormItems={
          <>
            <NameFormItem />
            <EmailFormItem />
          </>
        }
        // tableColumns={accountsColumns}
        // attendanceTableColumns={AttendanceColumnsNew}
        tableProps={{
          scroll: { x: true },
          columns: accountsColumns,
          pagination: { total: data?.pagination?.totalElements },
        }}
        setFormData={setFormData}
        dataTable={[
          {
            key: '123123',
            name: 'ivan',
            email: 'ivan',
            team: '#1',
            role: 'BABY',
            balance: 100,
          },
          {
            key: '12312312',
            name: 'ivan2',
            email: 'ivan2',
            team: '#12',
            role: 'BABY2',
            balance: 1002,
          },
        ]}
      />
    </>
  );
}

export function FilledExample2BasicTableWithFilter({
  lessonId = 123,
}: {
  lessonId: LessonNumber;
}) {
  const [formData, setFormData] = useState<AttendanceRequest>({
    lessonId: lessonId,
    learners: [],
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<AttendanceColumnsDataType[]>([]);
  const { data, isLoading, isError, isFetching } =
    useGetAttendanceQuery(lessonId);

  return (
    <>
      <BasicTableWithFilter
        filterFormItems={
          <>
            <NameFormItem />
            <EmailFormItem />
            <EmailFormItem />
            <EmailFormItem />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: AttendanceColumnsNew({setDataTable}),
          dataSource: AttendanceColumnsDataMock,
          pagination: false,
        }}
        setFormData={setFormData}
        dataTable={AttendanceColumnsDataMock}
      />
    </>
  );
}

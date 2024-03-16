'use client';
import { useEffect, useState, SetStateAction, useMemo } from 'react';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';

// @ts-ignore
import _debounce from 'lodash.debounce';
import { Table, Form } from 'antd';
import tableStyles from './table.module.css';
import { LessonNumber, SortOrder } from '@/types/common';
import { TableProps } from 'antd/lib';
import formStyles from './form.module.css'
import { SorterResult } from 'antd/es/table/interface';

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
  tableProps,
  formData,
  setFormData,
  setDataForReq,
}: {
  filterFormItems: React.ReactElement;
  tableProps: TableProps;
  formData: T;
  setFormData: React.Dispatch<SetStateAction<T>>;
  setDataForReq: React.Dispatch<SetStateAction<T>>;
}) {
  const handleTableChange: TableProps<any>['onChange'] = (
    pagination,
    filters,
    sorter
  ) => {
    console.log('SORTER: ', sorter);
    setFormData((prevState) => {
      return {
        ...prevState,
        page: pagination.current,
        pageSize: pagination.pageSize,
        sortProperty: (sorter as SorterResult<any>).field,
        sortOrder:  (sorter as SorterResult<any>).order === 'descend' ? SortOrder.Desc : SortOrder.Asc,
        // sortProperty: sorter.field,
        // sortOrder: sorter.order === 'descend' ? SortOrder.Desc : SortOrder.Asc,
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

  const debounceDataForReq = useMemo(
    () =>
      _debounce((data: any) => {
        setDataForReq(data);
      }, 700),
    []
  );

  useEffect(() => {
    debounceDataForReq(formData);
  }, [formData, debounceDataForReq]);

  return (
    <>
      <BasicFilter onChangeEvent={handleFilterChanges}>
        {filterFormItems}
      </BasicFilter>
      <Table
        // columns={tableColumns || attendanceTableColumns?.(setDataTable)}
        // dataSource={dataTable}
        className={tableStyles.table}
        scroll={{ x: true }}
        onChange={handleTableChange}
        {...tableProps}
      ></Table>
    </>
  );
}

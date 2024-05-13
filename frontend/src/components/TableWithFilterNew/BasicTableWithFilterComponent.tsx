import { TableProps, Table } from 'antd';
import { SorterResult } from 'antd/es/table/interface';
import { SetStateAction, useMemo, useEffect } from 'react';

import { prepareFormUtil } from './utils';

// @ts-ignore
import _debounce from 'lodash.debounce';

import tableStyles from './table.module.css';
import { BasicFilter } from './BasicFilter';

export function BasicTableWithFilter<T>({
  filterFormItems,
  tableProps,
  formData,
  setFormData,
  setDataForReq,
  totalNumber,
  filterInitialValues,
  tableInitialValues
}: {
  filterFormItems: React.ReactElement;
  tableProps: TableProps;
  formData: T;
  setFormData: React.Dispatch<SetStateAction<T>>;
  setDataForReq: React.Dispatch<SetStateAction<T>>;
  totalNumber?: number;
  filterInitialValues?: any
  tableInitialValues?: any
}) {
  const handleTableChange: TableProps<any>['onChange'] = (
    pagination,
    filters,
    sorter
  ) => {
    console.log('SORTER: ', sorter);
    setFormData((prevState) => {
      const sortField = (sorter as SorterResult<any>).field;
      const sortOrder = checkSorter(sorter as SorterResult<any>);

      const sort =
        sortField && sortOrder ? sortField + ',' + sortOrder : undefined;

      return {
        ...prevState,
        page: pagination.current,
        pageSize: pagination.pageSize,
        sort,
      };
    });
  };

  const checkSorter = (sorter: SorterResult<any>) => {
    switch (sorter.order) {
      case 'descend':
        return 'desc'; //SortOrder.Desc;
      case 'ascend':
        return 'asc'; //SortOrder.Asc;
      default:
        return undefined;
    }
  };

  const handleFilterChanges = (changedValues: any, allValues: any) => {
    setFormData((prevState: T) => {
      return {
        ...prevState,
        ...prepareFormUtil(changedValues),
        // ...prepareFormUtil(allValues),
      };
    });
  };

  const debounceDataForReq = useMemo(
    () =>
      _debounce((data: any) => {
        setDataForReq(data);
        console.log('REQ: ', data);
      }, 700),
    []
  );

  useEffect(() => {
    debounceDataForReq(formData);
  }, [formData, debounceDataForReq]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <BasicFilter onChangeEvent={handleFilterChanges} total={totalNumber} initialValues={filterInitialValues}>
        {filterFormItems}
      </BasicFilter>
      <Table
        className={tableStyles.table}
        scroll={{ x: true }}
        onChange={handleTableChange}
        // sortDirections={tableInitialValues}
        {...tableProps}
      ></Table>
    </div>
  );
}

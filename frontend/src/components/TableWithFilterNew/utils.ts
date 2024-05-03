import dayjs from 'dayjs';
import { TablePaginationConfig } from 'antd/es/table';
import { Dispatch, SetStateAction } from 'react';

export function prepareFormUtil(values: any) {
  for (const [key, val] of Object.entries(values)) {
    if (val instanceof dayjs) {
      values[key] = values[key].toISOString();
    }

    if (val === null) {
      values[key] = undefined;
    }
  }

  return values;
}

export function handleTableChangeUtil<T>(
  pagination: TablePaginationConfig,
  filters: any,
  sorter: any,
  setState: Dispatch<SetStateAction<T>>
) {
  setState((prevState): T => {
    return {
      ...prevState,
      page: pagination.current,
      pageSize: pagination.pageSize,
      sortProperty: sorter.field,
      sortOrder: sorter.order === 'descend' ? 'desc' : 'asc',
    };
  });
}

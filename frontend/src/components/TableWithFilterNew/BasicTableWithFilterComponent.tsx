import { SortOrder } from '@/types/common';
import { Form, TableProps, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { SorterResult } from 'antd/es/table/interface';
import { SetStateAction, useMemo, useEffect } from 'react';

import { prepareFormUtil } from './utils';

// @ts-ignore
import _debounce from 'lodash.debounce';

import formStyles from './form.module.css';
import tableStyles from './table.module.css';
import { BasicFilter } from './BasicFilter';

// const BasicFilter = ({
//   onChangeEvent,
//   children,
//   total = 0,
// }: {
//   onChangeEvent: any;
//   children?: React.ReactNode;
//   total?: number;
// }) => {
//   return (
//     <div className={formStyles.wrapper}>
//       <div className={formStyles.header}>
//         <h3>Фильтры</h3>
//         <div className={formStyles.header_span}>
//           <span>Найдено:</span>
//           <span>{total}</span>
//         </div>
//       </div>
//       <Form
//         layout={'inline'}
//         size={'large'}
//         onValuesChange={onChangeEvent}
//         className={''}
//       >
//         {children}
//       </Form>
//     </div>
//   );
// };

type AttendanceTableColumnsType = (
  prop: SetStateAction<any>
) => ColumnsType<any>;

export function BasicTableWithFilter<T>({
  filterFormItems,
  tableProps,
  formData,
  setFormData,
  setDataForReq,
  totalNumber,
}: {
  filterFormItems: React.ReactElement;
  tableProps: TableProps;
  formData: T;
  setFormData: React.Dispatch<SetStateAction<T>>;
  setDataForReq: React.Dispatch<SetStateAction<T>>;
  totalNumber?: number;
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
        sortOrder: checkSorter(sorter as SorterResult<any>),
      };
    });
  };

  const checkSorter = (sorter: SorterResult<any>) => {
    switch (sorter.order) {
      case 'descend':
        return SortOrder.Desc;
      case 'ascend':
        return SortOrder.Asc;
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
        console.log("REQ: ", data)
      }, 700),
    []
  );

  useEffect(() => {
    debounceDataForReq(formData);
  }, [formData, debounceDataForReq]);

  return (
    <>
      <BasicFilter onChangeEvent={handleFilterChanges} total={totalNumber}>
        {filterFormItems}
      </BasicFilter>
      <Table
        className={tableStyles.table}
        scroll={{ x: true }}
        onChange={handleTableChange}
        {...tableProps}
      ></Table>
    </>
  );
}

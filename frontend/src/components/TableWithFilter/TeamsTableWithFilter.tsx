import {useEffect, useState} from 'react';
import {TablePaginationConfig} from 'antd/es/table';
import {Table} from 'antd';
import {TeamsFilter} from '@/components/TableWithFilter/Filter/Filters/TeamsFilter';

// @ts-ignore
import _debounce from 'lodash.debounce';
import {DEBOUNCE_DURATION,} from '@/components/TableWithFilter/entity';
import {teamsColumns} from './TableColumns';
import {SortOrder} from "@/types/common"

type TeamsRequestType = {
  teamNumber?: string;
  sortProperty?: string;
  sortOrder?: string;
  page?: number;
  pageSize?: number;
};

export function TeamsTableWithFilter() {
  const [formData, setFormData] = useState<TeamsRequestType>({
    page: 1,
    pageSize: 10,
  });

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: any,
    sorter: any
  ) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        page: pagination.current,
        pageSize: pagination.pageSize,
        sortProperty: sorter.field,
        sortOrder:
          sorter.order === 'descend'
            ? SortOrder.Desc
            : SortOrder.Asc,
      };
    });
  };

  const handleFormChanges = (changedValues: any, allValues: any) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        ...changedValues,
      };
    });
  };

  useEffect(() => {
    console.log('FormData:', formData);
  }, [formData]);

  const debouncedHandleForm = _debounce(
    handleFormChanges,
    DEBOUNCE_DURATION.FORM
  );
  const debouncedHandleTable = _debounce(
    handleTableChange,
    DEBOUNCE_DURATION.TABLE
  );
  const totalData = 0;

  return (
    <>
      <TeamsFilter onChangeEvent={debouncedHandleForm}></TeamsFilter>

      <Table
        columns={teamsColumns}
        dataSource={[]}
        onChange={debouncedHandleTable}
        pagination={{ total: totalData }}
      ></Table>
    </>
  );
}

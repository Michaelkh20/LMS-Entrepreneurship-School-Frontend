'use client';

import {
  NameFormItem,
  EmailFormItem,
  TeamNumberFormItem
} from '@/components/Forms/FormItems/Filters';
import { accountsColumns } from '@/components/TableWithFilter/TableColumns';
import { useGetTeamsQuery } from '@/redux/services/adminApi';
import { GetTeamsApiArg } from '@/types/requests';
import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';

export function TeamTableWithFilter() {
  const [formData, setFormData] = useState<GetTeamsApiArg>({
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<(typeof accountsColumns)[]>([]);
  const { data, isLoading, isError, isFetching } = useGetTeamsQuery(dataForReq);

  //   useEffect(() => {
  //     console.log('FormData1:', formData);
  //   }, [formData]);

  return (
    <>
      <BasicTableWithFilter
        filterFormItems={
          <>
            <TeamNumberFormItem />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: accountsColumns,
          pagination: { total: data?.pagination?.totalElements },
          dataSource: dataTable,
          rowKey: 'id',
        }}
        formData={formData}
        setFormData={setFormData}
        setDataForReq={setDataForReq}
      />
    </>
  );
}

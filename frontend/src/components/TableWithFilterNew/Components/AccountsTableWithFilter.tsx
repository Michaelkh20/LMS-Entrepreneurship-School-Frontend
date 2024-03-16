'use client'

import {
  NameFormItem,
  EmailFormItem,
} from '@/components/Forms/FormItems/Filters';
import { accountsColumns } from '@/components/TableWithFilter/TableColumns';
import { useGetAccountsQuery } from '@/redux/services/adminApi';
import { GetAccountsApiArg } from '@/types/requests';
import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';

export function AccountsTableWithFilter() {
  const [formData, setFormData] = useState<GetAccountsApiArg>({
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<(typeof accountsColumns)[]>([]);
  const { data, isLoading, isError, isFetching } =
    useGetAccountsQuery(dataForReq);

  useEffect(() => {
    console.log('FormData1:', formData);
  }, [formData]);

  return (
    <>
      <BasicTableWithFilter
        filterFormItems={
          <>
            <NameFormItem />
            <EmailFormItem />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: accountsColumns,
          pagination: { total: data?.pagination?.totalElements },
          dataSource: [
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
          ],
        }}
        formData={formData}
        setFormData={setFormData}
        setDataForReq={setDataForReq}
      />
    </>
  );
}

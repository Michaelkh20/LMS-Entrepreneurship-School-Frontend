'use client';

import {
  NameFormItem,
  TeamNumberFormItem,
  RoleFormItem,
} from '@/components/Forms/FormItems/Filters';
import { GetAccountsApiArg } from '@/types/requests';
import { useState, useEffect } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { Name, Email, TeamNumber, Balance, Id } from '@/types/common';
import { ColumnsType } from 'antd/es/table';
import { useGetAccountsListQuery } from '@/redux/services/adminApi';
import roleToString from '@/util/roleToString';
import { dto } from '@dto';
import Role = dto.Role;
import { useRouter } from 'next/navigation';
import { TableProps } from 'antd/lib';

type AccountColumnsDataType = {
  id: Id;
  name: Name;
  email: Email;
  team: TeamNumber[];
  role: Role;
  balance: Balance;
};

const AccountsColumns: ColumnsType<AccountColumnsDataType> = [
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
  },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  {
    title: 'Команда',
    dataIndex: 'team',
    key: 'team',
    render(value, record, index) {
      return record.team || '-';
    },
  },
  { title: 'Роль', dataIndex: 'role', key: 'role' },
  { title: 'Баланс', dataIndex: 'balance', key: 'balance' },
];

export function AccountsTableWithFilter({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetAccountsApiArg>({
    page: 1,
    pageSize: 10,
  });

  const router = useRouter();

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const { data } = useGetAccountsListQuery(dataForReq);

  console.log(data);

  const dataForTable = data?.accountList.map((item) => {
    return {
      id: item.id,
      name: item.partName,
      email: item.email,
      team: item.teamShort?.number ? [item.teamShort?.number] : [],
      role: roleToString(item.role),
      balance: item.balance,
    };
  });

  // useEffect(() => {
  //   console.log('FormData1:', dataForReq);
  // }, [dataForReq]);


  return (
    <>
      <BasicTableWithFilter
        totalNumber={data?.totalElems}
        filterFormItems={
          <>
            <NameFormItem />
            <TeamNumberFormItem />
            <RoleFormItem />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: AccountsColumns,
          pagination: { total: data?.totalElems },
          dataSource: dataForTable,
          rowKey: 'id',
          onRow: onRow || function(record, rowIndex){
            return {
              onClick: (ev) => {
                console.log(record);
                router.push(`/admin/accounts/${record.id}`);
              }, // click row
            };
          }
          // onRow: (record, rowIndex) => {
          //   return {
          //     onClick: (ev) => {
          //       console.log(record);
          //       router.push(`/admin/accounts/${record.id}`);
          //     }, // click row
          //   };
          // },
        }}
        formData={formData}
        setFormData={setFormData}
        setDataForReq={setDataForReq}
      />
    </>
  );
}

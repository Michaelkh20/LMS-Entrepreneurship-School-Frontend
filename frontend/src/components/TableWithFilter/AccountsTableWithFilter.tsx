import {useEffect, useMemo, useState} from 'react';
import {TablePaginationConfig} from 'antd/es/table';

// @ts-ignore
import _debounce from 'lodash.debounce';
import {Table} from 'antd';
import {AccountsFilter} from '@/components/TableWithFilter/Filter/Filters/AccountsFilter';
import {DEBOUNCE_DURATION} from '@/components/TableWithFilter/entity';
import {SortOrder} from "@/types/common"
import styles from "./table.module.css"
import {accountsColumns} from './TableColumns';

import {useGetAccountsQuery} from "@/redux/services/adminApi"
import {GetAccountsApiArg} from "@/types/requests"
import {AccountColumnsDataType} from "@/components/TableWithFilter/TableColumns/AccountsColumns";
import {prepareFormUtil} from "@/components/TableWithFilter/utils";
import {useRouter} from "next/navigation";

export function AccountsTableWithFilter() {


    const [formData, setFormData] = useState<GetAccountsApiArg>({
        page: 1,
        pageSize: 10,
    });
    const [dataForReq, setDataForReq] = useState<typeof formData>(formData)
    const {data, isLoading, isError, isFetching} = useGetAccountsQuery(dataForReq)
    const [dataTable, setDataTable] = useState<AccountColumnsDataType[]>([])

    const {push} = useRouter()

    const handleTableChange = (
        pagination: TablePaginationConfig,
        filters: any,
        sorter: any
    ) => {
        setFormData((prevState): GetAccountsApiArg => {
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
        setFormData((prevState): GetAccountsApiArg => {
            return {
                ...prevState,
                ...prepareFormUtil(allValues),
            };
        });
    };

    useEffect(() => {
        console.log("DATA: ", data)
        setDataTable(() => {
            return data ? data.content.map((e): AccountColumnsDataType => {
                    return {
                        id: e.id,
                        name: e.name,
                        email: e.email,
                        team: e.teamNumber,
                        role: e.role,
                        balance: e.balance
                    }
                }
            ) : []
        })
    }, [data]);

    const debounceDataForReq = useMemo(
        () => _debounce((data: any) => {
            setDataForReq(data)
        }, DEBOUNCE_DURATION.ALL),
        [])


    useEffect(() => {
        debounceDataForReq(formData)
    }, [formData, debounceDataForReq])

    return (
        <>
            <AccountsFilter onChangeEvent={handleFormChanges}></AccountsFilter>
            <Table
                columns={accountsColumns}
                dataSource={dataTable}
                onChange={handleTableChange}
                rowKey={"id"}
                loading={isFetching || isLoading}
                pagination={{total: data?.pagination.totalElements}}
                scroll={{x: true}}
                rowClassName={styles.row_pointer}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: (event) => {
                            push(`/admin/accounts/${record.id}`)

                        }
                    };
                }}
            ></Table>
        </>
    );
}

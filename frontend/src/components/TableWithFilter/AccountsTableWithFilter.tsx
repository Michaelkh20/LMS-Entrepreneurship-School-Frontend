import {useEffect, useState} from "react";
import {ColumnsType, TablePaginationConfig} from "antd/es/table";

// @ts-ignore
import _debounce from "lodash.debounce";
import {Table} from "antd";
import {AccountsFilter} from "@/components/TableWithFilter/Filter/Filters/AccountsFilter";
import {DEBOUNCE_DURATION, SORT_ORDER} from "@/components/TableWithFilter/entity";
import {accountsColumns} from "./TableColumns";
import tableStyles from "./table.module.css"


type AccountsRequestType = {
    name?: string;
    email?: string;
    teamNumber?: string;
    role?: string;
    sortProperty?: string;
    sortOrder?: string;
    page?: number;
    pageSize?: number;
}
type Props = {
    columns: ColumnsType<any>,
}

export function AccountsTableWithFilter() {


    const [formData, setFormData] = useState<AccountsRequestType>(
        {
            page: 1,
            pageSize: 10
        }
    )

    const handleTableChange = (pagination: TablePaginationConfig, filters: any, sorter: any) => {
        setFormData(prevState => {
            return {
                ...prevState,
                page: pagination.current,
                pageSize: pagination.pageSize,
                sortProperty: sorter.field,
                sortOrder: sorter.order === 'descend' ? SORT_ORDER.DESCENDING : SORT_ORDER.ASCENDING
            }
        })
    };

    const handleFormChanges = (changedValues: any, allValues: any) => {
        setFormData(prevState => {
            return {
                ...prevState,
                ...changedValues
            }
        })
    }

    useEffect(() => {
        console.log("FormData:", formData)
    }, [formData])

    const debouncedHandleForm = _debounce(handleFormChanges, DEBOUNCE_DURATION.FORM)
    const debouncedHandleTable = _debounce(handleTableChange, DEBOUNCE_DURATION.TABLE)
    const totalData = 0;

    return (
        <>
            <AccountsFilter onChangeEvent={debouncedHandleForm}></AccountsFilter>

            <Table columns={accountsColumns}
                   dataSource={[]}
                   onChange={debouncedHandleTable}
                   pagination={{total: totalData}}
                   className={tableStyles.table}
                   scroll={{x: true}}
            >
            </Table>
        </>
    )
}
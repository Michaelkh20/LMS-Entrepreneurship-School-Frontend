import {useEffect, useState} from "react";
import {ColumnsType, TablePaginationConfig} from "antd/es/table";

// @ts-ignore
import _debounce from "lodash.debounce";
import {Table} from "antd";
import {DEBOUNCE_DURATION, SORT_ORDER} from "@/components/TableWithFilter/entity";
import {currencyTransferColumns} from "./TableColumns";
import tableStyles from "./table.module.css"
import {CurrencyTransferFilter} from "@/components/TableWithFilter/Filter/Filters/CurrencyTransferFilter";
import {CurrencyTransferColumnsDataType} from "@/components/TableWithFilter/TableColumns/CurrencyTransferColumns";


//todo
type CurrencyTransferRequestType = {
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

const data: CurrencyTransferColumnsDataType[] = [
    {
        key: "1",
        learner: "Ivan",
        receiver: "Ivan",
        status: "Waiting",
        dateTime: "22.22.2222",
        sum: 200
    },
    {
        key: "2",
        learner: "Ivan",
        receiver: "Ivan",
        status: "Declined",
        dateTime: "22.22.2222",
        sum: 300
    }
]

export function CurrencyTransferTableWithFilter() {


    const [formData, setFormData] = useState<CurrencyTransferRequestType>(
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
            <CurrencyTransferFilter onChangeEvent={debouncedHandleForm}></CurrencyTransferFilter>

            <Table columns={currencyTransferColumns}
                   dataSource={data}
                   onChange={debouncedHandleTable}
                   pagination={{total: totalData}}
                   className={tableStyles.table}
                   scroll={{x: true}}
            >
            </Table>
        </>
    )
}
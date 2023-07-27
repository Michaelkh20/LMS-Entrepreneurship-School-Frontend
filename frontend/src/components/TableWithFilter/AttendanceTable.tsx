import {Key, useEffect, useState} from "react";
import {ColumnsType, TablePaginationConfig} from "antd/es/table";

// @ts-ignore
import _debounce from "lodash.debounce";
import {Table} from "antd";
import {DEBOUNCE_DURATION, SORT_ORDER} from "@/components/TableWithFilter/entity";
import {AttendanceColumns, currencyTransferColumns} from "./TableColumns";
import tableStyles from "./table.module.css"

import {AttendanceColumnsDataType} from "@/components/TableWithFilter/TableColumns/AttendanceColumns";


//todo
type AttendanceRequestType = {
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

const data: AttendanceColumnsDataType[] = [
    {
        key: "1",
        learner: "Ivan",
        email: "Ivan@email.com",
        didCome: false
    },
    {
        key: "2",
        learner: "Ivan",
        email: "Ivan@email.com",
        didCome: true
    }
]

export function AttendanceTable() {


    const [formData, setFormData] = useState<AttendanceRequestType>(
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

    // const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
    //
    // const onSelectChange = (newSelectedRowKeys: Key[]) => {
    //     console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    //     setSelectedRowKeys(newSelectedRowKeys);
    // };

    return (
        <>
            <Table columns={AttendanceColumns}
                   dataSource={data}
                   onChange={debouncedHandleTable}
                   pagination={{total: totalData}}
                   className={tableStyles.table}
                   scroll={{x: true}}
                // rowSelection={{
                //     selectedRowKeys,
                //     onChange: onSelectChange
                // }}
                   rowSelection={{type: "checkbox"}}
            >
            </Table>
        </>
    )
}
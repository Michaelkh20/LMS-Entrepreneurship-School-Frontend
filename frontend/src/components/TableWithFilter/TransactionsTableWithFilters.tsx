import {useEffect, useState} from 'react';
import {ColumnsType, TablePaginationConfig} from 'antd/es/table';

// @ts-ignore
import _debounce from 'lodash.debounce';
import {Table} from 'antd';
import {ClaimStatus, ClaimType, Id, LotNumber, SortOrder, TransactionType} from "@/types/common"
import tableStyles from './table.module.css';

import {GetTransactionsApiArg} from "@/types/requests"
import {TransactionsFilter} from "@/components/TableWithFilter/Filter/Filters/TransactionsFilter";



type TransactionsColumnsDataType = {
    id: Id,
    learner: string,
    type: string,
    dateTime: string,
    description: string,
    sum: number
}

const TransactionsColumns: ColumnsType<TransactionsColumnsDataType> = [
    {
        title: 'Ученик',
        dataIndex: 'learner',
        key: 'learner',
        sorter: true
    },
    {title: 'Тип', dataIndex: 'type', key: 'type'},
    {title: 'Описание', dataIndex: 'description', key: 'description'},
    {title: 'Дата', dataIndex: 'dateTime', key: 'dateTime'},
    {title: 'Сумма', dataIndex: 'sum', key: 'sum'},
]

const data: TransactionsColumnsDataType[] = [
    {
        id: 1,
        learner: 'Ivan',
        type: TransactionType.FailedDeadline,
        dateTime: '22.22.2222',
        description: "минус",
        sum: 200
    }
];

export function TransactionsTableWithFilter() {
    const [formData, setFormData] = useState<GetTransactionsApiArg>(
        {
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

    const totalData = 0;

    return (
        <>
            <TransactionsFilter
                onChangeEvent={handleFormChanges}
            ></TransactionsFilter>

            <Table
                columns={TransactionsColumns}
                dataSource={data}
                rowKey={"id"}
                onChange={handleTableChange}
                pagination={{total: totalData}}
                className={tableStyles.table}
                scroll={{x: true}}
            ></Table>
        </>
    );
}

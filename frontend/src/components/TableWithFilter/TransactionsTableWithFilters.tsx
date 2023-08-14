import {useEffect, useMemo, useState} from 'react';
import {ColumnsType, TablePaginationConfig} from 'antd/es/table';

// @ts-ignore
import _debounce from 'lodash.debounce';
import {Table} from 'antd';
import {ClaimStatus, ClaimType, Id, LotNumber, SortOrder} from "@/types/common"
import tableStyles from './table.module.css';

import {GetTransactionsApiArg} from "@/types/requests"
import {TransactionsFilter} from "@/components/TableWithFilter/Filter/Filters/TransactionsFilter";
import {useGetTransactionsQuery} from "@/redux/services/adminApi";
import {prepareFormUtil} from "@/components/TableWithFilter/utils";



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
export function TransactionsTableWithFilter() {
    const [formData, setFormData] = useState<GetTransactionsApiArg>(
        {
        page: 1,
        pageSize: 10,
    });

    const [dataForReq, setDataForReq] = useState<typeof formData>(formData)
    const {data, isLoading, isError, isFetching} = useGetTransactionsQuery(dataForReq)
    const [dataTable, setDataTable] = useState<TransactionsColumnsDataType[]>([])

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
                ...prepareFormUtil(allValues),
            };
        });
    };

    useEffect(() => {
        console.log('FormData:', formData);
    }, [formData]);

    useEffect(() => {
        console.log("DATA: ", data)
        setDataTable(() => {
            return data ? data.content.map((e): TransactionsColumnsDataType => {
                    return {
                        id: e.id,
                        learner: e.learner.name,
                        dateTime: e.dateTime,
                        description: e.description,
                        sum: e.sum,
                        type: e.type
                    }
                }
            ) : []
        })
    }, [data]);

    const debounceDataForReq = useMemo(
        () => _debounce((data: any) => {
            setDataForReq(data)
        }, 2000),
        [])

    useEffect(() => {
        debounceDataForReq(formData)
    }, [formData, debounceDataForReq])

    return (
        <>
            <TransactionsFilter
                onChangeEvent={handleFormChanges}
            ></TransactionsFilter>

            <Table
                columns={TransactionsColumns}
                dataSource={dataTable}
                rowKey={"id"}
                onChange={handleTableChange}
                loading={isFetching || isLoading}
                pagination={{total: data?.pagination.totalElements}}
                className={tableStyles.table}
                scroll={{x: true}}
            ></Table>
        </>
    );
}

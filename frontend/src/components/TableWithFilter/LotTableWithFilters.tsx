import {useEffect, useMemo, useState} from 'react';
import {ColumnsType, TablePaginationConfig} from 'antd/es/table';

// @ts-ignore
import _debounce from 'lodash.debounce';
import {Table} from 'antd';
import {ClaimStatus, ClaimType, Id, LotNumber, SortOrder, TransactionType} from "@/types/common"
import tableStyles from './table.module.css';

import {GetLotsApiArg} from "@/types/requests"
import {LotFilter} from "@/components/TableWithFilter/Filter/Filters/LotFilter";
import {useGetLotsQuery} from "@/redux/services/adminApi";
import {ClaimTransferColumnsDataType} from "@/components/TableWithFilter/TableColumns/ClaimTransferColumns";



type LotColumnsDataType = {
    id: Id,
    number: number,
    title: string,
    performer: string | null,
    price: number
}

const LotColumns: ColumnsType<LotColumnsDataType> = [
    {
        title: 'Лот',
        dataIndex: 'number',
        key: 'number',
        sorter: true
    },
    {title: 'Название', dataIndex: 'title', key: 'title'},
    {title: 'Исполнитель', dataIndex: 'performer', key: 'performer'},
    {title: 'Стоимость', dataIndex: 'price', key: 'price'},
]

const data: LotColumnsDataType[] = [
    {
        id: 1,
        number: 1,
        performer: 'Ivan',
        title: 'какой-то лот',
        price: 200
    }
];

export function LotTableWithFilter() {
    const [formData, setFormData] = useState<GetLotsApiArg>(
        {
        page: 1,
        pageSize: 10,
    });

    const [dataForReq, setDataForReq] = useState<typeof formData>(formData)
    const {data, isLoading, isError, isFetching} = useGetLotsQuery(dataForReq)
    const [dataTable, setDataTable] = useState<LotColumnsDataType[]>([])

    const handleTableChange = (
        pagination: TablePaginationConfig,
        filters: any,
        sorter: any
    ) => {
        setFormData((prevState):GetLotsApiArg => {
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

    useEffect(() => {
        console.log("DATA: ", data)
        setDataTable(() => {
            return data ? data.content.map((e): LotColumnsDataType => {
                    return {
                        id: e.id,
                        number: e.number,
                        title: e.title,
                        performer: e.performerUser?.name || e.performerOther,
                        price: e.price,
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
            <LotFilter
                onChangeEvent={handleFormChanges}
            ></LotFilter>

            <Table
                columns={LotColumns}
                dataSource={dataTable}
                rowKey={"id"}
                onChange={handleTableChange}
                loading={isFetching || isLoading}
                pagination={{total: data?.pagination?.totalElements}}
                className={tableStyles.table}
                scroll={{x: true}}
            ></Table>
        </>
    );
}

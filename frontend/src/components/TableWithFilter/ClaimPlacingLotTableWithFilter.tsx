import {useEffect, useMemo, useState} from 'react';
import {ColumnsType, TablePaginationConfig} from 'antd/es/table';

// @ts-ignore
import _debounce from 'lodash.debounce';
import {Table} from 'antd';
import {ClaimStatus, ClaimType, Id, LotNumber, SortOrder} from "@/types/common"
import tableStyles from './table.module.css';

import {GetClaimsApiArg} from "@/types/requests"
import {useGetClaimsQuery} from "@/redux/services/adminApi"
import {ClaimPlacingLotFilter} from "@/components/TableWithFilter/Filter/Filters/ClaimPlacingLotFilter";
import dayjs from "dayjs";
import {handleTableChangeUtil, prepareFormUtil} from "@/components/TableWithFilter/utils";

type ClaimPlacingLotColumnsDataType = {
    id: Id,
    learner: string,
    dateTime: string,
    status: ClaimStatus,
    sum: number | null
}

const ClaimPlacingLotColumns: ColumnsType<ClaimPlacingLotColumnsDataType> = [
    {title: 'Номер', dataIndex: 'id', key: 'id', sorter: true},
    {
        title: 'Исполнитель',
        dataIndex: 'learner',
        key: 'learner',
        sorter: true
    },
    {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
        render: (_, record: ClaimPlacingLotColumnsDataType) => {
            return (
                <>
                    {(record.status === ClaimStatus.Waiting) && <p>Ожидание</p>}
                    {record.status === ClaimStatus.Declined && <p>Отклонено</p>}
                    {record.status === ClaimStatus.Approved && <p>Одобрено</p>}
                </>
            )
        }
    },
    {title: 'Дата', dataIndex: 'dateTime', key: 'dateTime'},
    {title: 'Сумма', dataIndex: 'sum', key: 'sum'},
]

const data: ClaimPlacingLotColumnsDataType[] = [
    {
        id: 1,
        learner: 'Ivan',
        status: ClaimStatus.Approved,
        dateTime: '22.22.2222',
        sum: 200,
    },
    {
        id: 2,
        learner: 'Ivan',
        status: ClaimStatus.Waiting,
        dateTime: '22.22.2222',
        sum: 300,
    },
];

export function ClaimPlacingLotTableWithFilter() {
    const [formData, setFormData] = useState<GetClaimsApiArg>({
        claimType: ClaimType.PlacingLot,
        page: 1,
        pageSize: 10,
    });
    const [dataForReq, setDataForReq] = useState<typeof formData>(formData)
    const {data, isLoading, isError, isFetching} = useGetClaimsQuery(dataForReq)
    const [dataTable, setDataTable] = useState<ClaimPlacingLotColumnsDataType[]>([])


    /*const handleTableChange = (
        pagination: TablePaginationConfig,
        _: any,
        sorter: any
    ) => {
        setFormData((prevState): GetClaimsApiArg => {
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
    };*/

    const handleFormChanges = (_: any, allValues: any) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                ...prepareFormUtil(allValues),
                lotNumber: 21
            };
        });
    };

    useEffect(() => {
        console.log("DATA: ", data)
        setDataTable(() => {
            return data ? data.content.map((e): ClaimPlacingLotColumnsDataType => {
                    return {
                        id: e.id,
                        learner: e.learner.name,
                        dateTime: e.dateTime.toString(),
                        status: e.status,
                        sum: e.sum,
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

    useEffect(() => {
        console.log('FormData:', formData);
    }, [formData]);


    return (
        <>
            <ClaimPlacingLotFilter
                onChangeEvent={handleFormChanges}
            ></ClaimPlacingLotFilter>

            <Table
                columns={ClaimPlacingLotColumns}
                dataSource={dataTable}
                rowKey={"id"}
                // onChange={handleTableChange}
                onChange={(pagination, _, sorter) => {
                    handleTableChangeUtil<GetClaimsApiArg>(pagination, _, sorter, setFormData)
                }}
                loading={isFetching || isLoading}
                pagination={{total: data?.pagination.totalElements}}
                className={tableStyles.table}
                scroll={{x: true}}
            ></Table>
        </>
    );
}

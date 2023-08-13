import {useEffect, useMemo, useState} from 'react';
import {ColumnsType, TablePaginationConfig} from 'antd/es/table';

// @ts-ignore
import _debounce from 'lodash.debounce';
import {Table} from 'antd';
import {ClaimStatus, ClaimType, Id, LotNumber, SortOrder} from "@/types/common"
import tableStyles from './table.module.css';

import {GetClaimsApiArg} from "@/types/requests"
import {useGetClaimsQuery} from "@/redux/services/adminApi"

import {ClaimBuyingLotFilter} from "@/components/TableWithFilter/Filter/Filters/ClaimBuyingLotFilter";
import {AssessmentColumnsDataType} from "@/components/TableWithFilter/TableColumns/AssessmentColumns";
import {handleTableChangeUtil, prepareFormUtil} from "@/components/TableWithFilter/utils";

type ClaimBuyingLotColumnsDataType = {
    id: Id,
    learner: string,
    dateTime: string,
    status: ClaimStatus,
    sum: number | null
}

const ClaimBuyingLotColumns: ColumnsType<ClaimBuyingLotColumnsDataType> = [
    {title: 'Номер', dataIndex: 'id', key: 'id', sorter: true},
    {
        title: 'Покупатель',
        dataIndex: 'learner',
        key: 'learner',
        sorter: true
    },
    {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
        render: (_, record: ClaimBuyingLotColumnsDataType) => {
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

const data: ClaimBuyingLotColumnsDataType[] = [
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

export function ClaimBuyingLotTableWithFilter() {
    const [formData, setFormData] = useState<GetClaimsApiArg>({
        claimType: ClaimType.BuyingLot,
        page: 1,
        pageSize: 10,
    });
    const [dataForReq, setDataForReq] = useState<typeof formData>(formData)
    const {data, isLoading, isError, isFetching} = useGetClaimsQuery(dataForReq)
    const [dataTable, setDataTable] = useState<ClaimBuyingLotColumnsDataType[]>([])

    const handleFormChanges = (_: any, allValues: any) => {
        setFormData((prevState): GetClaimsApiArg => {
            return {
                ...prevState,
                ...prepareFormUtil(allValues),
            };
        });
    };

    useEffect(() => {
        console.log("DATA: ", data)
        setDataTable(() => {
            return data ? data.content.map((e): ClaimBuyingLotColumnsDataType => {
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

    return (
        <>
            <ClaimBuyingLotFilter
                onChangeEvent={handleFormChanges}
            ></ClaimBuyingLotFilter>

            <Table
                columns={ClaimBuyingLotColumns}
                dataSource={dataTable}
                rowKey={"id"}
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

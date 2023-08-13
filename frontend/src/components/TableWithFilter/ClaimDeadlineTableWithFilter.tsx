import {useEffect, useMemo, useState} from 'react';
import {ColumnsType, TablePaginationConfig} from 'antd/es/table';

// @ts-ignore
import _debounce from 'lodash.debounce';
import {Table} from 'antd';
import {ClaimStatus, ClaimType, Delay, Id, LotNumber, SortOrder, TaskTitle} from "@/types/common"
import tableStyles from './table.module.css';

import {GetClaimsApiArg} from "@/types/requests"
import {ClaimDeadlineFilter} from "@/components/TableWithFilter/Filter/Filters/ClaimDeadlineFilter";
import {handleTableChangeUtil, prepareFormUtil} from "@/components/TableWithFilter/utils";
import {useGetClaimsQuery} from "@/redux/services/adminApi";

type ClaimDeadlineColumnsDataType = {
    id: Id,
    learner: string,
    task: TaskTitle | undefined,
    dateTime: string,
    status: ClaimStatus,
    delay: string
}

const ClaimDeadlineColumns: ColumnsType<ClaimDeadlineColumnsDataType> = [
    {
        title: 'Студент',
        dataIndex: 'learner',
        key: 'learner',
        sorter: true
    },
    {title: 'Задание', dataIndex: 'task', key: 'task'},
    {title: 'Дата сдачи', dataIndex: 'dateTime', key: 'dateTime'},

    {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
        render: (_, record: ClaimDeadlineColumnsDataType) => {
            return (
                <>
                    {(record.status === ClaimStatus.Waiting) && <p>Ожидание</p>}
                    {record.status === ClaimStatus.Declined && <p>Отклонено</p>}
                    {record.status === ClaimStatus.Approved && <p>Одобрено</p>}
                </>
            )
        }
    },
    {title: 'Просрочка', dataIndex: 'delay', key: 'delay'},
]

const data: ClaimDeadlineColumnsDataType[] = [
    {
        id: 1,
        learner: 'Ivan',
        task: "Task1",
        status: ClaimStatus.Approved,
        dateTime: '22.22.2222',
        delay: "2ч",
    },
    {
        id: 2,
        learner: 'Ivan',
        task: "Task2",
        status: ClaimStatus.Waiting,
        dateTime: '22.22.2222',
        delay: "3ч",
    },
];

export function ClaimDeadlineTableWithFilter() {
    const [formData, setFormData] = useState<GetClaimsApiArg>({
        claimType: ClaimType.PlacingLot,
        page: 1,
        pageSize: 10,
    });
    const [dataForReq, setDataForReq] = useState<typeof formData>(formData)
    const {data, isLoading, isError, isFetching} = useGetClaimsQuery(dataForReq)
    const [dataTable, setDataTable] = useState<ClaimDeadlineColumnsDataType[]>([])


    const handleFormChanges = (_: any, allValues: any) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                ...prepareFormUtil(allValues),
            };
        });
    };

    useEffect(() => {
        console.log("DATA: ", data)
        setDataTable(() => {
            return data ? data.content.map((e): ClaimDeadlineColumnsDataType => {
                    return {
                        id: e.id,
                        learner: e.learner.name,
                        dateTime: e.dateTime.toString(),
                        status: e.status,
                        task: e.task?.title,
                        delay: e.delay?.toString() || ""
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
            <ClaimDeadlineFilter
                onChangeEvent={handleFormChanges}
            ></ClaimDeadlineFilter>

            <Table
                columns={ClaimDeadlineColumns}
                dataSource={dataTable}
                rowKey={"id"}
                onChange={(pag, _, sor) => {
                    handleTableChangeUtil<GetClaimsApiArg>(pag, _, sor, setFormData)
                }}
                pagination={{total: data?.pagination.totalElements}}
                className={tableStyles.table}
                scroll={{x: true}}
            ></Table>
        </>
    );
}

import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {ColumnsType, TablePaginationConfig} from "antd/es/table";
import {Table} from "antd";

// @ts-ignore
import _debounce from "lodash.debounce";
import {GetTasksApiArg} from "@/types/requests"
import {useGetTasksQuery} from "@/redux/services/adminApi"
import {Id, TaskType} from "@/types/common"
import {useRouter} from "next/navigation"
import {DEBOUNCE_DURATION} from "@/components/TableWithFilter/entity";

import {prepareFormUtil} from "@/components/TableWithFilter/utils";
import {TasksFilter} from "@/components/TableWithFilter/Filter/Filters/TasksFilter";

type TasksTableType = {
    id: Id,
    title: string
    lesson: string | number,
    type: TaskType,
    deadline: string
}

const columns: ColumnsType<TasksTableType> = [
    {
        title: 'Название',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Тема',
        dataIndex: 'lesson',
        key: 'lesson',
    },
    {
        title: 'Тип',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Дедлайн',
        dataIndex: 'deadline',
        key: 'deadline',
    },
]

export function TasksTableWithFilter() {

    const [formData, setFormData] = useState<GetTasksApiArg>({
        page: 1,
        pageSize: 10
    })
    const [dataForReq, setDataForReq] = useState<typeof formData>(formData)
    const {data, isLoading, isError, isFetching} = useGetTasksQuery(dataForReq)
    const [dataTable, setDataTable] = useState<TasksTableType[]>([])

    const {push} = useRouter()
    const handleTableChange = (pagination: TablePaginationConfig) => {
        setFormData((prevState): GetTasksApiArg => {
            return {
                ...prevState,
                page: pagination.current,
                pageSize: pagination.pageSize,
            }
        })
    };
    const handleFormChanges = (changedValues: any, allValues: any) => {
        setFormData((prevState): GetTasksApiArg => {
            return {
                ...prevState,
                ...prepareFormUtil(allValues),
            };
        });
    };


    useEffect(() => {
        console.log("DATA: ", data)
        setDataTable(() => {
            return data ? data.content.map((e): TasksTableType => {
                    return {
                        id: e.id,
                        title: e.title,
                        lesson: e.lesson?.id || "-",
                        type: e.taskType,
                        deadline: e.deadline
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
            <TasksFilter onChangeEvent={handleFormChanges}></TasksFilter>
            <Table columns={columns}
                   dataSource={dataTable}
                   onChange={handleTableChange}
                   loading={isFetching || isLoading}
                   rowKey={"id"}
                   pagination={{total: data?.pagination?.totalElements || 0}}
                   onRow={(record, rowIndex) => {
                       return {
                           onClick: (event) => {
                               push(`/admin/tasks/${record.id}`)
                           }
                       };
                   }}
            >
            </Table>
        </>
    )
}
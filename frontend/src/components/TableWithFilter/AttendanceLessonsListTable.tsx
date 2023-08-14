import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {ColumnsType, TablePaginationConfig} from "antd/es/table";
import {Table} from "antd";

// @ts-ignore
import _debounce from "lodash.debounce";
import {GetLessonsApiArg} from "@/types/requests"
import {useGetLessonsQuery} from "@/redux/services/adminApi"
import {Id, LessonNumber, LessonTitle} from "@/types/common"
import {useRouter} from "next/navigation"

type AttendanceLessonsListTableType = {
    id: Id
    number: LessonNumber,
    title: LessonTitle,
    date: string
}

const columns: ColumnsType<AttendanceLessonsListTableType> = [
    {
        title: 'Номер',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Название',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Дата',
        dataIndex: 'date',
        key: 'date',
    },
]

/*const dataTable: AttendanceLessonsListTableType[] = [
    {
        id: 12,
        number: 8,
        title: "some title",
        date: "12.12.12"
    }, {
        id: 11,
        number: 9,
        title: "some title",
        date: "12.12.12"
    }]*/

const tableOnRow = (record: AttendanceLessonsListTableType, rowIndex?: Id) => {
    return {
        onClick: (event: Event) => {
            console.log(event);
            console.log(record.number)
        }, // click row
    };
}


export function AttendanceLessonsListTable() {

    const [formData, setFormData] = useState<GetLessonsApiArg>({
        page: 1,
        pageSize: 10
    })
    const [dataForReq, setDataForReq] = useState<typeof formData>(formData)
    const {data, isLoading, isError, isFetching} = useGetLessonsQuery(dataForReq)
    const [dataTable, setDataTable] = useState<AttendanceLessonsListTableType[]>([])

    const {push} = useRouter()
    const handleTableChange = (pagination: TablePaginationConfig) => {
        setFormData((prevState): GetLessonsApiArg => {
            return {
                ...prevState,
                page: pagination.current,
                pageSize: pagination.pageSize,
            }
        })
    };

    useEffect(() => {
        console.log("DATA: ", data)
        setDataTable(() => {
            return data ? data.content.map((e): AttendanceLessonsListTableType => {
                    return {
                        id: e.id,
                        number: e.number,
                        title: e.title,
                        date: e.date.toString()
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
            <Table columns={columns}
                   dataSource={dataTable}
                   onChange={handleTableChange}
                   loading={isFetching || isLoading}
                   rowKey={"id"}
                   pagination={{total: data?.pagination?.totalElements || 0}}
                   onRow={(record, rowIndex) => {
                       return {
                           onClick: (event) => {
                               console.log(event);
                               console.log(record.number)
                               push(`/admin/attendance/${record.id}`)
                               //href to assessment
                           }
                       };
                   }}
            >
            </Table>
        </>
    )
}
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {ColumnsType, TablePaginationConfig} from "antd/es/table";
import {Table} from "antd";

// @ts-ignore
import _debounce from "lodash.debounce";
import {GetAccountsApiArg, GetLessonsApiArg} from "@/types/requests"
import {useGetLessonsQuery} from "@/redux/services/adminApi"
import {Id, LessonNumber, LessonTitle} from "@/types/common"
import {useRouter} from "next/navigation"
import {DEBOUNCE_DURATION} from "@/components/TableWithFilter/entity";
import {LessonsFilter} from "@/components/TableWithFilter/Filter/Filters/LessonsFilter";
import {prepareFormUtil} from "@/components/TableWithFilter/utils";

type LessonsTableType = {
    id: Id
    number: LessonNumber,
    title: LessonTitle,
    date: string
}

const columns: ColumnsType<LessonsTableType> = [
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

export function LessonsTableWithFilter() {

    const [formData, setFormData] = useState<GetLessonsApiArg>({
        page: 1,
        pageSize: 10
    })
    const [dataForReq, setDataForReq] = useState<typeof formData>(formData)
    const {data, isLoading, isError, isFetching} = useGetLessonsQuery(dataForReq)
    const [dataTable, setDataTable] = useState<LessonsTableType[]>([])

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
    const handleFormChanges = (changedValues: any, allValues: any) => {
        setFormData((prevState): GetAccountsApiArg => {
            return {
                ...prevState,
                ...prepareFormUtil(allValues),
            };
        });
    };


    useEffect(() => {
        console.log("DATA: ", data)
        setDataTable(() => {
            return data ? data.content.map((e): LessonsTableType => {
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
        }, DEBOUNCE_DURATION.ALL),
        [])


    useEffect(() => {
        debounceDataForReq(formData)
    }, [formData, debounceDataForReq])

    return (
        <>
            <LessonsFilter onChangeEvent={handleFormChanges}></LessonsFilter>
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
                               push(`/admin/lessons/${record.id}`)
                           }
                       };
                   }}
            >
            </Table>
        </>
    )
}
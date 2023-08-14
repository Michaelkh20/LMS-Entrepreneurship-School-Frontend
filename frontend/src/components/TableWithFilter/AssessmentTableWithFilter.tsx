import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {TablePaginationConfig} from "antd/es/table";
import {Button, Table} from "antd";

// @ts-ignore
import _debounce from "lodash.debounce";
import {SortOrder} from "@/types/common"
import {AssessmentColumns} from "./TableColumns";
import {AssessmentFilter} from "@/components/TableWithFilter/Filter/Filters/AssessmentFilter";
import {GetAssessmentsApiArg} from "@/types/requests"
import {useGetAssessmentsQuery} from "@/redux/services/adminApi"

//todo: del it later:
import {useAuthMutation} from "@/redux/services/commonApi"
import {AssessmentColumnsDataType} from "@/components/TableWithFilter/TableColumns/AssessmentColumns";
import {prepareFormUtil} from "@/components/TableWithFilter/utils";

export function AssessmentTableWithFilter() {

    const [formData, setFormData] = useState<GetAssessmentsApiArg>({
        learnerId: 12,
        page: 1,
        pageSize: 10
    })

    const [dataForReq, setDataForReq] = useState<typeof formData>(formData)

    const {data, isLoading, isError, isFetching} = useGetAssessmentsQuery(dataForReq)
    const [dataTable, setDataTable] = useState<AssessmentColumnsDataType[]>([])

    //todo delete it later
    const [trigger, {isLoading: isL, isSuccess: isS}] = useAuthMutation()

    const handleTableChange = (pagination: TablePaginationConfig, filters: any, sorter: any) => {
        setFormData((prevState): GetAssessmentsApiArg => {
            return {
                ...prevState,
                page: pagination.current,
                pageSize: pagination.pageSize,
                sortProperty: sorter.field,
                sortOrder: sorter.order === 'descend' ? SortOrder.Desc : SortOrder.Asc
            }
        })
    };

    const handleFormChanges = (_: GetAssessmentsApiArg, allValues: GetAssessmentsApiArg) => {
        setFormData((prevState): GetAssessmentsApiArg => {
            return {
                ...prevState,
                ...prepareFormUtil(allValues)
            }
        })
    }

    const debounceDataForReq = useMemo(
        () => _debounce((data: any) => {
            console.log(data)
            setDataForReq(data)
        }, 2000),
        [])


    useEffect(() => {
        debounceDataForReq(formData)
    }, [formData, debounceDataForReq])



    useEffect(() => {
        console.log("DATA: ", data)
        setDataTable(() => {
            return data ? data.content.map((e): AssessmentColumnsDataType => {
                    return {
                        key: e.id,
                        learner: e.learner.id,
                        task: e.task.title,
                        date: e.issueDate,
                        taskType: e.assessmentType,
                        assessment: e.assessment
                    }
                }
            ) : []
        })
    }, [data]);

    return (
        <>
            <AssessmentFilter onChangeEvent={handleFormChanges}></AssessmentFilter>

            <Button onClick={() => {
                trigger({
                    login: "admin",
                    password: "password"
                })
            }}>Auth</Button>

            <Table columns={AssessmentColumns}
                   dataSource={dataTable}
                   loading={isFetching || isLoading}
                   onChange={handleTableChange}
                   pagination={{total: data?.pagination.totalElements}}
            >
            </Table>
        </>
    )
}
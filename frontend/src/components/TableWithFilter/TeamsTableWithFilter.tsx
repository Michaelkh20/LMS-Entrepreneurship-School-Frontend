import {useEffect, useMemo, useState} from 'react';
import {TablePaginationConfig} from 'antd/es/table';
import {Table} from 'antd';
import {TeamsFilter} from '@/components/TableWithFilter/Filter/Filters/TeamsFilter';

// @ts-ignore
import _debounce from 'lodash.debounce';
import {DEBOUNCE_DURATION,} from '@/components/TableWithFilter/entity';
import {teamsColumns} from './TableColumns';
import {SortOrder} from "@/types/common"
import {GetTeamsApiArg} from "@/types/requests"
import {useGetTeamsQuery} from "@/redux/services/adminApi";
import {TeamsColumnsDataType} from "@/components/TableWithFilter/TableColumns/TeamsColumns";


export function TeamsTableWithFilter() {
    const [formData, setFormData] = useState<GetTeamsApiArg>({
        page: 1,
        pageSize: 10,
    });

    const [dataForReq, setDataForReq] = useState<typeof formData>(formData)
    const {data, isLoading, isError, isFetching} = useGetTeamsQuery(dataForReq)
    const [dataTable, setDataTable] = useState<TeamsColumnsDataType[]>([])

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
                ...allValues,
            };
        });
    };

    useEffect(() => {
        console.log('FormData:', formData);
    }, [formData]);

    useEffect(() => {
        console.log("DATA: ", data)
        setDataTable(() => {
            return data ? data.content.map((e): TeamsColumnsDataType => {
                    return {
                        key: e.id,
                        teamNumber: e.teamNumber,
                        theme: e.projectTheme
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
            <TeamsFilter onChangeEvent={handleFormChanges}></TeamsFilter>

            <Table
                columns={teamsColumns}
                dataSource={dataTable}
                onChange={handleTableChange}
                loading={isFetching || isLoading}
                pagination={{total: data?.pagination?.totalElements}}
            ></Table>
        </>
    );
}

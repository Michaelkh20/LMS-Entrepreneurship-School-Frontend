import {useEffect, useMemo, useState} from 'react';
import {TablePaginationConfig} from 'antd/es/table';

// @ts-ignore
import _debounce from 'lodash.debounce';
import {Table} from 'antd';
import {ClaimType, SortOrder} from "@/types/common"
import {ClaimTransferColumns} from './TableColumns';
import tableStyles from './table.module.css';
import {ClaimTransferFilter} from '@/components/TableWithFilter/Filter/Filters/ClaimTransferFilter';
import {ClaimTransferColumnsDataType} from '@/components/TableWithFilter/TableColumns/ClaimTransferColumns';


import {GetClaimsApiArg} from "@/types/requests"
import {prepareFormUtil} from "@/components/TableWithFilter/utils";
import {useGetClaimsQuery} from "@/redux/services/adminApi";

// const data: ClaimTransferColumnsDataType[] = [
//     {
//         key: '1',
//         learner: 'Ivan',
//         receiver: 'Ivan',
//         status: 'Waiting',
//         dateTime: '22.22.2222',
//         sum: 200,
//     },
//     {
//         key: '2',
//         learner: 'Ivan',
//         receiver: 'Ivan',
//         status: 'Declined',
//         dateTime: '22.22.2222',
//         sum: 300,
//     },
// ];

export function ClaimTransferTableWithFilter() {
    const [formData, setFormData] = useState<GetClaimsApiArg>({
        claimType: ClaimType.Transfer,
        page: 1,
        pageSize: 10,
    });

    const [dataForReq, setDataForReq] = useState<typeof formData>(formData)
    const {data, isLoading, isError, isFetching} = useGetClaimsQuery(dataForReq)
    const [dataTable, setDataTable] = useState<ClaimTransferColumnsDataType[]>([])

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
            return data ? data.content.map((e): ClaimTransferColumnsDataType => {
                    return {
                        key: e.id,
                        learner: e.learner.name,
                        receiver: e?.receiver?.name || "",
                        dateTime: e.dateTime.toString(),
                        status: e.status,
                        sum: e?.sum,
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
            <ClaimTransferFilter
                onChangeEvent={handleFormChanges}
            ></ClaimTransferFilter>

            <Table
                columns={ClaimTransferColumns}
                dataSource={dataTable}
                onChange={handleTableChange}
                loading={isFetching || isLoading}

                pagination={{total: data?.pagination?.totalElements}}
                className={tableStyles.table}
                scroll={{x: true}}
            ></Table>
        </>
    );
}

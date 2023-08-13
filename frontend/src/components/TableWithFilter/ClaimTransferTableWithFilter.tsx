import {useEffect, useState} from 'react';
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

const data: ClaimTransferColumnsDataType[] = [
    {
        key: '1',
        learner: 'Ivan',
        receiver: 'Ivan',
        status: 'Waiting',
        dateTime: '22.22.2222',
        sum: 200,
    },
    {
        key: '2',
        learner: 'Ivan',
        receiver: 'Ivan',
        status: 'Declined',
        dateTime: '22.22.2222',
        sum: 300,
    },
];

export function ClaimTransferTableWithFilter() {
    const [formData, setFormData] = useState<GetClaimsApiArg>({
        claimType: ClaimType.Transfer,
        page: 1,
        pageSize: 10,
    });

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
                ...changedValues,
            };
        });
    };

    useEffect(() => {
        console.log('FormData:', formData);
    }, [formData]);

    const totalData = 0;

    return (
        <>
            <ClaimTransferFilter
                onChangeEvent={handleFormChanges}
            ></ClaimTransferFilter>

            <Table
                columns={ClaimTransferColumns}
                dataSource={data}
                onChange={handleTableChange}
                pagination={{total: totalData}}
                className={tableStyles.table}
                scroll={{x: true}}
            ></Table>
        </>
    );
}

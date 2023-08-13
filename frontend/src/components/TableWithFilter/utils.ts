import dayjs from "dayjs";
import {TablePaginationConfig} from "antd/es/table";
import {GetClaimsApiArg} from "@/types/requests";
import {SortOrder} from "@/types/common";
import {Dispatch, SetStateAction} from "react";

export function prepareFormUtil(values: any) {
    for (const [key, val] of Object.entries(values)) {
        if (val instanceof dayjs) {
            values[key] = values[key].toISOString()
        }
        values[key] ??= null
    }
    return values
}

export function handleTableChangeUtil<T>(
    pagination: TablePaginationConfig,
    filters: any,
    sorter: any,
    setState: Dispatch<SetStateAction<T>>
) {
    setState((prevState): T => {
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
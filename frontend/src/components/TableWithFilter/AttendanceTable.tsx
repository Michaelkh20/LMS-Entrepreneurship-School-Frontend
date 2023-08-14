import {Key, useEffect, useState} from "react";
import {ColumnsType, TablePaginationConfig} from "antd/es/table";

// @ts-ignore
import _debounce from "lodash.debounce";
import {Button, ConfigProvider, InputNumber, Space, Table} from "antd";
import {DEBOUNCE_DURATION} from "@/components/TableWithFilter/entity";
import {LessonNumber} from "@/types/common"
import tableStyles from "./table.module.css"

import {
    useGetAttendanceQuery,
    useUpdateAttendanceMutation
} from "@/redux/services/adminApi"

import {AttendanceRequest} from "@/types/requests"
import {AssessmentColumnsDataType} from "@/components/TableWithFilter/TableColumns/AssessmentColumns";


export type AttendanceColumnsDataType = {
    key: number;
    learner: string;
    email: string;
    didCome: boolean;
    accruedCurrency?: number | null;
    cachedAccruedCurrency?: number
}

const dataD: AttendanceColumnsDataType[] = [
    {
        key: 1,
        learner: "Ivan",
        email: "Ivan@email.com",
        didCome: false
    },
    {
        key: 22,
        learner: "Ivan",
        email: "Ivan@email.com",
        didCome: true,
        accruedCurrency: 300,
    },
    {
        key: 2,
        learner: "Ivan",
        email: "Ivan@email.com",
        didCome: false
    },
    {
        key: 33,
        learner: "Ivan",
        email: "Ivan@email.com",
        didCome: true,
        accruedCurrency: 300,
    },
    {
        key: 3,
        learner: "Ivan",
        email: "Ivan@email.com",
        didCome: false
    },
    {
        key: 44,
        learner: "Ivan",
        email: "Ivan@email.com",
        didCome: true,
        accruedCurrency: 300,
    },
    {
        key: 5,
        learner: "Ivan",
        email: "Ivan@email.com",
        didCome: false
    },
    {
        key: 55,
        learner: "Ivan",
        email: "Ivan@email.com",
        didCome: true,
        accruedCurrency: 300,
    },
    {
        key: 6,
        learner: "Ivan",
        email: "Ivan@email.com",
        didCome: false
    },
    {
        key: 66,
        learner: "Ivan",
        email: "Ivan@email.com",
        didCome: true,
        accruedCurrency: 300,
    },
    {
        key: 7,
        learner: "Ivan",
        email: "Ivan@email.com",
        didCome: false
    }
]


export function AttendanceTable(
    {lessonId}: { lessonId: LessonNumber }
) {


    const [formData, setFormData] = useState<AttendanceRequest>(
        {
            lessonId: 123,
            learners: []
        }
    )
    const {data, isLoading, isError, isFetching} = useGetAttendanceQuery(lessonId)
    const [dataTable, setDataTable] = useState<AttendanceColumnsDataType[]>([])
    const [trigger, {isLoading: isL, isSuccess: isS}] = useUpdateAttendanceMutation()


    useEffect(() => {
        console.log("DATA: ", data)
        setDataTable(() => {
            return data ? data.learners.map((e): AttendanceColumnsDataType => {
                    return {
                        key: e.learner.id,
                        learner: e.learner.name,
                        didCome: e.didCome,
                        email: e.learner.email,
                        accruedCurrency: e.accruedCurrency
                    }
                }
            ) : []
        })
    }, [data]);

    const AttendanceColumns: ColumnsType<AttendanceColumnsDataType> = [
        {
            title: 'Имя',
            dataIndex: 'learner',
            key: 'learner',
        }, {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Начислить ШП',
            dataIndex: '',
            key: 'x',
            width: 150,
            render: (_, record: AttendanceColumnsDataType) => {
                return (
                    <>
                        {record.didCome &&
                            <InputNumber placeholder={`${record.accruedCurrency} ШП`}
                                         defaultValue={record.accruedCurrency || undefined}
                                // formatter={(value) => `ШП ${value}`}
                                         onChange={_debounce((value: number) => {
                                             if (value) {
                                                 record.accruedCurrency = value
                                             } else {
                                                 record.accruedCurrency = 0
                                             }
                                             setDataTable((prevState) =>
                                                 [...prevState.map(student => student.key === record.key
                                                     ? record
                                                     : student
                                                 )]
                                             )
                                         }, 600)}
                            >
                            </InputNumber>}
                    </>
                )
            }
        },
    ]


    const handleTableChange = (pagination: TablePaginationConfig, filters: any, sorter: any) => {
        /* setFormData(prevState => {
             return {
                 ...prevState
             }
         })*/
    };

    useEffect(() => {
        console.log("FormData:", formData)
    }, [formData])
    useEffect(() => {
        console.log("Table:", dataTable)
        setFormData((prevState): AttendanceRequest => {
            return {
                ...prevState,
                learners:
                    dataTable
                        .filter(st => st.didCome)
                        .map(st => {
                            return {
                                learnerId: st.key,
                                accruedCurrency: st.accruedCurrency || null
                            }
                        })
            }
        })
    }, [dataTable])

    const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>(() => {
            // const students: number[] = [];
            const students = dataTable.filter(e => e.didCome).map(e => e.key)
            console.log("students did come:", students)
            return students
        }
    );

    const onSelectChange = (newSelectedRowKeys: Key[], selectRows: AttendanceColumnsDataType[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const handleOnSelect = (record: any, selected: any) => {
        record.didCome = selected

        if (selected) {
            if (record.cachedAccruedCurrency) {
                record.accruedCurrency = record.cachedAccruedCurrency
            } else {
                record.accruedCurrency = 0
            }
        } else {
            record.cachedAccruedCurrency = record.accruedCurrency
            record.accruedCurrency = 0
        }

        setDataTable((prevState) => [...prevState.map(student => student.key === record.key
            ? record
            : student
        )
        ])
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Table: {
                        controlItemBgActive: "#f4faff",
                        controlItemBgActiveHover: "#e6f4ff",
                    }
                }
            }}
        >
            <div>{lessonId}</div>
            <Table columns={AttendanceColumns}
                   dataSource={dataD}
                   onChange={handleTableChange}
                   pagination={false}
                   loading={isFetching || isLoading}
                   className={tableStyles.table}
                   rowClassName={tableStyles.row}
                   scroll={{x: true}}
                   rowSelection={{
                       selectedRowKeys,
                       onChange: onSelectChange,
                       onSelect: handleOnSelect,
                       hideSelectAll: true,
                   }}
            >
            </Table>
            <div style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "1rem 0"
            }}>
                <Space size={32}>
                    <div>Выбрано: {selectedRowKeys.length}</div>
                    <Button size={"large"} onClick={() => trigger(formData)}>Подтвердить</Button>
                </Space>
            </div>
        </ConfigProvider>
    )
}
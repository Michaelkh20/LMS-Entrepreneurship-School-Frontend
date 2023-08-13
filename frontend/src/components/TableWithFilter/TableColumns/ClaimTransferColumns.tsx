import {ColumnsType} from "antd/es/table";
import {Button, Popconfirm, Space} from "antd";
import {Console} from "inspector";
import {Simulate} from "react-dom/test-utils";
import cancel = Simulate.cancel;
import {ClaimStatus} from "@/types/common";

export type ClaimTransferColumnsDataType = {
    key: React.Key;
    learner: string;
    receiver: string;
    status: string;
    dateTime: string;
    sum: number;
}

export const ClaimTransferColumns: ColumnsType<ClaimTransferColumnsDataType> = [
    {
        title: 'Отправитель',
        dataIndex: 'learner',
        key: 'learner',
        sorter: true
    }, {
        title: 'Получатель',
        dataIndex: 'receiver',
        key: 'receiver',
        sorter: true
    },
    {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
        render: (_, record: ClaimTransferColumnsDataType) => {
            return (
                <>
                    {(record.status === ClaimStatus.Waiting) && <p>Ожидание</p>}
                    {record.status === ClaimStatus.Declined && <p>Отклонено</p>}
                    {record.status === ClaimStatus.Approved && <p>Одобрено</p>}
                </>
            )
        }
    },
    {title: 'Дата', dataIndex: 'dateTime', key: 'dateTime'},
    {title: 'Сумма', dataIndex: 'sum', key: 'sum'},
    {
        title: 'Подтверждение',
        dataIndex: '',
        key: 'x',
        render: (_: any, record: ClaimTransferColumnsDataType) => {
            return (
                <>
                    {(record.status === ClaimStatus.Waiting) && <ConfirmButtons record={record}/>}
                </>
            )
        }
    },
]

const ConfirmButtons = ({record}: { record: ClaimTransferColumnsDataType }) => {
    return (
        <Space>
            <Popconfirm title={"Одобрить заявку?"} onConfirm={() => console.log("Approve", record.key, record.sum)}>
                <Button>Да</Button>
            </Popconfirm>
            <Popconfirm title={"Отклонить заявку?"} onConfirm={() => console.log("Reject", record.key, record.sum)}>
                <Button>Нет</Button>
            </Popconfirm>
        </Space>
    )
}
import {ColumnsType} from "antd/es/table";
import {Button, Popconfirm, Space} from "antd";
import {Console} from "inspector";
import {Simulate} from "react-dom/test-utils";
import cancel = Simulate.cancel;
import {CLAIM_STATUS} from "@/components/TableWithFilter/entity";

export type CurrencyTransferColumnsDataType = {
    key: React.Key;
    learner: string;
    receiver: string;
    status: string;
    dateTime: string;
    sum: number;
}

export const currencyTransferColumns: ColumnsType<CurrencyTransferColumnsDataType> = [
    {
        title: 'Отправитель',
        dataIndex: 'learner',
        key: 'learner',
        sorter: (a, b) => a.learner.localeCompare(b.learner)
    }, {
        title: 'Получатель',
        dataIndex: 'receiver',
        key: 'receiver',
        sorter: (a, b) => a.receiver.localeCompare(b.receiver)
    },
    {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
        render: (_, record: CurrencyTransferColumnsDataType) => {
            return (
                <>
                    {(record.status === CLAIM_STATUS.Waiting) && <p>Ожидание</p>}
                    {record.status === CLAIM_STATUS.Declined && <p>Отклонено</p>}
                    {record.status === CLAIM_STATUS.Approved && <p>Одобрено</p>}
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
        render: (_: any, record: CurrencyTransferColumnsDataType) => {
            return (
                <>
                    {(record.status === CLAIM_STATUS.Waiting) && <ConfirmButtons record={record}/>}
                </>
            )
        }
    },
]

const ConfirmButtons = ({record}: { record: CurrencyTransferColumnsDataType }) => {
    return (
        <Space>
            <Popconfirm title={"Одобрить заявку?"} onConfirm={() => console.log("Approve", record.key, record.sum)}>
                <Button>Yes</Button>
            </Popconfirm>
            <Popconfirm title={"Отклонить заявку?"} onConfirm={() => console.log("Reject", record.key, record.sum)}>
                <Button>No</Button>
            </Popconfirm>
        </Space>
    )
}
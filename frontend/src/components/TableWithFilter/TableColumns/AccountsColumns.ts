import {ColumnsType} from "antd/es/table";
import {Balance, Email, Id, Name, Role, TeamNumber} from "@/types/common";

export type AccountColumnsDataType = {
    id: Id;
    name: Name;
    email: Email;
    team: TeamNumber[];
    role: Role;
    balance: Balance
}

export const accountsColumns: ColumnsType<AccountColumnsDataType> = [
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
        defaultSortOrder: "ascend",
        sorter: true
    },
    {title: 'Email', dataIndex: 'email', key: 'email'},
    {title: 'Команда', dataIndex: 'team', key: 'team'},
    {title: 'Роль', dataIndex: 'role', key: 'role'},
    {title: 'Баланс', dataIndex: 'balance', key: 'balance'}
]
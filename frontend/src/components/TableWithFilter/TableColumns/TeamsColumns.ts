import {ColumnsType} from "antd/es/table";

export type TeamsColumnsDataType = {
    key: React.Key;
    teamNumber: number;
    theme: string;
}

export const teamsColumns: ColumnsType<TeamsColumnsDataType> = [
    {
        title: '№ Команды',
        dataIndex: 'teamNumber',
        key: 'teamNumber',
        defaultSortOrder: "ascend",
        sorter: true,
        width: 200
    },
    {title: 'Тема', dataIndex: 'theme', key: 'theme'}
]
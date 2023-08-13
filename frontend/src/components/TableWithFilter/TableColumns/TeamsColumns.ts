import {ColumnsType} from "antd/es/table";

type ColumnsDataType = {
    key: React.Key;
    teamNumber: number;
    theme: string;
}

export const teamsColumns: ColumnsType<ColumnsDataType> = [
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
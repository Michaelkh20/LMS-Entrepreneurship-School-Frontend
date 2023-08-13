import {ColumnsType} from "antd/es/table";

export type AssessmentColumnsDataType = {
    key: React.Key;
    learner: number;
    task: string;
    date: string;
    taskType: string;
    assessment: number
}

export const AssessmentColumns: ColumnsType<AssessmentColumnsDataType> = [
    {
        title: 'Студент',
        dataIndex: 'learner',
        key: 'learner',
        sorter: true
    },
    {title: 'Задание', dataIndex: 'task', key: 'task'},
    {title: 'Дата', dataIndex: 'date', key: 'date'},
    {title: 'Тип', dataIndex: 'taskType', key: 'taskType'},
    {title: 'Оценка', dataIndex: 'assessment', key: 'assessment'}
]
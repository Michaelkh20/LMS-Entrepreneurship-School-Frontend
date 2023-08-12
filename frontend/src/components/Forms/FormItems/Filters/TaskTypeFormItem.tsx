import { AssessmentType, TaskType } from '@/types/common';
import { Form, Select } from 'antd';

export function TaskTypeFormItem() {
  return (
    <Form.Item name={'taskType'}>
      <Select allowClear placeholder={'Тип задания'} style={{ minWidth: 100 }}>
        <Select.Option value={TaskType.HW}>Домашнее задание</Select.Option>
        <Select.Option value={TaskType.Test}>Тест</Select.Option>
        <Select.Option value={TaskType.Competition}>Конкурс</Select.Option>
        <Select.Option value={TaskType.Exam}>Экзамен</Select.Option>
      </Select>
    </Form.Item>
  );
}

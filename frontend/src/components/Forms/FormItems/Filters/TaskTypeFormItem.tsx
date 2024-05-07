import { AssessmentType, AssignmentType } from '@/types/common';
import { Form, Select } from 'antd';

export function TaskTypeFormItem({
  placeholder = 'Тип задания',
  name = 'taskType',
}: {
  placeholder?: string;
  name?: string;
}) {
  return (
    <Form.Item name={name}>
      <Select allowClear placeholder={placeholder} style={{ minWidth: 100 }}>
        <Select.Option value={AssignmentType.HW}>
          Домашнее задание
        </Select.Option>
        <Select.Option value={AssignmentType.Test}>Тест</Select.Option>
        <Select.Option value={AssignmentType.Competition}>
          Конкурс
        </Select.Option>
        <Select.Option value={AssignmentType.Exam}>Экзамен</Select.Option>
      </Select>
    </Form.Item>
  );
}

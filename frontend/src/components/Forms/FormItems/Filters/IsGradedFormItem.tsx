import { taskTypeToString } from '@/util/enumsToString';
import { Form, Select } from 'antd';

export function IsGradedFormItem({
  placeholder = 'Стаус',
  name = 'isGraded',
}: {
  placeholder?: string;
  name?: string;
}) {
  return (
    <Form.Item name={name}>
      <Select allowClear placeholder={placeholder} style={{ minWidth: 150 }}>
        <Select.Option value={true}>Оценено</Select.Option>
        <Select.Option value={false}>Не оценено</Select.Option>
      </Select>
    </Form.Item>
  );
}

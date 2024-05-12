import { taskTypeToString } from '@/util/enumsToString';
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
        <Select.Option value={'homework'}>
          {taskTypeToString('homework')}
        </Select.Option>
        <Select.Option value={'test'}>{taskTypeToString('test')}</Select.Option>
        <Select.Option value={'competition'}>
          {taskTypeToString('competition')}
        </Select.Option>
        <Select.Option value={'exam'}>{taskTypeToString('exam')}</Select.Option>
      </Select>
    </Form.Item>
  );
}

import { useGetTaskSnippetList } from '@/redux/services/api';
import { taskTypeToString } from '@/util/enumsToString';
import { Flex, Form, Select } from 'antd';

type Props = {
  placeholder?: string;
  name?: string;
} & (
  | {
      type: 'filter';
      label?: undefined;
    }
  | {
      type: 'form';
      label: string;
    }
);

export function TaskSelectionFormItem({
  type,
  label,
  placeholder = 'Выберите задание',
  name = 'taskId',
}: Props) {
  const { taskSnippets, isFetching } = useGetTaskSnippetList();

  return (
    <Form.Item
      label={label}
      name={name}
      rules={
        type === 'form'
          ? [{ required: true, message: 'Выберите задание' }]
          : undefined
      }
      style={type === 'filter' ? { minWidth: '240px' } : undefined}
    >
      <Select
        style={{ width: '100%' }}
        showSearch
        placeholder={placeholder}
        loading={isFetching}
        options={taskSnippets?.map((task) => ({
          label: task.title,
          value: task.id,
          taskType: task.taskType,
        }))}
        optionRender={(option) => (
          <Flex justify="space-between">
            <div>{option.label}</div>
            <div>{taskTypeToString(option.data.taskType)}</div>
          </Flex>
        )}
        optionFilterProp="label"
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        allowClear={type === 'filter'}
      />
    </Form.Item>
  );
}

import { useGetTasksForSelectQuery } from '@/redux/services/adminApi';
import { Form, Select } from 'antd';

export function TaskSelectionFormItem({
  placeholder,
  name,
}: {
  placeholder: string;
  name: string;
}) {
  const { data, isFetching } = useGetTasksForSelectQuery();

  return (
    <Form.Item name={name}>
      <Select
        showSearch
        allowClear
        placeholder={placeholder}
        loading={isFetching}
        options={data?.map((task) => ({ label: task.title, value: task.id }))}
        optionFilterProp="label"
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
      />
    </Form.Item>
  );
}

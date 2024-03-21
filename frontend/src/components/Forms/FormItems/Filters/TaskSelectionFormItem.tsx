// import { useGetTasksForSelectQuery } from '@/redux/services/adminApi';
import { Form, Select } from 'antd';

//TODO: Hook

export function TaskSelectionFormItem({
  placeholder,
  name,
}: {
  placeholder: string;
  name: string;
}) {
  // const { data, isFetching } = useGetTasksForSelectQuery();
  const { data, isFetching } = {data: [
    {
      id: 12,
      title: "Title"
    }
  ], isFetching: false};


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

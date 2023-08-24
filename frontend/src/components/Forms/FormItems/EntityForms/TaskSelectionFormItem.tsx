import { useGetTasksForSelectQuery } from '@/redux/services/adminApi';
import { Form, Select } from 'antd';

export function TaskSelectionFormItem() {
  const { data, isFetching } = useGetTasksForSelectQuery();
  // const data = [
  //   { id: 1, title: 'Задание 1' },
  //   { id: 2, title: 'Задание 2' },
  // ];
  // const isFetching = false;

  return (
    <Form.Item
      label="Задание"
      name="taskId"
      rules={[{ required: true, message: 'Выберите задание' }]}
      wrapperCol={{ span: 8 }}
    >
      <Select
        showSearch
        placeholder="Выберите задание"
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

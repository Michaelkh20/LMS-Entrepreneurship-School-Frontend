import { useGetAccountsForSelectQuery } from '@/redux/services/adminApi';
import { Role } from '@/types/common';
import { Form, Select } from 'antd';

export function LeanerSelectionFormItem() {
  const { data, isFetching } = useGetAccountsForSelectQuery(Role.Learner);
  // const data = [
  //   { id: 1, name: 'Иванов Иван Иванович' },
  //   { id: 2, name: 'Петров Петр Петрович' },
  // ];
  // const isFetching = false;

  return (
    <Form.Item
      label="Ученик"
      name="learnerId"
      rules={[{ required: true, message: 'Выберите ученика' }]}
      wrapperCol={{ span: 8 }}
    >
      <Select
        showSearch
        placeholder="Выберите ученика"
        loading={isFetching}
        options={data?.map((user) => ({ label: user.name, value: user.id }))}
        optionFilterProp="label"
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
      />
    </Form.Item>
  );
}

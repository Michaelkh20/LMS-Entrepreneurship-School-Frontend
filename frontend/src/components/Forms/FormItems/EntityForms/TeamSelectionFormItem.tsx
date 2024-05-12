import { useGetTeamsForSelectQuery } from '@/redux/services/api';
import { Form, Select } from 'antd';

export function TeamSelectionFormItem() {
  const { data, isFetching } = useGetTeamsForSelectQuery();
  // const data = [
  //   { id: 1, number: 1 },
  //   { id: 2, number: 2 },
  // ];
  // const isFetching = false;

  return (
    <Form.Item
      label="Команда"
      name="teamId"
      rules={[{ required: true, message: 'Выберите команду' }]}
      wrapperCol={{ span: 8 }}
    >
      <Select
        showSearch
        placeholder="Выберите команду"
        loading={isFetching}
        options={data?.map((team) => ({
          label: 'Команда №' + team.number,
          value: team.id,
        }))}
        optionFilterProp="label"
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
      />
    </Form.Item>
  );
}

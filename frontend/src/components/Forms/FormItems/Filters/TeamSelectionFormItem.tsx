import { useGetTeamsForSelectQuery } from '@/redux/services/adminApi';
import { Form, Select } from 'antd';

export function TeamSelectionFormItem({
  placeholder,
  name,
}: {
  placeholder: string;
  name: string;
}) {
  const { data, isFetching } = useGetTeamsForSelectQuery();

  return (
    <Form.Item name={name}>
      <Select
        showSearch
        allowClear
        placeholder={placeholder}
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

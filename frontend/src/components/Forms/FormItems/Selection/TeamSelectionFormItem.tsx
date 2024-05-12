import { useGetTeamSnippetListQuery } from '@/redux/services/api';
import { Form, Select } from 'antd';

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

export function TeamSelectionFormItem({
  type,
  label,
  placeholder = 'Выберите команду',
  name = 'teamId',
}: Props) {
  const { data, isFetching } = useGetTeamSnippetListQuery();

  return (
    <Form.Item
      label={label}
      name={name}
      rules={
        type === 'form'
          ? [{ required: true, message: 'Выберите команду' }]
          : undefined
      }
      style={type === 'filter' ? { minWidth: '150px' } : undefined}
    >
      <Select
        style={{ width: '100%' }}
        showSearch
        placeholder={placeholder}
        loading={isFetching}
        options={data?.teams.map((team) => ({
          label: 'Команда №' + team.number,
          value: team.id,
        }))}
        optionFilterProp="label"
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        allowClear={type === 'filter'}
      />
    </Form.Item>
  );
}

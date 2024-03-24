// import { useGetTeamsForSelectQuery } from '@/redux/services/adminApi';
import { TeamTableItem, TeamsPage } from '@/types/responses';
import { Form, Select } from 'antd';

//TODO: hooks

export function TeamSelectionFormItem({
  placeholder,
  name,
}: {
  placeholder: string;
  name: string;
}) {
  // const { data, isFetching } = useGetTeamsForSelectQuery();
  const { data, isFetching } = {
    data: [
      {
        teamNumber: 1,
        id: 1,
        projectTheme: 'ASD',
      },
    ] as TeamTableItem[],
    isFetching: false,
  };

  return (
    <Form.Item name={name}>
      <Select
        showSearch
        allowClear
        placeholder={placeholder}
        loading={isFetching}
        options={data?.map((team) => ({
          // label: 'Команда №' + team.number,
          label: 'Команда №' + team.teamNumber,
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

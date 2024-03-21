// import { useGetAccountsForSelectQuery } from '@/redux/services/adminApi';
import { Form, Select } from 'antd';

export function UserSelectionFormItem({
  placeholder,
  name,
}: {
  placeholder: string;
  name: string;
}) {
  // const { data, isFetching } = useGetAccountsForSelectQuery();
  // console.log(data);
  return (
    <Form.Item name={name}>
      <Select
        showSearch
        allowClear
        placeholder={placeholder}
        // loading={isFetching}
        // options={data?.map((user) => ({ label: user.name, value: user.id }))}
        optionFilterProp="label"
        // filterOption={(input, option) =>
        //   (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        // }
      />
    </Form.Item>
  );
}

import { useGetUserSnippetListQuery } from '@/redux/services/api';
import { Role } from '@/types/common';
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

export function LearnerSelectionFormItem({
  type,
  label,
  placeholder = 'Выберите ученика',
  name = 'learnerId',
}: Props) {
  const { data, isFetching } = useGetUserSnippetListQuery({
    role: Role.LEARNER,
  });

  return (
    <Form.Item
      label={label}
      name={name}
      rules={
        type === 'form'
          ? [{ required: true, message: 'Выберите ученика' }]
          : undefined
      }
      style={type === 'filter' ? { minWidth: '240px' } : undefined}
    >
      <Select
        style={{ width: '100%' }}
        showSearch
        placeholder={placeholder}
        loading={isFetching}
        options={data?.items.map((user) => ({
          label: `${user.surname} ${user.name}`,
          value: user.id,
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

import { useGetUserSnippetListQuery } from '@/redux/services/api';
import { Role } from '@/types/common';
import { Form, Select } from 'antd';

type Props = {
  placeholder?: string;
  onSelect?: (value: string, option: Option) => void;
  type: 'filter' | 'form';
};

export type Option = {
  label: string;
  value: string;
};

export function UserSelection({
  type,
  placeholder = 'Выберите ученика',
  onSelect,
}: Props) {
  const { data, isFetching } = useGetUserSnippetListQuery({
    role: Role.LEARNER,
  });

  return (
    <Select
      style={{ width: '100%' }}
      showSearch
      placeholder={placeholder}
      loading={isFetching}
      options={data?.items.map<Option>((user) => ({
        label: `${user.surname} ${user.name}`,
        value: user.id,
      }))}
      optionFilterProp="label"
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      allowClear={type === 'filter'}
      onSelect={onSelect}
    />
  );
}

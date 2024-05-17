import { UserSelection } from '@/components/Selections/UserSelection';
import { Form } from 'antd';
import { ComponentProps } from 'react';

type Props = {
  placeholder?: string;
  name?: string;
  onSelect?: () => void;
} & (
  | {
      type: 'filter';
      label?: undefined;
    }
  | {
      type: 'form';
      label: string;
    }
) &
  ComponentProps<typeof Form.Item>;

export function LearnerSelectionFormItem({
  type,
  label,
  placeholder = 'Выберите ученика',
  name = 'learnerId',
  onSelect,
  ...formItemProps
}: Props) {
  return (
    <Form.Item
      {...formItemProps}
      label={label}
      name={name}
      rules={
        type === 'form' ? [{ required: true, message: placeholder }] : undefined
      }
      style={type === 'filter' ? { minWidth: '240px' } : undefined}
    >
      <UserSelection type={type} placeholder={placeholder} />
    </Form.Item>
  );
}

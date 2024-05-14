import { UserSelection } from '@/components/Selections/UserSelection';
import { Form } from 'antd';

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
);

export function LearnerSelectionFormItem({
  type,
  label,
  placeholder = 'Выберите ученика',
  name = 'learnerId',
  onSelect,
}: Props) {
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
      <UserSelection type={type} placeholder={placeholder} />
    </Form.Item>
  );
}

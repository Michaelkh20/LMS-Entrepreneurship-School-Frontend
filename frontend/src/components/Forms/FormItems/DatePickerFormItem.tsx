import { DatePicker, DatePickerProps, Form, Input } from 'antd';
import type { Dayjs } from 'dayjs';

export function DatePickerFormItem({
  name,
  placeholder,
  value,
  onChange,
}: {
  name: string;
  placeholder: string;
  value: Dayjs;
  onChange: DatePickerProps['onChange'];
}) {
  return (
    <Form.Item name={name}>
      <DatePicker value={value} placeholder={placeholder} onChange={onChange} />
    </Form.Item>
  );
}

import { DatePicker, DatePickerProps, Form, Input } from 'antd';
import type { Dayjs } from 'dayjs';

export function DatePickerFormItem({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) {
  return (
    <Form.Item name={name}>
      <DatePicker showTime placeholder={placeholder} />
    </Form.Item>
  );
}

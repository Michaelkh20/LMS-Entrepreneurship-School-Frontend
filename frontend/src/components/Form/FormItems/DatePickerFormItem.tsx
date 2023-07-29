import { DatePicker, Form, Input } from 'antd';

export function DatePickerFormItem({
  placeholder,
  name,
}: {
  placeholder: string;
  name: string;
}) {
  return (
    <Form.Item name={name}>
      <DatePicker placeholder={placeholder} />
    </Form.Item>
  );
}

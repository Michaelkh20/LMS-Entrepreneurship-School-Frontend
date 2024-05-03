import { Form, Input } from 'antd';

export function TitleFormItem({
  name = 'title',
  placeholder,
}: {
  name?: string;
  placeholder: string;
}) {
  return (
    <Form.Item name={name}>
      <Input type="text" placeholder={placeholder} />
    </Form.Item>
  );
}

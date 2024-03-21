import { Form, Input } from 'antd';

export function NameFormItem({ name = 'name' }: { name?: string }) {
  return (
    <Form.Item name={name}>
      <Input type="text" placeholder={'Имя'} />
    </Form.Item>
  );
}

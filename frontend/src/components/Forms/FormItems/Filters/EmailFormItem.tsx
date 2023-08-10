import { Form, Input } from 'antd';

export function EmailFormItem() {
  return (
    <Form.Item name={'email'}>
      <Input type="email" placeholder={'Email'} />
    </Form.Item>
  );
}

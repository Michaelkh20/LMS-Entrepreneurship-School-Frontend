import { Form, Input } from 'antd';

export function LotTitleFormItem() {
  return (
    <Form.Item name={'lotTitle'}>
      <Input type="text" placeholder={'Название лота'} />
    </Form.Item>
  );
}

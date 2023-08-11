import { Form, InputNumber } from 'antd';

export function LotNumberFormItem() {
  return (
    <Form.Item name={'lotNumber'}>
      <InputNumber min={1} placeholder={'Номер лота'} />
    </Form.Item>
  );
}

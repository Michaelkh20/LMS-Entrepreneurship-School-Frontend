import { Form, InputNumber } from 'antd';

export function LotNumberFormItem() {
  return (
    <Form.Item name={'lotNumber'}>
      <InputNumber
        style={{ minWidth: 130 }}
        min={1}
        placeholder={'Номер лота'}
      />
    </Form.Item>
  );
}

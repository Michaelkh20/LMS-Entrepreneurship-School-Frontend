import { Form, InputNumber } from 'antd';

export function TeamNumberFormItem() {
  return (
    <Form.Item name={'teamNumber'}>
      <InputNumber min={1} placeholder={'Номер команды'} />
    </Form.Item>
  );
}

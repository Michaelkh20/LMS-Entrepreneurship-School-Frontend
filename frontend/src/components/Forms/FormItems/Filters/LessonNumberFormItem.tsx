import { Form, InputNumber } from 'antd';

export function LotNumberFormItem() {
  return (
    <Form.Item name={'lessonNumber'}>
      <InputNumber min={1} placeholder={'Номер темы'} />
    </Form.Item>
  );
}

import { Form, InputNumber } from 'antd';

export function LessonNumberFormItem() {
  return (
    <Form.Item name={'lessonNumber'}>
      <InputNumber min={1} placeholder={'Номер темы'} />
    </Form.Item>
  );
}

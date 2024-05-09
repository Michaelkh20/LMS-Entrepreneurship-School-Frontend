import { Form, InputNumber } from 'antd';

export function LessonNumberFormItem() {
  return (
    <Form.Item name={'lessonNumber'}>
      <InputNumber min={1} style={{minWidth: 120}} placeholder={'Номер урока'} />
    </Form.Item>
  );
}

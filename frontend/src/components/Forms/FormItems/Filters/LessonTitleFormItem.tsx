import { Form, Input } from 'antd';

export function LessonTitleFormItem() {
  return (
    <Form.Item name={'lessonTitle'}>
      <Input type="text" placeholder={'Название темы'} />
    </Form.Item>
  );
}

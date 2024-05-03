import { Form, Input } from 'antd';

export function LessonTitleFormItem() {
  return (
    <Form.Item name={'title'}>
      <Input type="text" placeholder={'Название темы'} />
    </Form.Item>
  );
}

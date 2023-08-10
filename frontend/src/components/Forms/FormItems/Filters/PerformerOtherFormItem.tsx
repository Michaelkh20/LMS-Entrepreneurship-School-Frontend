import { Form, Input } from 'antd';

export function PerformerOtherFormItem() {
  return (
    <Form.Item name={'performerOther'}>
      <Input type="text" placeholder={'Сторонний исполнитель'} />
    </Form.Item>
  );
}

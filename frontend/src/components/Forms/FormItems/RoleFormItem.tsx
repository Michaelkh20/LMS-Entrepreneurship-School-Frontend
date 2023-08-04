import { Form, Select } from 'antd';

export function RoleFormItem() {
  return (
    <Form.Item name={'role'}>
      <Select allowClear={true} placeholder={'Роль'} style={{ minWidth: 100 }}>
        <Select.Option value={'Learner'}>Ученик</Select.Option>
        <Select.Option value={'Tracker'}>Трекер</Select.Option>
      </Select>
    </Form.Item>
  );
}

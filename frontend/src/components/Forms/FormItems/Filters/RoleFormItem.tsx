import { Role } from '@/types/common';
import { Form, Select } from 'antd';

export function RoleFormItem() {
  return (
    <Form.Item name={'role'}>
      <Select allowClear={true} placeholder={'Роль'} style={{ minWidth: 100 }}>
        <Select.Option value={Role.Learner}>Ученик</Select.Option>
        <Select.Option value={Role.Tracker}>Трекер</Select.Option>
      </Select>
    </Form.Item>
  );
}

import { Form, Select } from 'antd';
import { Role } from '@/types/common'

export function RoleFormItem() {
  return (
    <Form.Item name={'role'}>
      <Select allowClear={true} placeholder={'Роль'} style={{ minWidth: 100 }}>
        <Select.Option value={Role.LEARNER}>Ученик</Select.Option>
        <Select.Option value={Role.TRACKER}>Трекер</Select.Option>
      </Select>
    </Form.Item>
  );
}

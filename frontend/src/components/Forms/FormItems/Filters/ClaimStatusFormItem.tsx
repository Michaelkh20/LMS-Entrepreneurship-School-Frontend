import { Form, Select } from 'antd';
import { ClaimStatus } from '@/types/common';

export function ClaimStatusFormItem({
  name = 'claimStatus',
}: {
  name?: string;
}) {
  return (
    <Form.Item name={name}>
      <Select allowClear placeholder={'Статус'} style={{ minWidth: 125 }}>
        <Select.Option value={ClaimStatus.Waiting}>Ожидание</Select.Option>
        <Select.Option value={ClaimStatus.Approved}>Одобрено</Select.Option>
        <Select.Option value={ClaimStatus.Declined}>Отклонено</Select.Option>
      </Select>
    </Form.Item>
  );
}

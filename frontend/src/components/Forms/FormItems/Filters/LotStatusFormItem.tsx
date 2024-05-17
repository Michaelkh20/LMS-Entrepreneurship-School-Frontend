import { Form, Select } from 'antd';
import { LotStatus } from '@/types/common';

export function LotStatusFormItem({ name = 'status' }: { name?: string }) {
  return (
    <Form.Item name={name}>
      <Select allowClear placeholder={'Статус'} style={{ minWidth: 125 }}>
        <Select.Option value={LotStatus.Approval}>Ожидание</Select.Option>
        <Select.Option value={LotStatus.OnSale}>В продаже</Select.Option>
        <Select.Option value={LotStatus.Withdrawn}>
          Снят с продажи
        </Select.Option>
      </Select>
    </Form.Item>
  );
}

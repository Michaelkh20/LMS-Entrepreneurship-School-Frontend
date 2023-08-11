import { TransactionType } from '@/types/common';
import { Form, Select } from 'antd';

export function TransactionTypeFormItem() {
  return (
    <Form.Item name={'transactionType'}>
      <Select
        allowClear
        placeholder={'Тип транзакции'}
        style={{ minWidth: 100 }}
      >
        <Select.Option value={TransactionType.Activity}>
          Активность на уроке
        </Select.Option>
        <Select.Option value={TransactionType.AdminIncome}>
          Подарок от админа
        </Select.Option>
        <Select.Option value={TransactionType.AdminOutcome}>
          Штраф от админа
        </Select.Option>
        <Select.Option value={TransactionType.BuyLot}>
          Покупка лота
        </Select.Option>
        <Select.Option value={TransactionType.FailedDeadline}>
          Пропуск дедлайна
        </Select.Option>
        <Select.Option value={TransactionType.SellLot}>
          Продажа лота
        </Select.Option>
        <Select.Option value={TransactionType.TransferIncome}>
          Входящий перевод
        </Select.Option>
        <Select.Option value={TransactionType.TransferOutcome}>
          Исходящий перевод
        </Select.Option>
      </Select>
    </Form.Item>
  );
}

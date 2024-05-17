'use client';

import React, { useEffect, useState } from 'react';
import type { TransferFormValues } from '@/types/forms';
import { Button, Form, InputNumber, Space, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { LearnerSelectionFormItem } from '../FormItems/Selection/LearnerSelectionFormItem';
import { UserSelection } from '@/components/Selections/UserSelection';

type Props = {
  onFinish: (values: TransferFormValues) => boolean;
};

export default function TransferForm({ onFinish }: Props) {
  const [form] = useForm<TransferFormValues>();
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const [messageApi, contextHolder] = message.useMessage();

  const handleFinish = (values: TransferFormValues) => {
    const result = onFinish(values);
    setIsSuccess(result);

    if (result) {
      form.resetFields();
    }
  };

  useEffect(() => {
    if (isSuccess === true) {
      messageApi.success('Заявка успешно подана');
    }

    if (isSuccess === false) {
      messageApi.error('Не удалось подать заявку. Недостаточно средств');
    }

    setIsSuccess(null);
  }, [isSuccess, messageApi]);

  const handleValuesChange = (_: any, values: TransferFormValues) => {
    console.log(values);
  };

  return (
    <>
      <Form<TransferFormValues>
        form={form}
        layout="vertical"
        onValuesChange={handleValuesChange}
        style={{ maxWidth: 380 }}
        onFinish={handleFinish}
      >
        <Form.Item
          label="Получатель"
          name="receiver"
          rules={[{ required: true, message: 'Выберите получателя' }]}
        >
          <UserSelection
            labelInValue
            type={'form'}
            placeholder={'Выберите получателя'}
          />
        </Form.Item>
        <Form.Item
          label="Сумма перевода"
          name="sum"
          rules={[{ required: true, message: 'Введите cумму перевода' }]}
          hasFeedback
        >
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Подать заявку на перевод
            </Button>
          </Space>
        </Form.Item>
      </Form>
      {contextHolder}
    </>
  );
}

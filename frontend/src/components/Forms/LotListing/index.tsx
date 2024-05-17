'use client';

import React from 'react';
import type { ListingLotFormValues, TestFormValues } from '@/types/forms';
import { Button, Form, Input, InputNumber, Space } from 'antd';
import { useForm } from 'antd/lib/form/Form';

type Props = {
  onFinish: (values: ListingLotFormValues) => void;
};

export default function LotListingForm({ onFinish }: Props) {
  const [form] = useForm<ListingLotFormValues>();

  const handleValuesChange = (_: any, values: ListingLotFormValues) => {
    console.log(values);
  };

  const handleFinish = (values: ListingLotFormValues) => {
    onFinish(values);
    form.resetFields();
  };

  return (
    <Form<ListingLotFormValues>
      form={form}
      layout="vertical"
      onValuesChange={handleValuesChange}
      onFinish={handleFinish}
      style={{ maxWidth: 380 }}
    >
      <Form.Item
        label="Название лота"
        name="title"
        rules={[{ required: true, message: 'Введите название лота' }]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Описание лота"
        name="description"
        rules={[{ required: true, message: 'Введите описание лота' }]}
        hasFeedback
      >
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item
        label="Условия лота"
        name="terms"
        rules={[{ required: true, message: 'Введите условия лота' }]}
        hasFeedback
      >
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item
        label="Стоимость"
        name="price"
        rules={[{ required: true, message: 'Введите cтоимость' }]}
        hasFeedback
      >
        <InputNumber />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Подать заявку на размещение
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

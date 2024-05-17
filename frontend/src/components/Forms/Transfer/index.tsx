'use client';

import React, { useEffect } from 'react';
import type { TestFormValues } from '@/types/forms';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Space,
  message,
} from 'antd';
import { useForm } from 'antd/lib/form/Form';
import locale_ru from 'antd/locale/ru_RU';
import type {
  ICreateUpdateCompetitionRequest,
  ICreateUpdateCompetitionResponse,
  ICreateUpdateExamRequest,
  ICreateUpdateExamResponse,
} from '@/types/proto';
import { useRouter } from 'next/navigation';
import { formValuesToRequest, getResponseToFormValues } from './helpers';
import type {
  ExamCompetition,
  ICreateUpdateExamCompetitionRequest,
  MutationResultType,
  UpdateCompetitionApiArg,
  UpdateExamApiArg,
} from '@/types/api';
import { LearnerSelectionFormItem } from '../FormItems/Selection/LearnerSelectionFormItem';

type Props = {
  onFinish: () => void;
};

export default function TransferForm({ onFinish }: Props) {
  const [form] = useForm<TestFormValues>();

  const handleValuesChange = (_: any, values: TestFormValues) => {
    console.log(values);
  };

  const handleFinish = () => {
    onFinish();
  };

  return (
    <Form<TestFormValues>
      form={form}
      layout="vertical"
      onValuesChange={handleValuesChange}
      style={{ maxWidth: 380 }}
      onFinish={handleFinish}
    >
      <LearnerSelectionFormItem
        type="form"
        name="receiverId"
        label="Получатель"
        placeholder="Выберите получателя"
      />
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
  );
}

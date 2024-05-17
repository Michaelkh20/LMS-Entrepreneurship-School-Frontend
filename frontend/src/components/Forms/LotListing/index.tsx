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

export default function LotListingForm({ onFinish }: Props) {
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
        name="title"
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
        name="terms"
        rules={[{ required: true, message: 'Введите Стоимость' }]}
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

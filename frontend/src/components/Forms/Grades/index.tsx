'use client';

import { useUpdateGradeMutation } from '@/redux/services/api';
import { GradeFormValues } from '@/types/forms';
import { Button, Flex, Form, Input, InputNumber, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { useEffect } from 'react';
import { formVlauesToRequest } from './helpers';

type Props = {
  gradeId: string;
  initialVlaues?: GradeFormValues;
};

export default function GradeForm({ gradeId, initialVlaues }: Props) {
  const [form] = useForm<GradeFormValues>();
  const [updateGrade, result] = useUpdateGradeMutation();

  const handleFinish = (values: GradeFormValues) => {
    const request = formVlauesToRequest(values, gradeId);
    updateGrade(request);
  };

  const onValuesChange = (changedValues: any, allValues: GradeFormValues) => {
    console.log('onValuesChange', changedValues, allValues);
  };

  useEffect(() => {
    if (result.isError) {
      message.error('Что-то пошло не так', 5);
    }

    if (result.isLoading) {
      message.loading({ content: 'Загрузка...', duration: 0, key: 'Loading' });
    } else {
      message.destroy('Loading');
    }

    if (result.isSuccess) {
      message.success('Оценка успешно выставлена');
    }
  }, [form, result]);

  return (
    <Form<GradeFormValues>
      form={form}
      onValuesChange={onValuesChange}
      onFinish={handleFinish}
      layout="vertical"
      initialValues={initialVlaues}
    >
      <Form.Item
        label="Оценка"
        name="grade"
        rules={[
          { required: true, message: 'Введите номер урока' },
          {
            min: 0,
            max: 10,
            message: 'Оценка должна быть от 0 до 10',
          },
        ]}
        hasFeedback
      >
        <InputNumber
          style={{ width: '100%' }}
          min={0}
          max={10}
          placeholder="Оценка от 0 до 10"
        />
      </Form.Item>
      <Form.Item
        label="Комментарий"
        name="comment"
        rules={[
          {
            max: 1_000,
            message: 'Комментарий должен иметь длину не более 1000 символов',
          },
        ]}
        hasFeedback
        style={{ maxWidth: 500 }}
      >
        <Input.TextArea rows={4} maxLength={1_000} />
      </Form.Item>
      <Form.Item>
        <Flex justify="center">
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginTop: '1rem' }}
            loading={result.isLoading}
          >
            {initialVlaues ? 'Изменить оценку' : 'Оценить'}
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
}

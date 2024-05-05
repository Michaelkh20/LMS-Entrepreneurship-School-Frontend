'use client';

import FileUploader from '@/components/FileUploader';
import { useCreateSubmissionMutation } from '@/redux/services/api';
import { SubmissionFormValues } from '@/types/forms';
import { Button, Flex, Form, Input, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { useEffect } from 'react';
import { formVlauesToRequest } from './helpers';
import { useAuth } from '@/redux/features/authSlice';

export default function SubmissionLearnerForm({ hwId }: { hwId: string }) {
  const [form] = useForm<SubmissionFormValues>();
  const [createSubmission, result] = useCreateSubmissionMutation();
  const [authState] = useAuth();

  const handleFinish = (values: SubmissionFormValues) => {
    const request = formVlauesToRequest(values, hwId);
    createSubmission(request);
  };

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onValuesChange = (
    changedValues: any,
    allValues: SubmissionFormValues
  ) => {
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
      message.success('Решение успешно отправлено');
      form.resetFields();
    }
  }, [form, result]);

  return (
    <Form<SubmissionFormValues>
      form={form}
      onValuesChange={onValuesChange}
      onFinish={handleFinish}
      layout="vertical"
    >
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
      <Form.Item
        label="Файлы"
        name="files"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        noStyle
      >
        <FileUploader hwId={hwId} userId={authState.userId!} />
      </Form.Item>
      <Form.Item>
        <Flex justify="center">
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginTop: '1rem' }}
            loading={result.isLoading}
          >
            Сдать решение
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
}

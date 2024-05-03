'use client';

import { useAuth } from '@/redux/features/authSlice';
import { useSetPasswordMutation } from '@/redux/services/api';
import { SetPasswordFormValues } from '@/types/forms';
import { Button, Flex, Form, Input, Space } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import Password from 'antd/lib/input/Password';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export default function SetPasswordForm({ className }: { className?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [form] = useForm<SetPasswordFormValues>();
  const [setPassword, { isLoading, isSuccess, data }] =
    useSetPasswordMutation();
  const [_, { logIn }] = useAuth();

  useEffect(() => {
    if (isSuccess && data.response?.result?.$case === 'success') {
      logIn(data.response.result.success);
      router.push('/login');
    }
  }, [data, isSuccess, logIn, router]);

  const handleFinish = (values: SetPasswordFormValues) => {
    setPassword({
      token: searchParams.get('token')!,
      newPassword: values.newPassword,
    });
  };

  return (
    <Form<SetPasswordFormValues>
      form={form}
      onFinish={handleFinish}
      layout="vertical"
      className={className}
    >
      <Form.Item
        label="Новый пароль"
        name="newPassword"
        rules={[
          { required: true, message: 'Введите пароль' },
          {
            min: 8,
            message: 'Пароль должен иметь длину не менее 6 символов',
          },
        ]}
        hasFeedback
      >
        <Password />
      </Form.Item>
      <Form.Item
        label="Введите новый пароль ещё раз"
        name="newPasswordDuplicate"
        dependencies={['newPassword']}
        rules={[
          { required: true, message: 'Введите пароль' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Пароли не совпадают!'));
            },
          }),
        ]}
        hasFeedback
      >
        <Password />
      </Form.Item>
      <Form.Item>
        <Flex justify="center">
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginTop: '1rem' }}
            loading={isLoading}
          >
            Установить пароль
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
}

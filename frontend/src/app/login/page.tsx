'use client';

import styles from './page.module.css';
import { Button, Form, Input } from 'antd';
import { useAuthMutation } from '@/redux/services/api';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/redux/features/authSlice';

import { Role } from '@/types/common';
import { AuthStatus } from '@/types/redux';

type AuthFormValues = {
  login: string;
  password: string;
};

export default function Home() {
  const router = useRouter();
  const [form] = Form.useForm<AuthFormValues>();
  const [auth, { data, isLoading, isError, isSuccess }] = useAuthMutation();
  const [authState, { logIn }] = useAuth();

  function onFinish(values: AuthFormValues) {
    const { login, password } = values;
    auth({ login, password });
  }

  useEffect(() => {
    if (isError) {
      form.setFields([
        {
          name: 'password',
          errors: ['Неверный логин или пароль'],
        },
      ]);
    }
  }, [form, isError]);

  useEffect(() => {
    if (isSuccess && data.response?.result?.$case === 'success') {
      console.log(data);
      logIn(data.response.result.success);
    }
  }, [data, isSuccess, logIn]);

  useEffect(() => {
    if (authState.status === AuthStatus.AUTHED) {
      console.log('redux login');
      if (authState.role === Role.ADMIN) {
        router.push(`/admin/users`);
        return;
      }

      if (authState.role === Role.LEARNER || authState.role === Role.TRACKER) {
        router.push(`/learner/profile`);
        return;
      }
    }
  }, [authState.status, router]);

  return (
    <div className={styles.main}>
      <div className={styles.header}>Авторизация</div>
      <Form
        form={form}
        onFinish={onFinish}
        size="large"
        className={styles.LoginForm}
      >
        <Form.Item
          name="login"
          rules={[{ required: true, message: 'Введите логин' }]}
        >
          <Input placeholder="Логин" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <Input.Password placeholder="Пароль" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginTop: '1rem' }}
            className={styles.LogInButton}
            loading={isLoading}
          >
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

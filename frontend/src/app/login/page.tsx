'use client';

import styles from './page.module.css';
import { Button, Form, Input } from 'antd';
import { useAuthMutation } from '@/redux/services/commonApi';
import { useRouter } from 'next/navigation';
import { use, useEffect } from 'react';

import { dto } from '@dto';
import Role = dto.Role;

type AuthFormValues = {
  login: string;
  password: string;
};

export default function Home() {
  const router = useRouter();
  const [form] = Form.useForm<AuthFormValues>();
  const [auth, { data, isLoading, isError, isSuccess }] = useAuthMutation();

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
    if (isSuccess) {
      router.push(
        data?.role === Role.ADMIN
          ? '/admin/accounts'
          : `/learner/profile/${data?.id}`
      );
    }
  }, [isSuccess, router]);

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

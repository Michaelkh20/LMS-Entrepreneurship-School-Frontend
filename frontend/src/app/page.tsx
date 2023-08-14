'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { Button, Form, Input } from 'antd';
import { useAuthMutation } from '@/redux/services/commonApi';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [auth, result] = useAuthMutation();

  function onFinish(values: any) {
    const { email, password } = values;
    auth({ login: email, password });
  }

  if (result.isSuccess) {
    router.push('/admin');
  }

  return (
    <>
      <div>Auth</div>
      <Form onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Введите email' }]}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 6 }}
        >
          <Input placeholder="Логин" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Введите пароль' }]}
          wrapperCol={{ span: 6 }}
        >
          <Input.Password placeholder="Пароль" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: '#198754', marginTop: '1rem' }}
          >
            Войти
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

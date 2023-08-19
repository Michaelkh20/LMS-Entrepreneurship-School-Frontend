'use client';
import { Role } from '@/types/common';
import { Form, Input, Select, Button, Space, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { AccountRequest } from '@/types/requests';
import { useCreateAccountMutation } from '@/redux/services/adminApi';
import { useEffect, useState } from 'react';
import PhoneNumber from '../FormItems/EntityForms/PhoneNumber';
import { useRouter } from 'next/navigation';

const { Option } = Select;

export default function CreateAccountForm() {
  const [form] = useForm();
  const router = useRouter();
  const [createAccount, result] = useCreateAccountMutation();

  const [validEmail, setValidEmail] = useState(true);
  const [validPhone, setValidPhone] = useState(true);

  useEffect(() => {
    if (result.isError) {
      console.log(result.error);
      const errorDetails = result.error; // Assuming error details are in result.error

      // Check if the response status is 409
      if ('status' in errorDetails && errorDetails.status === 409) {
        let fieldsError = [];

        // Based on the message you get, update the appropriate field's error
        if ((errorDetails.data as string[]).includes('email')) {
          fieldsError.push({
            name: 'email',
            errors: ['Пользователь с таким email уже существует'],
          });
          setValidEmail(false);
          message.error('Пользователь с таким email уже существует', 5);
        }

        if ((errorDetails.data as string[]).includes('phone')) {
          fieldsError.push({
            name: 'phoneNumber',
            errors: ['Пользователь с таким номером телефона уже существует'],
          });
          setValidPhone(false);
          message.error(
            'Пользователь с таким номером телефона уже существует',
            5
          );
        }

        form.setFields(fieldsError);
      } else {
        message.error('Что-то пошло не так', 5);
      }
    }

    if (result.isLoading) {
      message.loading({ content: 'Загрузка...', duration: 0, key: 'Loading' });
    } else {
      message.destroy('Loading');
    }

    if (result.isSuccess) {
      message.success('Аккаунт успешно создан');
      router.push('/admin/accounts');
    }
  }, [form, result, router]);

  const onFinish = (values: any) => {
    const request = formValuesToRequest(values);
    console.log(values, request);
    createAccount(request);
  };

  function onValuesChange(changedValues: any, allValues: any) {
    if (changedValues.email) {
      setValidEmail(true);
    }
    if (changedValues.phoneNumber) {
      setValidPhone(true);
    }
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      layout="vertical"
      style={{ padding: '2rem' }}
    >
      <Form.Item
        label="Имя"
        name="firstName"
        rules={[
          { required: true, message: 'Введите имя' },
          {
            min: 2,
            message: 'Имя должно иметь длину не менее 2 символов',
          },
          {
            whitespace: true,
            message: 'Имя не может состоять из одних пробелов',
          },
        ]}
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 8 }}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Фамилия"
        name="surName"
        rules={[
          { required: true, message: 'Введите фамилию' },
          {
            min: 2,
            message: 'Фамилия должна иметь длину не менее 2 символов',
          },
          {
            whitespace: true,
            message: 'Фамилия не может состоять из одних пробелов',
          },
        ]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 8 }}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Отчество"
        name="middleName"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 8 }}
        rules={[
          {
            whitespace: true,
            message: 'Отчество не может состоять из одних пробелов',
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Роль"
        name="role"
        rules={[{ required: true, message: 'Выберите роль' }]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 4 }}
        hasFeedback
      >
        <Select>
          <Option value={Role.Learner}>Ученик</Option>
          <Option value={Role.Tracker}>Трекер</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Пол"
        name="gender"
        rules={[{ required: true, message: 'Выберите гендер' }]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 4 }}
        hasFeedback
      >
        <Select>
          <Option value={true}>Мужчина</Option>
          <Option value={false}>Женщина</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Мессенджер"
        name="messenger"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 4 }}
        rules={[{ required: true, message: 'Введите мессенджер' }]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Телефон"
        name="phoneNumber"
        rules={[
          { required: true, message: 'Введите номер телефона' },
          {
            len: 19,
            message: 'Неверный формат номера телефона',
          },
        ]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 6 }}
        required
        hasFeedback
      >
        <PhoneNumber />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Введите email' },
          { type: 'email', message: 'Неверный формат email' },
        ]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 6 }}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          { required: true, message: 'Введите пароль' },
          {
            min: 6,
            message: 'Пароль должен иметь длину не менее 6 символов',
          },
        ]}
        wrapperCol={{ span: 6 }}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: '#198754', marginTop: '1rem' }}
            disabled={!validEmail || !validPhone}
            loading={result.isLoading}
          >
            Создать аккаунт
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

function formValuesToRequest(values: any): AccountRequest {
  return {
    id: null,
    name: values.firstName,
    surname: values.surName,
    middleName: values.middleName || null,
    email: values.email,
    phone: values.phoneNumber.replace(/\D/g, ''),
    messenger: values.messenger,
    gender: values.gender,
    role: values.role,
    password: values.password,
  };
}

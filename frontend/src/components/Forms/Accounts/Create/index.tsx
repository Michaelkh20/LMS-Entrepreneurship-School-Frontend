'use client';
import { Form, Input, Button, Space, message, Radio } from 'antd';
import { useForm } from 'antd/lib/form/Form';

import { useEffect } from 'react';
import PhoneNumber from '../../FormItems/EntityForms/PhoneNumber';
import { useRouter } from 'next/navigation';

import { Role, Sex } from '@/types/common';
import type { CreateAccountFormType } from '@/types/forms';
import { formValuesToRequest } from './helpers';
import { useCreateUserMutation } from '@/redux/services/api';
import { roleToString, sexToString } from '@/util/enumsToString';

const sexOptions = [
  { label: sexToString(Sex.MALE), value: Sex.MALE },
  { label: sexToString(Sex.FEMALE), value: Sex.FEMALE },
];

const roleOptions = [
  { label: roleToString(Role.LEARNER), value: Role.LEARNER },
  { label: roleToString(Role.TRACKER), value: Role.TRACKER },
];

export default function CreateAccountForm() {
  const [form] = useForm<CreateAccountFormType>();
  const router = useRouter();
  const [createUser, result] = useCreateUserMutation();

  useEffect(() => {
    if (result.isError) {
      console.log(result.error);
      const errorDetails = result.error; // Assuming error details are in result.error

      // Check if the response status is 409
      if ('status' in errorDetails && errorDetails.status === 409) {
        // const data = errorDetails.data as AccountChangeErrorResponse;
        let fieldsError = [];

        // Based on the message you get, update the appropriate field's error
        // if (data.email) {
        fieldsError.push({
          name: 'email',
          errors: ['Пользователь с таким email уже существует'],
        });
        message.error('Пользователь с таким email уже существует', 5);
        // }

        // if (data.phone) {
        //   fieldsError.push({
        //     name: 'phone',
        //     errors: ['Пользователь с таким номером телефона уже существует'],
        //   });
        //   setValidPhone(false);
        //   message.error(
        //     'Пользователь с таким номером телефона уже существует',
        //     5
        //   );
        // }

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
      // const data = result.data as AccountChangeSuccessResponse;
      message.success('Аккаунт успешно создан');
      router.push(`/admin/accounts`);
    }
  }, [form, result, router]);

  const onFinish = (values: CreateAccountFormType) => {
    const request = formValuesToRequest(values);
    createUser(request);
  };

  function onValuesChange(changedValues: any, values: CreateAccountFormType) {
    console.log(values);
  }

  return (
    <Form<CreateAccountFormType>
      form={form}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      layout="vertical"
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
        name="lastName"
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
        label="Пол"
        name="sex"
        rules={[{ required: true, message: 'Выберите пол' }]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 4 }}
        hasFeedback
      >
        <Radio.Group
          options={sexOptions}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>
      <Form.Item
        label="Роль"
        name="role"
        rules={[{ required: true, message: 'Выберите роль' }]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 4 }}
        hasFeedback
      >
        <Radio.Group
          options={roleOptions}
          optionType="button"
          buttonStyle="solid"
        />
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
        name="phone"
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
      {/* <Form.Item
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
      </Form.Item> */}
      <Form.Item>
        <Space>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginTop: '1rem' }}
            loading={result.isLoading}
          >
            Создать аккаунт
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

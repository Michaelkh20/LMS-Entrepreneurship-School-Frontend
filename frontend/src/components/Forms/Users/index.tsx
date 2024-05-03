'use client';
import { Form, Input, Button, Space, message, Radio } from 'antd';
import { useForm } from 'antd/lib/form/Form';

import { useEffect } from 'react';
import PhoneNumber from '../FormItems/EntityForms/PhoneNumberInput';
import { useRouter } from 'next/navigation';

import { Role, Sex } from '@/types/common';
import type { UserFormValues } from '@/types/forms';
import { formValuesToRequest, getResponseToFormValues } from './helpers';
import { roleToString, sexToString } from '@/util/enumsToString';
import {
  ICreateUpdateUserRequest,
  ICreateUpdateUserResponse,
  IGetUserResponse,
} from '@/types/proto';
import { MutationResultType, UpdateUserApiArg } from '@/types/api';

const sexOptions = [
  { label: sexToString(Sex.MALE), value: Sex.MALE },
  { label: sexToString(Sex.FEMALE), value: Sex.FEMALE },
];

const roleOptions = [
  { label: roleToString(Role.LEARNER), value: Role.LEARNER },
  { label: roleToString(Role.TRACKER), value: Role.TRACKER },
];

type UserFormProps = {
  onFinish: (values: ICreateUpdateUserRequest) => void;
} & (
  | {
      type: 'create';
      result: MutationResultType<
        ICreateUpdateUserResponse,
        ICreateUpdateUserRequest
      >;
      user?: undefined;
    }
  | {
      type: 'edit';
      result: MutationResultType<ICreateUpdateUserResponse, UpdateUserApiArg>;
      user: IGetUserResponse;
    }
);

export default function UserForm({
  onFinish,
  type,
  result,
  user,
}: UserFormProps) {
  const [form] = useForm<UserFormValues>();
  const router = useRouter();

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
      const userId = result.data.user?.id;
      message.success(
        type === 'create'
          ? 'Пользователь успешно создан'
          : 'Пользователь успешно изменён'
      );
      router.push(`/admin/users/${userId}`);
    }
  }, [form, result, router, type]);

  const handleFinish = (values: UserFormValues) => {
    const request = formValuesToRequest(values);
    onFinish(request);
  };

  function onValuesChange(changedValues: any, values: UserFormValues) {
    console.log(values);
  }

  return (
    <Form<UserFormValues>
      form={form}
      onFinish={handleFinish}
      onValuesChange={onValuesChange}
      initialValues={
        type === 'edit' ? getResponseToFormValues(user) : undefined
      }
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
            len: 10,
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
      <Form.Item>
        <Space>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginTop: '1rem' }}
            loading={result.isLoading}
          >
            {type === 'create'
              ? 'Создать пользователя'
              : 'Изменить пользователя'}
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

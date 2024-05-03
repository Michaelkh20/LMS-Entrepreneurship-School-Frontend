'use client';

import React, { useEffect } from 'react';
import type { TestFormValues } from '@/types/forms';
import { Button, DatePicker, Form, Input, Radio, Space, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import locale_ru from 'antd/locale/ru_RU';
import {
  ICreateUpdateTestRequest,
  ICreateUpdateTestResponse,
  IGetTestResponse,
} from '@/types/proto';
import { useRouter } from 'next/navigation';
import { formValuesToRequest, getResponseToFormValues } from './helpers';
import { LessonSelectionFormItem } from '../FormItems/EntityForms/LessonSelectionFormItem';
import { MutationResultType, UpdateTestApiArg } from '@/types/api';

type TestFormProps = {
  onFinish: (values: ICreateUpdateTestRequest) => void;
} & (
  | {
      type: 'create';
      result: MutationResultType<
        ICreateUpdateTestResponse,
        ICreateUpdateTestRequest
      >;
      test?: undefined;
    }
  | {
      type: 'edit';
      result: MutationResultType<ICreateUpdateTestResponse, UpdateTestApiArg>;
      test: IGetTestResponse;
    }
);

export default function TestForm({
  onFinish,
  type,
  result,
  test,
}: TestFormProps) {
  const [form] = useForm<TestFormValues>();
  const router = useRouter();

  useEffect(() => {
    if (result.isError) {
      console.log(result.error);
      const errorDetails = result.error; // Assuming error details are in result.error

      // Check if the response status is 409
      if ('status' in errorDetails && errorDetails.status === 409) {
        let fieldsError = [];
        console.log(errorDetails.data);

        fieldsError.push({
          name: 'title',
          errors: ['Тест с таким названием уже существует'],
        });
        message.error('Тест с таким названием уже существует', 5);

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
      const testId = result.data.test?.id;
      message.success(
        type === 'create' ? 'Тест успешно создан' : 'Тест успешно изменён'
      );
      router.push(
        testId ? `/admin/tasks/tests/${testId}` : '/admin/tasks/tests'
      );
    }
  }, [form, result, router, type]);

  const handleFinish = (values: TestFormValues) => {
    const request = formValuesToRequest(values);
    onFinish(request);
  };

  const handleValuesChange = (_: any, values: TestFormValues) => {
    console.log(values);
  };

  return (
    <Form<TestFormValues>
      form={form}
      layout="vertical"
      onValuesChange={handleValuesChange}
      onFinish={handleFinish}
      initialValues={
        type === 'edit' ? getResponseToFormValues(test) : undefined
      }
    >
      <Form.Item
        label="Название"
        name="title"
        rules={[
          { required: true, message: 'Введите название теста' },
          {
            min: 2,
            message: 'Название теста должно иметь длину не менее 2 символов',
          },
          {
            whitespace: true,
            message: 'Название теста не может состоять из одних пробелов',
          },
        ]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 8 }}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <LessonSelectionFormItem type="form" label="Урок" />
      <Form.Item
        label="Дедлайн"
        name="deadlineDate"
        rules={[{ required: true, message: 'Введите дедлайн' }]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 8 }}
        hasFeedback
      >
        <DatePicker locale={locale_ru.DatePicker} />
      </Form.Item>
      <Form.Item
        label="Ссылка на тест"
        name="testUrl"
        rules={[
          { required: true, message: 'Введите cсылку на тест' },
          { type: 'url', message: 'Нужно ввести ссылку' },
        ]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 8 }}
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
            {type === 'create' ? 'Создать тест' : 'Изменить тест'}
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

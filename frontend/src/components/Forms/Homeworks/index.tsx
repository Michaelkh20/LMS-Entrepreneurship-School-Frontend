'use client';

import React, { useEffect } from 'react';
import type { HomeworkFormValues } from '@/types/forms';
import { Button, DatePicker, Form, Input, Radio, Space, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import locale_ru from 'antd/locale/ru_RU';
import {
  ICreateUpdateHomeworkRequest,
  ICreateUpdateHomeworkResponse,
  IGetHomeworkResponse,
} from '@/types/proto';
import { useRouter } from 'next/navigation';
import { formValuesToRequest, getResponseToFormValues } from './helpers';
import { LessonSelectionFormItem } from '../FormItems/EntityForms/LessonSelectionFormItem';
import { MutationResultType, UpdateHwApiArg } from '@/types/api';

type HomeworkFormProps = {
  onFinish: (values: ICreateUpdateHomeworkRequest) => void;
} & (
  | {
      type: 'create';
      result: MutationResultType<
        ICreateUpdateHomeworkResponse,
        ICreateUpdateHomeworkRequest
      >;
      homework?: undefined;
    }
  | {
      type: 'edit';
      result: MutationResultType<ICreateUpdateHomeworkResponse, UpdateHwApiArg>;
      homework: IGetHomeworkResponse;
    }
);

const isGroupOptions = [
  { label: 'Групповое', value: true },
  { label: 'Индивидуальное', value: false },
];

export default function HomeworkForm({
  onFinish,
  type,
  result,
  homework,
}: HomeworkFormProps) {
  const [form] = useForm<HomeworkFormValues>();
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
          errors: ['Задание с таким названием уже существует'],
        });
        message.error('Задание с таким названием уже существует', 5);

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
      const homeworkId = result.data.homework?.id;
      message.success(
        type === 'create' ? 'Урок успешно создан' : 'Урок успешно изменён'
      );
      router.push(
        homeworkId
          ? `/admin/tasks/homeworks/${homeworkId}`
          : '/admin/tasks/homeworks'
      );
    }
  }, [form, result, router, type]);

  const handleFinish = (values: HomeworkFormValues) => {
    const request = formValuesToRequest(values);
    onFinish(request);
  };

  const handleValuesChange = (_: any, values: HomeworkFormValues) => {
    console.log(values);
  };

  return (
    <Form<HomeworkFormValues>
      form={form}
      layout="vertical"
      onValuesChange={handleValuesChange}
      onFinish={handleFinish}
      initialValues={
        type === 'edit' ? getResponseToFormValues(homework) : undefined
      }
      style={{ maxWidth: 380 }}
    >
      <Form.Item
        label="Название"
        name="title"
        rules={[
          { required: true, message: 'Введите название домашнего задания' },
          {
            min: 2,
            message: 'Название ДЗ должно иметь длину не менее 2 символов',
          },
          {
            whitespace: true,
            message: 'Название ДЗ не может состоять из одних пробелов',
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Тип задания"
        name="isGroupWork"
        rules={[{ required: true, message: 'Выберите тип задания' }]}
        hasFeedback
      >
        <Radio.Group
          options={isGroupOptions}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>
      <LessonSelectionFormItem type="form" label="Урок" />
      <Form.Item
        label="Дедлайн"
        name="deadlineDate"
        rules={[{ required: true, message: 'Введите дедлайн' }]}
        hasFeedback
      >
        <DatePicker style={{ width: '100%' }} locale={locale_ru.DatePicker} />
      </Form.Item>
      <Form.Item
        label="Описание"
        name="description"
        rules={[
          { required: true, message: 'Введите описание' },
          {
            max: 1000,
            message: 'Описание ДЗ должно иметь длину не более 1000 символов',
          },
          {
            whitespace: true,
            message: 'Описание ДЗ не может состоять из одних пробелов',
          },
        ]}
        hasFeedback
      >
        <Input.TextArea rows={4} maxLength={1000} />
      </Form.Item>
      <Form.Item
        label="Критерии оценивания"
        name="gradingCriteria"
        rules={[
          { required: true, message: 'Введите критерии оценивания' },
          {
            max: 1000,
            message:
              'Критерии оценивания должны иметь длину не более 1000 символов',
          },
          {
            whitespace: true,
            message: 'Критерии оценивания не могут состоять из одних пробелов',
          },
        ]}
        hasFeedback
      >
        <Input.TextArea rows={4} maxLength={1000} />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit" loading={result.isLoading}>
            {type === 'create' ? 'Создать ДЗ' : 'Изменить ДЗ'}
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

'use client';

import React, { useEffect } from 'react';
import type { LessonFormValues } from '@/types/forms';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Space,
  message,
} from 'antd';
import { useForm } from 'antd/lib/form/Form';
import locale_ru from 'antd/locale/ru_RU';
import ListFormItem from '../FormItems/EntityForms/ListFormItem';
import {
  ICreateUpdateLessonRequest,
  ICreateUpdateLessonResponse,
  IGetLessonResponse,
} from '@/types/proto';
import { useRouter } from 'next/navigation';
import { formValuesToRequest, getResponseToFormValues } from './helpers';
import { MutationResultType, UpdateLessonApiArg } from '@/types/api';

type LessonFormProps = {
  onFinish: (values: ICreateUpdateLessonRequest) => void;
} & (
  | {
      type: 'create';
      result: MutationResultType<
        ICreateUpdateLessonResponse,
        ICreateUpdateLessonRequest
      >;
      lesson?: undefined;
    }
  | {
      type: 'edit';
      result: MutationResultType<
        ICreateUpdateLessonResponse,
        UpdateLessonApiArg
      >;
      lesson: IGetLessonResponse;
    }
);

export default function LessonForm({
  onFinish,
  type,
  result,
  lesson,
}: LessonFormProps) {
  const [form] = useForm<LessonFormValues>();
  const router = useRouter();

  useEffect(() => {
    if (result.isError) {
      console.log(result.error);
      const errorDetails = result.error; // Assuming error details are in result.error

      // Check if the response status is 409
      if ('status' in errorDetails && errorDetails.status === 409) {
        let fieldsError = [];

        fieldsError.push({
          name: 'lessonNumber',
          errors: ['Урок с таким номером уже существует'],
        });
        message.error('Урок с таким номером уже существует', 5);

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
      const lessonId = result.data.lesson?.id;
      message.success(
        type === 'create' ? 'Урок успешно создан' : 'Урок успешно изменён'
      );
      router.push(lessonId ? `/admin/lessons/${lessonId}` : '/admin/lessons');
    }
  }, [form, result, router, type]);

  const handleFinish = (values: LessonFormValues) => {
    const request = formValuesToRequest(values);
    onFinish(request);
  };

  const handleValuesChange = (_: any, values: LessonFormValues) => {
    console.log(values);
  };

  return (
    <Form<LessonFormValues>
      form={form}
      layout="vertical"
      onValuesChange={handleValuesChange}
      onFinish={handleFinish}
      initialValues={
        type === 'edit' ? getResponseToFormValues(lesson) : undefined
      }
    >
      <Form.Item
        label="Номер"
        name="lessonNumber"
        rules={[{ required: true, message: 'Введите номер урока' }]}
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 8 }}
        hasFeedback
      >
        <InputNumber min={1} />
      </Form.Item>
      <Form.Item
        label="Тема урока"
        name="title"
        rules={[
          { required: true, message: 'Введите тему урока' },
          {
            min: 2,
            message: 'Тема урока должна иметь длину не менее 2 символов',
          },
          {
            whitespace: true,
            message: 'Тема урока не может состоять из одних пробелов',
          },
        ]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 8 }}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Дата проведения"
        name="publishDate"
        rules={[{ required: true, message: 'Введите дату проведения' }]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 8 }}
        hasFeedback
      >
        <DatePicker locale={locale_ru.DatePicker} />
      </Form.Item>
      <Form.Item
        label="Описание"
        name="description"
        rules={[
          {
            max: 1000,
            message: 'Описание урока должно иметь длину не более 1000 символов',
          },
          {
            whitespace: true,
            message: 'Описание урока не может состоять из одних пробелов',
          },
        ]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 8 }}
        hasFeedback
      >
        <Input.TextArea rows={4} maxLength={1000} />
      </Form.Item>
      <ListFormItem
        name="videoUrls"
        addBtnText="Добавить ссылку на видео"
        requiredMessage="Введите ссылку на видео или удалите это поле"
        title="Видео"
        rules={[{ type: 'url', message: 'Нужно ввести ссылку' }]}
      />
      <ListFormItem
        name="presentationUrls"
        addBtnText="Добавить ссылку на презентацию"
        requiredMessage="Введите ссылку на презентацию или удалите это поле"
        title="Презентации"
        rules={[{ type: 'url', message: 'Нужно ввести ссылку' }]}
      />
      <Form.Item>
        <Space>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginTop: '1rem' }}
            loading={result.isLoading}
          >
            {type === 'create' ? 'Создать урок' : 'Изменить урок'}
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

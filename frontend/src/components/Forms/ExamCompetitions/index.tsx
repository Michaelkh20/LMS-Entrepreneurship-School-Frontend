'use client';

import React, { useEffect } from 'react';
import type { TestFormValues } from '@/types/forms';
import { Button, DatePicker, Form, Input, Radio, Space, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import locale_ru from 'antd/locale/ru_RU';
import type {
  ICreateUpdateCompetitionRequest,
  ICreateUpdateCompetitionResponse,
  ICreateUpdateExamRequest,
  ICreateUpdateExamResponse,
} from '@/types/proto';
import { useRouter } from 'next/navigation';
import { formValuesToRequest, getResponseToFormValues } from './helpers';
import type {
  ExamCompetition,
  ICreateUpdateExamCompetitionRequest,
  MutationResultType,
  UpdateCompetitionApiArg,
  UpdateExamApiArg,
} from '@/types/api';

type ExamCompetitionFormProps = {
  onFinish: (values: ICreateUpdateExamCompetitionRequest) => void;
  entity: 'exam' | 'competition';
} & (
  | {
      type: 'create';
      result:
        | MutationResultType<
            ICreateUpdateExamResponse,
            ICreateUpdateExamRequest
          >
        | MutationResultType<
            ICreateUpdateCompetitionResponse,
            ICreateUpdateCompetitionRequest
          >;
      examCompetition?: undefined;
    }
  | {
      type: 'edit';
      result:
        | MutationResultType<ICreateUpdateExamResponse, UpdateExamApiArg>
        | MutationResultType<
            ICreateUpdateCompetitionResponse,
            UpdateCompetitionApiArg
          >;
      examCompetition: ExamCompetition;
    }
);

export default function ExamCompetitionForm({
  onFinish,
  entity,
  type,
  result,
  examCompetition,
}: ExamCompetitionFormProps) {
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
          errors: [
            `${
              entity === 'exam' ? 'Экзамен' : 'Конкурс'
            } с таким названием уже существует`,
          ],
        });
        message.error(
          `${
            entity === 'exam' ? 'Экзамен' : 'Конкурс'
          } с таким названием уже существует`,
          5
        );

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
      if ('exam' in result.data) {
        const examId = result.data.exam?.id;
        message.success(
          type === 'create'
            ? 'Экзамен успешно создан'
            : 'Экзамен успешно изменён'
        );
        router.push(
          examId ? `/admin/tasks/exams/${examId}` : '/admin/tasks/exams'
        );
      }

      if ('competition' in result.data) {
        const competitionId = result.data.competition?.id;
        message.success(
          type === 'create'
            ? 'Конкурс успешно создан'
            : 'Конкурс успешно изменён'
        );
        router.push(
          competitionId
            ? `/admin/tasks/competitions/${competitionId}`
            : '/admin/tasks/competitions'
        );
      }
    }
  }, [entity, form, result, router, type]);

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
        type === 'edit' ? getResponseToFormValues(examCompetition) : undefined
      }
    >
      <Form.Item
        label="Название"
        name="title"
        rules={[
          { required: true, message: 'Введите название' },
          {
            min: 2,
            message: 'Название должно иметь длину не менее 2 символов',
          },
          {
            whitespace: true,
            message: 'Название не может состоять из одних пробелов',
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
        name="deadlineDate"
        rules={[{ required: true, message: 'Введите дату проведения' }]}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 8 }}
        hasFeedback
      >
        <DatePicker locale={locale_ru.DatePicker} />
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
              ? 'Создать'
              : 'Изменить' + ' ' + (entity === 'exam' ? 'экзамен' : 'конкурс')}
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

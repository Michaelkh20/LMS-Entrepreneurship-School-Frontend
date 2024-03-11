'use client';
import { Form, Input, Button, message, Radio, InputNumber } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { AssessmentRequest } from '@/types/requests';
import { useCreateAssessmentMutation } from '@/redux/services/adminApi';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LeanerSelectionFormItem } from '../FormItems/EntityForms/LearnerSelectionFormItem';
import { TeamSelectionFormItem } from '../FormItems/EntityForms/TeamSelectionFormItem';
import { TaskSelectionFormItem } from '../FormItems/EntityForms/TaskSelectionFormItem';

export default function CreateAssessmentForm() {
  const [form] = useForm();
  const router = useRouter();
  const [createAssessment, result] = useCreateAssessmentMutation();

  const [assessmentReceiver, setAssessmentReceiver] =
    useState<string>('Learner');
  const [validTaskAndReceiver, setValidTaskAndReceiver] = useState(true);
  // const [validReceiver, setValidReceiver] = useState(true);

  useEffect(() => {
    if (result.isError) {
      console.log(result.error);
      const errorDetails = result.error; // Assuming error details are in result.error

      // Check if the response status is 409
      if ('status' in errorDetails && errorDetails.status === 409) {
        const errorMessage = `У это${
          assessmentReceiver === 'Learner' ? 'ого ученика' : 'ой команды'
        } уже есть оценка по этому заданию`;

        form.setFields([
          {
            name: 'taskId',
            errors: [errorMessage],
          },
          {
            name: assessmentReceiver === 'Learner' ? 'learnerId' : 'teamId',
            errors: [errorMessage],
          },
        ]);

        setValidTaskAndReceiver(false);
        message.error(errorMessage, 5);
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
      message.success('Оценка успешно создана');
      router.push('/admin/assessments');
    }
  }, [assessmentReceiver, form, result, router]);

  const onFinish = (values: any) => {
    const request = formValuesToRequest(values);
    console.log(values, request);
    createAssessment(request);
  };

  function onValuesChange(changedValues: any, allValues: any) {
    if (
      changedValues.taskId ||
      changedValues.learnerId ||
      changedValues.teamId
    ) {
      setValidTaskAndReceiver(true);
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
      <TaskSelectionFormItem />
      <Radio.Group
        optionType="button"
        onChange={(e) => setAssessmentReceiver(e.target.value)}
        value={assessmentReceiver}
        style={{ marginBottom: '1rem' }}
      >
        <Radio value={'Learner'}>Ученик</Radio>
        <Radio value={'Team'}>Команда</Radio>
      </Radio.Group>
      {assessmentReceiver === 'Learner' ? (
        <LeanerSelectionFormItem />
      ) : (
        <TeamSelectionFormItem />
      )}

      <Form.Item
        label="Оценка"
        name="assessment"
        rules={[{ required: true, message: 'Выберите оценку' }]}
      >
        <InputNumber min={0} max={10} placeholder={'0-10'} />
      </Form.Item>
      <Form.Item label="Комментарий" name="comment" wrapperCol={{ span: 8 }}>
        <Input.TextArea
          showCount
          maxLength={1024}
          placeholder="Напишите комментарий"
          style={{ height: '7rem' }}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ backgroundColor: '#198754', marginTop: '1rem' }}
          loading={result.isLoading}
          disabled={!validTaskAndReceiver}
        >
          Создать оценку
        </Button>
      </Form.Item>
    </Form>
  );
}

function formValuesToRequest(values: any): AssessmentRequest {
  return {
    id: null,
    taskId: values.taskId,
    learnerId: values.learnerId ?? null,
    teamId: values.teamId ?? null,
    assessment: values.assessment,
    comment: values.comment ?? '',
  };
}

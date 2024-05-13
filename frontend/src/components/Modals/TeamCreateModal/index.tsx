'use client';

import React, { useEffect } from 'react';
import { Button, Flex, Form, Input, InputNumber, Modal, message } from 'antd';
import { ModalContainer } from '../Components/ModalContainer';
import { useCreateTeamMutation } from '@/redux/services/api';
import { ICreateUpdateTeamRequest } from '@/types/proto';

type TeamCreateFormValues = {
  number: number | undefined;
  projectTheme: string | undefined;
  description: string | undefined;
};

const formValuesToRequest = (
  values: TeamCreateFormValues
): ICreateUpdateTeamRequest => {
  return {
    number: values.number,
    projectTheme: values.projectTheme,
    description: values.description,
    userIds: [],
  };
};

type TeamCreateModalProps = {
  isOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

export default function TeamCreateModal({
  isOpen,
  setModalOpen,
}: TeamCreateModalProps) {
  const [createTeam, result] = useCreateTeamMutation();

  const handleCancel = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (result.isError) {
      message.error('Что-то пошло не так', 5);
    }

    if (result.isLoading) {
      message.loading({ content: 'Загрузка...', duration: 0, key: 'Loading' });
    } else {
      message.destroy('Loading');
    }

    if (result.isSuccess) {
      message.success('Оценка успешно выставлена');
    }
  }, [result]);

  const handleOnFinish = (values: TeamCreateFormValues) => {
    createTeam(formValuesToRequest(values));
  };

  return (
    <Modal
      title={<h3 style={{ paddingLeft: '.5rem' }}>Создание команды</h3>}
      open={isOpen}
      onCancel={handleCancel}
      footer={null}
      centered
    >
      <ModalContainer>
        <Form<TeamCreateFormValues> layout="vertical" onFinish={handleOnFinish}>
          <Form.Item name={'number'} label={'Номер команды'}>
            <InputNumber
              style={{ minWidth: '150px' }}
              placeholder="Номер команды"
            />
          </Form.Item>
          <Form.Item
            name={'projectTheme'}
            label={'Тема проекта'}
            rules={[
              {
                max: 200,
                message: 'Комментарий должен иметь длину не более 200 символов',
              },
            ]}
          >
            <Input placeholder="Тема проекта" />
          </Form.Item>
          <Form.Item
            name={'description'}
            label={'Описание'}
            rules={[
              {
                max: 1_000,
                message:
                  'Комментарий должен иметь длину не более 1000 символов',
              },
            ]}
          >
            <Input.TextArea rows={4} placeholder="Описание" />
          </Form.Item>



          <Flex justify="flex-end">
            <Button type="primary" htmlType="submit" loading={result.isLoading}>
              Создать команду
            </Button>
          </Flex>
        </Form>
      </ModalContainer>
    </Modal>
  );
}

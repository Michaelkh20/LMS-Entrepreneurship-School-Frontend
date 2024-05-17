'use client';
import { Button, Form, Input, InputNumber, Modal, message } from 'antd';
import cn from 'classnames/bind';
import React, { MouseEventHandler, useEffect } from 'react';

import styles from './LotCreateModal.module.css';

import { LotCreateUpdateRequest } from '@/types/api';
import { UserSelection } from '@/components/Selections/UserSelection';
import { PlusOutlined } from '@ant-design/icons';

import { useCreateLotMutation } from '@/redux/services/api';
import { useForm } from 'antd/es/form/Form';

type Props = {
  isOpen: boolean;
  onCancel?: () => void;
  onOk?: MouseEventHandler;
};

type FormLotCreateUpdateFields = {
  title: string;
  description: string;
  terms: string;
  performerId: string;
  price: number;
};

const cx = cn.bind(styles);

export default function LotCreateModal({ isOpen, onCancel, onOk }: Props) {
  const [form] = useForm<FormLotCreateUpdateFields>();
  const [createTrigger, result] = useCreateLotMutation();

  const handleSubmit = () => {
    const { title, description, performerId, price, terms } =
      form.getFieldsValue();

    const req: LotCreateUpdateRequest = {
      description: description,
      performer: { id: performerId, name: null },
      price: price,
      terms: terms,
      title: title,
    };

    createTrigger(req);
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
      message.success('Лот успешно создан');
      // onCancel && onCancel();
    }
  }, [onCancel, result]);

  return (
    <Modal
      title={`Создать лот`}
      open={isOpen}
      onCancel={onCancel}
      footer={null}
      centered
    >
      <div className={styles.ModalContainer}>
        <Form<FormLotCreateUpdateFields> form={form} layout="vertical">
          <Form.Item
            label="Название"
            name="title"
            rules={[{ required: true, message: 'Выберите название' }]}
          >
            <Input placeholder="Название" />
          </Form.Item>
          <Form.Item
            label="Исполнитель"
            name="performerId"
            rules={[{ required: true, message: 'Выберите исполнителя' }]}
          >
            <UserSelection
              type={'filter'}
              placeholder={'Выберите исполнителя'}
            />
          </Form.Item>

          <Form.Item
            label="Стоимость"
            name="price"
            rules={[{ required: true, message: 'Введите стоимость' }]}
            hasFeedback
          >
            <InputNumber placeholder="Стоимость" />
          </Form.Item>
          <Form.Item
            label="Описание"
            name="description"
            rules={[
              { required: true, message: 'Введите описание' },
              {
                max: 1000,
                message:
                  'Описание ДЗ должно иметь длину не более 1000 символов',
              },
              {
                whitespace: true,
                message: 'Описание ДЗ не может состоять из одних пробелов',
              },
            ]}
            hasFeedback
          >
            <Input.TextArea rows={4} maxLength={1000} placeholder="Описание" />
          </Form.Item>
          <Form.Item
            label="Условия"
            name="terms"
            rules={[
              { required: true, message: 'Введите критерии оценивания' },
              {
                max: 1000,
                message:
                  'Критерии оценивания должны иметь длину не более 1000 символов',
              },
              {
                whitespace: true,
                message:
                  'Критерии оценивания не могут состоять из одних пробелов',
              },
            ]}
            hasFeedback
          >
            <Input.TextArea rows={4} maxLength={1000} placeholder="Условия" />
          </Form.Item>
        </Form>
      </div>
      <div className={styles.Actions}>
        <Button
          size="large"
          type="primary"
          onClick={handleSubmit}
          icon={<PlusOutlined />}
          loading={result.isLoading}
        >
          Создать
        </Button>
      </div>
    </Modal>
  );
}

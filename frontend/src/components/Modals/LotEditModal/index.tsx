'use client';
import { Button, Form, Input, InputNumber, Modal, Space, message } from 'antd';
import cn from 'classnames/bind';
import React, { MouseEventHandler, useEffect } from 'react';

import styles from './LotCreateModal.module.css';

import { LotStatus } from '@/types/common';
import {
  ListLotUpdateRequestAdmin,
  Lot,
  LotCreateUpdateRequest,
} from '@/types/api';
import { UserSelection } from '@/components/Selections/UserSelection';
import {
  CheckOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { useGetLotByIdQuery } from '@/redux/services/api';
import { skipToken } from '@reduxjs/toolkit/query';

import {
  useDeleteLotByIdMutation,
  useUpdateLotMutation,
} from '@/redux/services/api';
import { useForm } from 'antd/es/form/Form';
import { useGetLotById, useUpdateLotAdmin } from '@/redux/features/marketSlice';

type Props = {
  lotId: string;
  isOpen: boolean;
  onCancel?: () => void;
  onOk?: MouseEventHandler;
};

type FormLotUpdateFields = {
  title: string;
  description: string;
  terms: string;
  price: number;
};

const mockData: Lot = {
  id: '23',
  number: 23,
  status: LotStatus.OnSale,
  title: 'Курс по основам программирования',
  description:
    'Обучение основам программирования на языке Python для начинающих',
  terms: 'Длительность курса 4 недели, занятия по вечерам 2 раза в неделю',
  price: 500,
  performer: {
    id: '11',
    name: 'Жуйков Никита',
  },
  listingDate: new Date(),
};

const cx = cn.bind(styles);

export default function LotEditModal({ lotId, isOpen, onCancel, onOk }: Props) {
  // const { data = mockData } = useGetLotByIdQuery(
  //   lotId && isOpen ? lotId : skipToken
  // );
  const data = useGetLotById(lotId);

  const [form] = useForm<FormLotUpdateFields>();
  const [deleteTrigger, resultDelete] = useDeleteLotByIdMutation();
  // const [updateTrigger, resultUpdate] = useUpdateLotMutation();
  const updateTrigger = useUpdateLotAdmin();

  const handleDelete = () => {
    deleteTrigger(lotId);
  };

  // const handleUpdate = () => {
  //   const { title, description, price, terms } = form.getFieldsValue();
  //   if (!data) return;

  //   const req: LotCreateUpdateRequest = {
  //     description: description,
  //     performer: { id: data.performer.id, name: null },
  //     price: price,
  //     terms: terms,
  //     title: title,
  //   };
  //   updateTrigger({ id: lotId, updateRequestBody: req });
  // };
  const handleUpdate = () => {
    const { title, description, price, terms } = form.getFieldsValue();
    if (!data) return;

    const req: ListLotUpdateRequestAdmin = {
      description: description,
      price: price,
      terms: terms,
      title: title,
      id: lotId,
    };
    updateTrigger(req);
    onCancel && onCancel();
  };

  useEffect(() => {
    if (resultDelete.isError) {
      message.error('Что-то пошло не так', 5);
    }

    if (resultDelete.isLoading) {
      message.loading({ content: 'Загрузка...', duration: 0, key: 'Loading' });
    } else {
      message.destroy('Loading');
    }

    if (resultDelete.isSuccess) {
      message.success('Лот успешно удалён');
    }
  }, [resultDelete]);

  // useEffect(() => {
  //   if (resultUpdate.isError) {
  //     message.error('Что-то пошло не так', 5);
  //   }

  //   if (resultUpdate.isLoading) {
  //     message.loading({ content: 'Загрузка...', duration: 0, key: 'Loading' });
  //   } else {
  //     message.destroy('Loading');
  //   }

  //   if (resultUpdate.isSuccess) {
  //     message.success('Лот успешно изменён');
  //   }
  // }, [resultUpdate]);

  return (
    <Modal
      title={`Редактировать лот №${data?.number}`}
      open={isOpen}
      onCancel={onCancel}
      footer={null}
      centered
    >
      <div className={styles.ModalContainer}>
        <Form<FormLotUpdateFields> layout="vertical" form={form}>
          <Form.Item
            label="Название"
            name="title"
            rules={[{ required: true, message: 'Выберите название' }]}
            initialValue={data?.title || ''}
          >
            <Input placeholder="Название" />
          </Form.Item>

          <Form.Item
            label="Стоимость"
            name="price"
            rules={[{ required: true, message: 'Введите дедлайн' }]}
            hasFeedback
            initialValue={data?.price}
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
            initialValue={data?.description}
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
            initialValue={data?.terms}
          >
            <Input.TextArea
              value={data?.terms}
              rows={4}
              maxLength={1000}
              placeholder="Условия"
            />
          </Form.Item>
        </Form>
      </div>
      <div className={styles.Actions}>
        <Button
          size="large"
          icon={<DeleteOutlined />}
          danger
          type="default"
          onClick={handleDelete}
        >
          Удалить
        </Button>
        <Button
          size="large"
          type="primary"
          onClick={handleUpdate}
          icon={<CheckOutlined />}
          // loading={isClaimLoading}
        >
          Изменить
        </Button>
      </div>
    </Modal>
  );
}

function Property({ title, value }: { title: string; value: string }) {
  return (
    <div className={styles.PropertyContainer}>
      <p className={styles.PropertyTitle}>{title}</p>
      <p className={styles.PropertyValue}>{value}</p>
    </div>
  );
}

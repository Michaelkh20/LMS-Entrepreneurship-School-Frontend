'use client';
import { Button, Form, Input, InputNumber, Modal, Space } from 'antd';
import cn from 'classnames/bind';
import React, { MouseEventHandler } from 'react';

import styles from './LotViewModal.module.css';

import { LotStatus } from '@/types/common';
import { Lot } from '@/types/api';
import { UserSelection } from '@/components/Selections/UserSelection';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';

type Props = {
  lotId?: string | null;
  isOpen: boolean;
  onCancel?: MouseEventHandler;
  onOk?: MouseEventHandler;
  isClaimLoading: boolean;
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
  listingDate: '15.05.2024',
};

const cx = cn.bind(styles);

export default function LotCreateEditModal({
  lotId,
  isOpen,
  onCancel,
  onOk,
  isClaimLoading,
}: Props) {
  // const { data } = useGetLotByIdQuery(lotId && isOpen ? lotId : skipToken);
  const data = mockData;
  return (
    <Modal
      // title={`Создать лот`}
      title={`Редактировать лот №${data?.number}`}
      open={isOpen}
      onCancel={onCancel}
      footer={null}
      centered
    >
      <div className={styles.ModalContainer}>
        <Form layout="vertical">
          <Form.Item
            label="Название"
            name="title"
            rules={[{ required: true, message: 'Выберите название' }]}
            initialValue={data.title}
          >
            <Input placeholder="Название" />
          </Form.Item>
         
          <Form.Item
            label="Стоимость"
            name="deadlineDate"
            rules={[{ required: true, message: 'Введите дедлайн' }]}
            hasFeedback
            initialValue={data.price}
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
            initialValue={data.description}
          >
            <Input.TextArea rows={4} maxLength={1000} placeholder="Описание" />
          </Form.Item>
          <Form.Item
            label="Условия"
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
                message:
                  'Критерии оценивания не могут состоять из одних пробелов',
              },
            ]}
            hasFeedback
            initialValue={data.terms}
          >
            <Input.TextArea value={data.terms} rows={4} maxLength={1000} placeholder="Условия" />
          </Form.Item>
        </Form>
      </div>
      <div className={styles.Actions}>
        {/* <Button
          size="large"
          type="default"
          
          onClick={onCancel}
        >
          Назад
        </Button> */}
        <Button
          size="large"
          icon={<DeleteOutlined />}
          danger
          type="default"
          onClick={onCancel}
        >
          Удалить
        </Button>
        <Button
          size="large"
          type="primary"
          onClick={onOk}
          icon={<EditOutlined />}
          // icon={<PlusOutlined/>}
          loading={isClaimLoading}
        >
          {/* Подать заявку */}
          {/* Создать */}
          Редактировать
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

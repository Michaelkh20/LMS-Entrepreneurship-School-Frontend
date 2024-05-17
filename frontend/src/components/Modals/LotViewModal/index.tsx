import { Button, Modal } from 'antd';
import cn from 'classnames/bind';
import React, { MouseEventHandler } from 'react';

import PriceQuestionTooltip from '@/components/LotCard/components/QuestionTooltip';

import styles from './LotViewModal.module.css';

import { lotStatusToString } from '@/util/enumsToString';
import { EditOutlined } from '@ant-design/icons';
import { LotStatus } from '@/types/common';
import { useGetLotById } from '@/redux/features/marketSlice';
import { LotCardViewType } from '@/components/LotCard/mock';
import { Lot } from '@/types/api';
import { useAuth } from '@/redux/features/authSlice';
import { useGetLotById } from '@/redux/features/marketSlice';
import { dateToLocalString } from '@/util/dateToLocalString';

type Props = {
  lotId: string;
  isOpen: boolean;
  onCancel: MouseEventHandler;
  onOk: MouseEventHandler;
  // isClaimLoading: boolean;
  // lot: LotCardViewType;
  handleOnEdit?: () => void;
};

const cx = cn.bind(styles);

const mockDataLot: Lot = {
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
  listingDate: new Date(2024, 4, 15),
};

export default function LotViewModal({
  lotId,
  isOpen,
  onCancel,
  onOk, // isClaimLoading,
  handleOnEdit, // lot: data,
}: Props) {
  const [, , { isAdmin, isLearner, isTracker }] = useAuth();
  // const { data = mockDataLot, isLoading } = useGetLotByIdQuery(
  //   lotId && isOpen ? lotId : skipToken
  // );
  const data = useGetLotById(lotId);

  // const handleDelete = () => {};

  // const handleEdit = () => {};

  return (
    <Modal
      title={`Лот №${data?.number}`}
      open={isOpen}
      onCancel={onCancel}
      footer={null}
      centered
    >
      <div className={styles.ModalContainer}>
        <div className={styles.FirstRow}>
          <div className={styles.PropertyContainer}>
            <p className={styles.PropertyTitle}>Статус</p>
            <p
              className={cx('PropertyValue', {
                StatusApproval: data?.status === LotStatus.Approval,
                StatusActive: data?.status === LotStatus.OnSale,
                StatusInactive: data?.status === LotStatus.Withdrawn,
              })}
            >
              {lotStatusToString(data?.status)}
            </p>
          </div>

          <div className={styles.PropertyContainer}>
            <p className={styles.PropertyTitle}>Стоимость</p>
            <p className={cx('PropertyValue', 'Price')}>
              {data?.price} ШП
              <PriceQuestionTooltip />
            </p>
          </div>
        </div>
        <Property title="Название" value={data?.title || ''} />
        <Property title="Описание" value={data?.description || ''} />
        <Property title="Условия" value={data?.terms || ''} />
        <Property title="Исполнитель" value={data?.performer.name || ''} />
        <Property
          title="Дата размещения"
          // value={data?.listingDate?.toLocaleDateString('ru-RU', {
          //   year: 'numeric',
          //   month: '2-digit',
          //   day: 'numeric',
          // })}
          value={
            data?.listingDate ? dateToLocalString(data?.listingDate!) : '-'
          }
        />
      </div>
      {isAdmin ? (
        <div className={styles.Actions}>
          <Button
            size="large"
            type="primary"
            onClick={handleOnEdit}
            icon={<EditOutlined />}
            // loading={isClaimLoading}
          >
            Редактировать
          </Button>
        </div>
      ) : isLearner || isTracker ? (
        <div className={styles.Actions}>
          <Button size="large" type="default" onClick={onCancel}>
            Назад
          </Button>
          <Button
            size="large"
            type="primary"
            onClick={onOk}
            icon={<EditOutlined />}
            // loading={isClaimLoading}
          >
            Подать заявку
          </Button>
        </div>
      ) : (
        <></>
      )}
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

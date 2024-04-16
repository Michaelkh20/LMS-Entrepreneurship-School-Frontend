'use client';

import React, { MouseEventHandler, useEffect, useState } from 'react';
import { Button, message } from 'antd';
import cn from 'classnames/bind';
import styles from './LotCard.module.css';
import LotViewModal from '../Modals/LotViewModal';
import PriceQuestionTooltip from './components/QuestionTooltip';
import { useCreateBuyLotClaimMutation } from '@/redux/services/learnerApi';
import { useAuth } from '@/redux/features/authSlice';

type LotCardProps = {
  id: string;
  number: string;
  title: string;
  performer: string;
  price: number;
};

const cx = cn.bind(styles);

export default function LotCard({
  id,
  number,
  title,
  performer,
  price,
}: LotCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createBuyLotClaim, { isError, isLoading, isSuccess }] =
    useCreateBuyLotClaimMutation();
  const [authState] = useAuth();

  const [messageApi, contextHolder] = message.useMessage();

  const handleLotClick = () => {
    setIsModalOpen(true);
  };

  const handleModalCancel: MouseEventHandler = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  const handleCreateClaimClick: MouseEventHandler = (e) => {
    e.stopPropagation();
    createBuyLotClaim({ lotId: id, buyerId: authState.id! });
  };

  useEffect(() => {
    if (isSuccess) {
      messageApi.success('Заявка успешно подана');
      setIsModalOpen(false);
    }

    if (isError) {
      messageApi.error('Не удалось подать заявку. Недостаточно средств');
      setIsModalOpen(false);
    }
  }, [isSuccess, isError]);

  return (
    <div className={cx('LotCard')} onClick={handleLotClick}>
      <div className={cx('LotNumber')}>{`Лот №${number}`}</div>
      <div className={cx('LotContent')}>
        <p className={cx('LotTitle')}>{title}</p>
        <div className={cx('Property')}>
          <p className={cx('PropertyTitle')}>Исполнитель</p>
          <p className={cx('PropertyValue')}>{performer}</p>
        </div>
        <div className={cx('Property')}>
          <p className={cx('PropertyTitle')}>Цена</p>
          <p className={cx('PropertyValue', 'Price')}>
            от {price} ШП
            <PriceQuestionTooltip />
          </p>
        </div>
      </div>
      <div className={cx('Actions')}>
        <Button
          size="large"
          onClick={handleCreateClaimClick}
          loading={isLoading}
        >
          Подать заявку
        </Button>
      </div>
      <LotViewModal
        lotId={id}
        isOpen={isModalOpen}
        onCancel={handleModalCancel}
        onOk={handleCreateClaimClick}
        isClaimLoading={isLoading}
      />
      {contextHolder}
    </div>
  );
}

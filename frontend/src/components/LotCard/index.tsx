'use client';

import React, { MouseEventHandler, useEffect, useState } from 'react';
import { Button, message } from 'antd';
import cn from 'classnames/bind';
import styles from './LotCard.module.css';
import PriceQuestionTooltip from './components/QuestionTooltip';
import { Lot } from '@/types/api';

type LotCardProps = {
  lot: Lot;
  onCreateBuyLotClaimClick: (id: string) => boolean;
  onCardClick: () => void;
};

const cx = cn.bind(styles);

export default function LotCard({
  lot,
  onCreateBuyLotClaimClick,
  onCardClick,
}: LotCardProps) {
  const { id, number, title, performer, price } = lot;
  const [isError, setIsError] = useState<boolean | null>(null);

  const [messageApi, contextHolder] = message.useMessage();

  const handleCreateClaimClick: MouseEventHandler = (e) => {
    e.stopPropagation();
    setIsError(onCreateBuyLotClaimClick(id));
  };

  useEffect(() => {
    if (isError === false) {
      messageApi.success('Заявка успешно подана');
    }

    if (isError === true) {
      messageApi.error('Не удалось подать заявку. Недостаточно средств');
    }
  }, [isError, messageApi]);

  return (
    <div className={cx('LotCard')} onClick={onCardClick}>
      <div className={cx('LotNumber')}>{`Лот №${number || '-'}`}</div>
      <div className={cx('LotContent')}>
        <p className={cx('LotTitle')}>{title}</p>
        <div className={cx('Property')}>
          <p className={cx('PropertyTitle')}>Исполнитель</p>
          <p className={cx('PropertyValue')}>{performer.name}</p>
        </div>
        <div className={cx('Property')}>
          <p className={cx('PropertyTitle')}>Цена</p>
          <p className={cx('PropertyValue', 'Price')}>
            {price} ШП
            <PriceQuestionTooltip />
          </p>
        </div>
      </div>
      <div className={cx('Actions')}>
        <Button size="large" onClick={handleCreateClaimClick}>
          Подать заявку
        </Button>
      </div>
      {contextHolder}
    </div>
  );
}

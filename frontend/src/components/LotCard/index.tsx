'use client';

import React from 'react';
import { Button, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import cn from 'classnames/bind';
import { PRICE_DESC_TEXT } from './constants';
import styles from './LotCard.module.css';

type LotCardProps = {
  number: string;
  title: string;
  performer: string;
  price: number;
};

const cx = cn.bind(styles);

export default function LotCard({
  number,
  title,
  performer,
  price,
}: LotCardProps) {
  return (
    <div className={cx('LotCard')}>
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
            <QuestionTooltip />
          </p>
        </div>
      </div>
      <div className={cx('Actions')}>
        <Button size="large">Подать заявку</Button>
      </div>
    </div>
  );
}

function QuestionTooltip() {
  return (
    <Tooltip title={PRICE_DESC_TEXT}>
      <QuestionCircleOutlined
        style={{
          fontSize: '14px',
          color: 'grey',
        }}
      />
    </Tooltip>
  );
}

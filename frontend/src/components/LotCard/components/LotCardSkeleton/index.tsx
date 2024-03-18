'use client';

import React from 'react';
import { Button, Skeleton, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import cn from 'classnames/bind';
import { PRICE_DESC_TEXT } from '../../constants';
import styles from '../../LotCard.module.css';

const cx = cn.bind(styles);

export default function LotCardSkeleton() {
  return (
    <div className={cx('LotCard')}>
      <div className={cx('LotNumber')}>
        <Skeleton
          active
          paragraph={{ rows: 1, width: '100px' }}
          title={false}
        />
      </div>
      <div className={cx('LotContent')}>
        <Skeleton active paragraph={{ rows: 4 }} />
      </div>
      <div className={cx('Actions')}>
        <Skeleton.Button size="large" active />
      </div>
    </div>
  );
}

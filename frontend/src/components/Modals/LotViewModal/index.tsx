import { skipToken } from '@reduxjs/toolkit/query';
import { Button, Modal } from 'antd';
import cn from 'classnames/bind';
import React, { MouseEventHandler } from 'react';

import PriceQuestionTooltip from '@/components/LotCard/components/QuestionTooltip';
import { useGetLotByIdQuery } from '@/redux/services/api';

import styles from './LotViewModal.module.css';

import { lotStatusToString } from '@/util/enumsToString';
import { EditOutlined } from '@ant-design/icons';
import Link from 'next/link';
import dateToFormatString from '@/util/dateToFormatString';
import { LotStatus } from '@/types/common';

type Props = {
  lotId?: string | null;
  isOpen: boolean;
  onCancel: MouseEventHandler;
  onOk: MouseEventHandler;
  isClaimLoading: boolean;
};

const cx = cn.bind(styles);

export default function LotViewModal({
  lotId,
  isOpen,
  onCancel,
  onOk,
  isClaimLoading,
}: Props) {
  const { data } = useGetLotByIdQuery(lotId && isOpen ? lotId : skipToken);

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
              от {data?.price} ШП
              <PriceQuestionTooltip />
            </p>
          </div>
        </div>
        <Property title="Название" value={data?.title || ''} />
        <Property title="Описание" value={data?.description || ''} />
        <Property title="Условия" value={data?.terms || ''} />
        <Property title="Исполнитель" value={data?.performer?.name || ''} />
        <Property
          title="Дата размещения"
          value={dateToFormatString(data?.listingDate!)}
        />
      </div>
      <div className={styles.Actions}>
        <Button size="large" type="default" onClick={onCancel}>
          Назад
        </Button>
        <Button
          size="large"
          type="primary"
          onClick={onOk}
          icon={<EditOutlined />}
          loading={isClaimLoading}
        >
          Подать заявку
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

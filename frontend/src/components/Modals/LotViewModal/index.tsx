import { skipToken } from '@reduxjs/toolkit/query';
import { Button, Modal } from 'antd';
import cn from 'classnames/bind';
import React, { MouseEventHandler } from 'react';

import PriceQuestionTooltip from '@/components/LotCard/components/QuestionTooltip';
import { useGetLotQuery } from '@/redux/services/learnerApi';
import { dto } from '@dto';

import styles from './LotViewModal.module.css';

import LotStatus = dto.LotStatus;

import lotStatusToString from '@/util/lotStatusToString';
import { EditOutlined } from '@ant-design/icons';

type Props = {
  lotId?: number | null;
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
  const { data } = useGetLotQuery(lotId && isOpen ? lotId : skipToken);

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
                StatusApproval: data?.status === LotStatus.APPROVAL,
                StatusActive: data?.status === LotStatus.ACTIVE,
                StatusInactive: data?.status === LotStatus.INACTIVE,
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
        <Property title="Исполнитель" value={data?.performer || ''} />
        <Property title="Дата размещения" value={data?.date || ''} />
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

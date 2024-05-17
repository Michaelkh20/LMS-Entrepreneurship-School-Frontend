import { Button, Modal } from 'antd';
import cn from 'classnames/bind';
import React, { MouseEventHandler } from 'react';

import PriceQuestionTooltip from '@/components/LotCard/components/QuestionTooltip';

import styles from './LotViewModal.module.css';

import { lotStatusToString } from '@/util/enumsToString';
import { EditOutlined } from '@ant-design/icons';
import { LotStatus } from '@/types/common';
import { useGetLotById } from '@/redux/features/marketSlice';

type Props = {
  lotId: string | null;
  isOpen: boolean;
  onCancel: MouseEventHandler;
  onOk: MouseEventHandler;
};

const cx = cn.bind(styles);

export default function LotViewModal({ lotId, isOpen, onCancel, onOk }: Props) {
  const data = useGetLotById(lotId);

  let content: React.JSX.Element | null = null;

  if (data) {
    content = (
      <>
        <div className={styles.ModalContainer}>
          <div className={styles.FirstRow}>
            <div className={styles.PropertyContainer}>
              <p className={styles.PropertyTitle}>Статус</p>
              <p
                className={cx('PropertyValue', {
                  StatusApproval: data.status === LotStatus.Approval,
                  StatusActive: data.status === LotStatus.OnSale,
                  StatusInactive: data.status === LotStatus.Withdrawn,
                })}
              >
                {lotStatusToString(data.status)}
              </p>
            </div>
            <Property title="Название" value={data.title} />
            <div className={styles.PropertyContainer}>
              <p className={styles.PropertyTitle}>Стоимость</p>
              <p className={cx('PropertyValue', 'Price')}>
                {data.price} ШП
                <PriceQuestionTooltip />
              </p>
            </div>
          </div>

          <Property title="Описание" value={data.description} />
          <Property title="Условия" value={data.terms} />
          <Property title="Исполнитель" value={data.performer.name} />
          <Property
            title="Дата размещения"
            value={
              data.listingDate
                ? data.listingDate.toLocaleDateString('ru-RU', {
                    year: 'numeric',
                    month: '2-digit',
                    day: 'numeric',
                  })
                : '-'
            }
          />
        </div>
        <div className={styles.Actions}>
          <Button
            size="large"
            type="primary"
            onClick={onOk}
            icon={<EditOutlined />}
          >
            Подать заявку
          </Button>
        </div>
      </>
    );
  }

  return (
    <Modal
      title={`Лот №${data?.number}`}
      open={isOpen}
      onCancel={onCancel}
      footer={null}
      centered
    >
      {content}
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

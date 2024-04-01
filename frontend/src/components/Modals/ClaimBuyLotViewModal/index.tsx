import { skipToken } from '@reduxjs/toolkit/query';
import { Button, Modal } from 'antd';
import cn from 'classnames/bind';
import React, { MouseEventHandler } from 'react';

import PriceQuestionTooltip from '@/components/LotCard/components/QuestionTooltip';
import { dto } from '@dto';

import styles from './ClaimBuyLotViewModal.module.css';

import LotStatus = dto.LotStatus;
import BuyLotClaimStatus = dto.BuyLotClaimStatus;

import lotStatusToString from '@/util/lotStatusToString';
import { CheckOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import Link from 'next/link';
import dateToFormatString from '@/util/dateToFormatString';
import {
  useApproveClaimMutation,
  useGetBuyLotClaimByIdQuery,
} from '@/redux/services/adminApi';
import buyLotClaimStatusToString from '@/util/buyLotClaimStatusToString';

type Props = {
  claimId?: string | null;
  isOpen: boolean;
  onExit: MouseEventHandler;
  onCancel: MouseEventHandler;
  onOk: MouseEventHandler;
  isOkLoading: boolean;
  isDeclineLoading: boolean;
};

const cx = cn.bind(styles);

export default function ClaimBuyLotViewModal({
  claimId,
  isOpen,
  onCancel,
  onExit,
  onOk,
  isOkLoading,
  isDeclineLoading,
}: Props) {
  const { data } = useGetBuyLotClaimByIdQuery(
    claimId && isOpen ? claimId : skipToken
  );

  return (
    <Modal
      title={`Заявка на покупку лота №${data?.lot?.number}`}
      open={isOpen}
      onCancel={onExit}
      footer={null}
      centered
    >
      <div className={styles.ModalContainer}>
        <div className={styles.PropertyContainer}>
          <p className={styles.PropertyTitle}>Статус</p>
          <p
            className={cx('PropertyValue', {
              StatusApproval: data?.status === BuyLotClaimStatus.WAITING,
              StatusActive: data?.status === BuyLotClaimStatus.APPROVED,
              StatusInactive: data?.status === BuyLotClaimStatus.DENIED,
            })}
          >
            {buyLotClaimStatusToString(data?.status)}
          </p>
        </div>

        <div className={styles.PropertyContainer}>
          <p className={styles.PropertyTitle}>Покупатель</p>
          <Link
            href={`/admin/accounts/${data?.buyer?.id}`}
            className={cx('PropertyValue', 'Link')}
          >
            {data?.buyer?.partName || ''}
          </Link>
        </div>

        <Property
          title="Дата заявки"
          value={dateToFormatString(data?.date) || ''}
        />

        <h2 className={styles.SectionTitle}>Информация о лоте</h2>

        <Property title="Название" value={data?.lot?.title || ''} />
        <Property title="Описание" value={data?.lot?.description || ''} />
        <Property title="Условия" value={data?.lot?.terms || ''} />
        <div className={styles.PropertyContainer}>
          <p className={styles.PropertyTitle}>Исполнитель</p>
          <Link
            href={`/admin/accounts/${data?.lot?.performer?.partName}`}
            className={cx('PropertyValue', 'Link')}
          >
            {data?.lot?.performer?.partName || ''}
          </Link>
        </div>
        <Property
          title="Дата размещения"
          value={dateToFormatString(data?.lot?.date || undefined) || ''}
        />
        <Property title="Стоимость" value={data?.lot?.price + '' || ''} />
      </div>
      {data?.status === BuyLotClaimStatus.WAITING && (
        <div className={styles.Actions}>
          <Button
            size="large"
            danger
            onClick={onCancel}
            icon={<CloseOutlined />}
            loading={isDeclineLoading}
          >
            Отклонить заявку
          </Button>
          <Button
            size="large"
            type="primary"
            onClick={onOk}
            icon={<CheckOutlined />}
            loading={isOkLoading}
          >
            Одобрить заявку
          </Button>
        </div>
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

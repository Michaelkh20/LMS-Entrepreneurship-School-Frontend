import { skipToken } from '@reduxjs/toolkit/query';
import { Button, Modal } from 'antd';
import cn from 'classnames/bind';
import React, { MouseEventHandler } from 'react';

import PriceQuestionTooltip from '@/components/LotCard/components/QuestionTooltip';

import styles from './ClaimBuyLotViewModal.module.css';

import { CheckOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import Link from 'next/link';
import dateToFormatString from '@/util/dateToFormatString';
import {
  useApproveRejectClaimMutation,
  useGetListLotClaimByIdQuery,
} from '@/redux/services/api';
import { TwoSidedClaimStatus } from '@/types/common';
import { twoSidedClaimStatusToString } from '@/util/enumsToString';

type Props = {
  claimId?: string | null;
  isOpen: boolean;
  onExit?: MouseEventHandler;
  onCancel?: MouseEventHandler;
  onOk?: MouseEventHandler;
  isOkLoading?: boolean;
  isDeclineLoading?: boolean;
};

const cx = cn.bind(styles);

export default function ClaimListLotViewModal({
  claimId,
  isOpen,
  onCancel,
  onExit,
  onOk,
  isOkLoading,
  isDeclineLoading,
}: Props) {
  const { data } = useGetListLotClaimByIdQuery(
    claimId && isOpen ? claimId : skipToken
  );

  return (
    <Modal
      title={`Заявка на размещение лота №${data?.lot.id}`}
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
              StatusApproval:
                data?.status === TwoSidedClaimStatus.WaitingAdmin ||
                data?.status === TwoSidedClaimStatus.WaitingLearner,
              StatusActive: data?.status === TwoSidedClaimStatus.Approved,
              StatusInactive:
                data?.status === TwoSidedClaimStatus.DeclinedAdmin ||
                data?.status === TwoSidedClaimStatus.DeclinedLearner,
            })}
          >
            {twoSidedClaimStatusToString(data?.status)}
          </p>
        </div>

        <Property title="Дата" value={dateToFormatString(data?.date) || '-'} />

        <h2 className={styles.SectionTitle}>Информация о лоте</h2>

        <Property title="Название" value={data?.lot?.title || '-'} />
        <Property title="Описание" value={data?.lot?.description || '-'} />
        <Property title="Условия" value={data?.lot?.terms || '-'} />
        <div className={styles.PropertyContainer}>
          <p className={styles.PropertyTitle}>Исполнитель</p>
          <Link
            href={`/admin/accounts/${data?.lot.performer.id}`}
            className={cx('PropertyValue', 'Link')}
          >
            {data?.lot.performer.name || ''}
          </Link>
        </div>
        <Property
          title="Дата"
          value={dateToFormatString(data?.date || undefined) || '-'}
        />
        <Property title="Стоимость" value={data?.lot?.price + '' || ''} />
      </div>

      {data?.status === TwoSidedClaimStatus.WaitingAdmin && (
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

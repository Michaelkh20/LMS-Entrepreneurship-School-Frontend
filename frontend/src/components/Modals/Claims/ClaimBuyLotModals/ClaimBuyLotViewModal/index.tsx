import { skipToken } from '@reduxjs/toolkit/query';
import { Button, Modal } from 'antd';
import cn from 'classnames/bind';
import React, { MouseEventHandler } from 'react';

import PriceQuestionTooltip from '@/components/LotCard/components/QuestionTooltip';

import styles from '../../../Components/Styles/rootModalStyles.module.css';

import { CheckOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import Link from 'next/link';
import dateToFormatString from '@/util/dateToFormatString';
import {
  useApproveRejectClaimMutation,
  useGetBuyLotClaimByIdQuery,
} from '@/redux/services/api';
import { useAuth } from '@/redux/features/authSlice';

import { ClaimStatus, TwoSidedClaimStatus } from '@/types/common';
import {
  claimStatusToString,
  twoSidedClaimStatusToString,
} from '@/util/enumsToString';
import { ModalProperty } from '@/components/Modals/Components/ModalProperty';
import { ModalButtonsGroup } from '@/components/Modals/Components/ModalButtonsGroup';
import { ModalSectionTitle } from '@/components/Modals/Components/ModalSectionTitle';
import { dateToLocalString } from '@/util/dateToLocalString';
import { useGetBuylotClaimById } from '@/redux/features/marketSlice';
import { ModalContainer } from '@/components/Modals/Components/ModalContainer';

type Props = {
  claimId: string;
  isOpen: boolean;
  onExit: MouseEventHandler;
  onCancel: MouseEventHandler;
  onOk: MouseEventHandler;
  isOkLoading: boolean;
  isDeclineLoading: boolean;
};

const cx = cn.bind(styles);

export function ClaimBuyLotViewModal({
  claimId,
  isOpen,
  onCancel,
  onExit,
  onOk,
  isOkLoading,
  isDeclineLoading,
}: Props) {
  // const { data } = useGetBuyLotClaimByIdQuery(
  //   claimId && isOpen ? claimId : skipToken
  // );
  const data = useGetBuylotClaimById(claimId);

  const [, , { isAdmin }] = useAuth();

  return (
    <Modal
      title={`Заявка на покупку лота №${data?.lot.number}`}
      open={isOpen}
      onCancel={onExit}
      footer={null}
      centered
    >
      <ModalContainer>
        <ModalProperty
          title="Статус"
          value={
            <p
              className={cx('PropertyValue', {
                StatusApproval: data?.status === ClaimStatus.Waiting,
                StatusActive: data?.status === ClaimStatus.Approved,
                StatusInactive: data?.status === ClaimStatus.Declined,
              })}
            >
              {claimStatusToString(data?.status)}
            </p>
          }
        />
        <ModalProperty
          title="Покупатель"
          value={
            <Link
              href={`/admin/users/${data?.buyer?.id}`}
              className={cx('PropertyValue', 'Link')}
            >
              {data?.buyer.name || '-'}
            </Link>
          }
        />
        <ModalProperty
          title="Дата заявки"
          value={dateToLocalString(data?.date!) || '-'}
        />

        <ModalSectionTitle>Информация о лоте</ModalSectionTitle>

        <ModalProperty title="Название" value={data?.lot?.title || '-'} />
        <ModalProperty title="Описание" value={data?.lot?.description || '-'} />
        <ModalProperty title="Условия" value={data?.lot?.terms || '-'} />
        <ModalProperty
          title="Исполнитель"
          value={
            <Link
              href={`/admin/users/${data?.lot.performer.id}`}
              className={cx('PropertyValue', 'Link')}
            >
              {data?.lot.performer.name || '-'}
            </Link>
          }
        />
        <ModalProperty
          title="Дата размещения"
          value={dateToLocalString(data?.lot.listingDate!) || '-'}
        />
        <ModalProperty title="Стоимость" value={data?.lot?.price + '' || '-'} />

        {isAdmin && data?.status === ClaimStatus.Waiting && (
          <ModalButtonsGroup>
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
          </ModalButtonsGroup>
        )}
      </ModalContainer>
    </Modal>
  );
}

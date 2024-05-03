import { skipToken } from '@reduxjs/toolkit/query';
import { Button, Modal } from 'antd';
import cn from 'classnames/bind';
import React, { MouseEventHandler } from 'react';

import PriceQuestionTooltip from '@/components/LotCard/components/QuestionTooltip';

import styles from '../../Components/Styles/rootModalStyles.module.css';

import { CheckOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import Link from 'next/link';
import dateToFormatString from '@/util/dateToFormatString';
import {
  useApproveRejectClaimMutation,
  useGetFailedDeadlineClaimByIdQuery,
} from '@/redux/services/api';
import { ClaimStatus, TwoSidedClaimStatus } from '@/types/common';
import {
  claimStatusToString,
  twoSidedClaimStatusToString,
} from '@/util/enumsToString';
import { ModalProperty } from '@/components/Modals/Components/ModalProperty';
import { ModalButtonsGroup } from '@/components/Modals/Components/ModalButtonsGroup';
import { ModalContainer } from '@/components/Modals/Components/ModalContainer';
import { ModalSectionTitle } from '@/components/Modals/Components/ModalSectionTitle';

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

export function ClaimDeadlineViewModal({
  claimId,
  isOpen,
  onCancel,
  onExit,
  onOk,
  isOkLoading,
  isDeclineLoading,
}: Props) {
  const { data } = useGetFailedDeadlineClaimByIdQuery(
    claimId && isOpen ? claimId : skipToken
  );

  return (
    <Modal
      title={`Заявка на штраф за дедлайн №${data?.id}`}
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
          title="Ученик"
          value={
            <Link
              href={`/admin/accounts/${data?.learner.id}`}
              className={cx('PropertyValue', 'Link')}
            >
              {`${data?.learner.surname || ''} ${data?.learner.name || ''}`}
            </Link>
          }
        />
        <ModalProperty
          title="Дата сдачи"
          value={dateToFormatString(data?.completeDate) || '-'}
        />
        <ModalProperty title="Просрочка" value={data?.delay || '0'} />

        <ModalSectionTitle>Информация о задании</ModalSectionTitle>
        <ModalProperty title="Название" value={data?.assignment.title || '-'} />
        <ModalProperty
          title="Дедлайн"
          value={data?.assignment.deadline || '-'}
        />
      </ModalContainer>

      {data?.status === ClaimStatus.Waiting ||
        (true && (
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
        ))}
    </Modal>
  );
}

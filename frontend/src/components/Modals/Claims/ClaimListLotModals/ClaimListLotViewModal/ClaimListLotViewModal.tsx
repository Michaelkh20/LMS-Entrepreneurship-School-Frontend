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
  useGetListLotClaimByIdQuery,
} from '@/redux/services/api';
import { useAuth } from '@/redux/features/authSlice';

import { TwoSidedClaimStatus } from '@/types/common';
import { twoSidedClaimStatusToString } from '@/util/enumsToString';
import { ModalProperty } from '@/components/Modals/Components/ModalProperty';
import { ModalButtonsGroup } from '@/components/Modals/Components/ModalButtonsGroup';
import { ModalContainer } from '@/components/Modals/Components/ModalContainer';
import { ModalSectionTitle } from '@/components/Modals/Components/ModalSectionTitle';
import { ListLotClaim } from '@/types/api';

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

const mockData: ListLotClaim = {
  id: 'lot2',
  status: TwoSidedClaimStatus.Approved,
  date: '15.05.2024',
  lot: {
    id: '23',
    title: 'Курс по основам программирования',
    description:
      'Обучение основам программирования на языке Python для начинающих',
    terms: 'Длительность курса 4 недели, занятия по вечерам 2 раза в неделю',
    price: 500,
    performer: {
      id: 'id2',
      name: 'Никита',
      surname: 'Жуйков',
      patronymic: undefined,
    },
  },
};

export function ClaimListLotViewModal({
  claimId,
  isOpen,
  onCancel,
  onExit,
  onOk,
  isOkLoading,
  isDeclineLoading,
}: Props) {
  // const { data } = useGetListLotClaimByIdQuery(
  //   claimId && isOpen ? claimId : skipToken
  // );
  const data = mockData;
  const [, , { isAdmin }] = useAuth();

  return (
    <Modal
      title={`Заявка на размещение лота №${data?.lot.id}`}
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
          }
        />
        <ModalProperty
          title="Дата"
          value={dateToFormatString(data?.date) || '-'}
        />

        <ModalSectionTitle>Информация о лоте</ModalSectionTitle>
        <ModalProperty title="Название" value={data?.lot?.title || '-'} />
        <ModalProperty title="Описание" value={data?.lot?.description || '-'} />
        <ModalProperty title="Условия" value={data?.lot?.terms || '-'} />
        <ModalProperty
          title="Исполнитель"
          value={
            <Link
              href={`/admin/accounts/${data?.lot.performer.id}`}
              className={cx('PropertyValue', 'Link')}
            >
              {`${data?.lot.performer.surname} ${data?.lot.performer.name}` || ''}
            </Link>
          }
        />

        <ModalProperty
          title="Дата"
          value={dateToFormatString(data?.date || undefined) || '-'}
        />
        <ModalProperty title="Стоимость" value={data?.lot?.price + '' || ''} />
      </ModalContainer>

      {isAdmin && data?.status === TwoSidedClaimStatus.WaitingAdmin && (
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
    </Modal>
  );
}

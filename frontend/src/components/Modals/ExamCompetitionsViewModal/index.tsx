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
import { ExamPage } from '@/components/Pages/ExamPage';
import { CompetitionPage } from '@/components/Pages/CompetitionPage';

type Props = {
  examId?: string | null;
  competitionId?: string | null;
  isOpen: boolean;
  onExit?: MouseEventHandler;
  onCancel?: MouseEventHandler;
  onOk?: MouseEventHandler;
  isOkLoading?: boolean;
  isDeclineLoading?: boolean;
};

const cx = cn.bind(styles);

export function ExamCompetitionsViewModal({
  examId,
  competitionId,
  isOpen,
  onCancel,
  onExit,
  onOk,
  isOkLoading,
  isDeclineLoading,
}: Props) {

  return (
    <Modal
      // title={`Заявка на штраф за дедлайн №${examId?.id}`}
      open={isOpen}
      onCancel={onExit}
      footer={null}
      centered
    >
      <ModalContainer>
       {examId && <ExamPage examId={examId} />}
       {competitionId && <CompetitionPage competitionId={competitionId} />}
      </ModalContainer>
    </Modal>
  );
}

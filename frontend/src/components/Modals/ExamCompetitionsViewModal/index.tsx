import { Modal } from 'antd';
import cn from 'classnames/bind';
import React, { MouseEventHandler, useEffect } from 'react';

import { ModalContainer } from '@/components/Modals/Components/ModalContainer';
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
  useEffect(() => {
    console.log('EX: ', examId, ' COMP: ', competitionId);
  }, [examId, competitionId]);

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

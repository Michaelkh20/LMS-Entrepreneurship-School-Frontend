import React, { MouseEventHandler } from 'react';
import { Divider, Modal } from 'antd';
import AdminSubmissionSection from '@/components/SubmissionSection/AdminSubmissionSection';
import { ModalProperty } from '../Components/ModalProperty';
import GradeSection from '@/components/Pages/GradeSection';
import { ModalContainer } from '../Components/ModalContainer';

type Props = {
  submissionId?: string | null;
  isOpen: boolean;
  onCancel: MouseEventHandler;
  onOk: MouseEventHandler;
};

export default function GradeViewModal({
  submissionId,
  isOpen,
  onCancel,
  onOk,
}: Props) {
  return (
    <Modal
      title={`Оценка`}
      open={isOpen}
      onCancel={onCancel}
      footer={null}
      centered
    >
      <ModalContainer>
        <ModalProperty
          title="Статус"
          value={`${'todo' /* record.finalGrade ? 'Оценено' : 'Не оценено'*/}`}
        />
        <ModalProperty
          title="Название ДЗ"
          value={`${'todo' /* record.homework.title'*/}`}
        />
        <ModalProperty
          title="Ученик"
          value={`${
            'todo' /* `${record.learner?.surname} ${record.learner?.name}` */
          }`}
        />
      </ModalContainer>

      <Divider style={{ margin: '8px 0' }} />
      {isOpen && submissionId && <GradeSection submissionId={submissionId} />}
      <Divider style={{ margin: '8px 0' }} />

      {isOpen && submissionId && (
        <AdminSubmissionSection submissionId={submissionId} />
      )}
    </Modal>
  );
}

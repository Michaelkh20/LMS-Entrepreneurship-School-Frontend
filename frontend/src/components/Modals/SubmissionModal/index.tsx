import React, { MouseEventHandler } from 'react';
import { Modal } from 'antd';
import AdminSubmissionSection from '@/components/SubmissionSection/AdminSubmissionSection';

type Props = {
  submissionId?: string | null;
  isOpen: boolean;
  onCancel: MouseEventHandler;
  onOk: MouseEventHandler;
};

export default function SubmisssionModal({
  submissionId,
  isOpen,
  onCancel,
  onOk,
}: Props) {
  return (
    <Modal
      title={`Решение`}
      open={isOpen}
      onCancel={onCancel}
      footer={null}
      centered
    >
      {isOpen && submissionId && (
        <AdminSubmissionSection submissionId={submissionId} />
      )}
    </Modal>
  );
}

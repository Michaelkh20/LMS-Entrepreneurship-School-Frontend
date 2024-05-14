'use client';

import React, { useEffect } from 'react';
import { Modal, message } from 'antd';
import { ModalContainer } from '../Components/ModalContainer';
import { useCreateTeamMutation } from '@/redux/services/api';
import { ICreateUpdateTeamRequest } from '@/types/proto';
import { useRouter } from 'next/navigation';
import TeamForm from '@/components/Forms/Teams';

type TeamCreateModalProps = {
  isOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

export default function TeamCreateModal({
  isOpen,
  setModalOpen,
}: TeamCreateModalProps) {
  const [createTeam, result] = useCreateTeamMutation();
  const router = useRouter();

  const handleCancel = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (result.isError) {
      message.error('Что-то пошло не так', 5);
    }

    if (result.isLoading) {
      message.loading({ content: 'Загрузка...', duration: 0, key: 'Loading' });
    } else {
      message.destroy('Loading');
    }

    if (result.isSuccess) {
      router.push(`/admin/teams/`);
      setModalOpen(false);
    }
  }, [result, router, setModalOpen]);

  const handleFinish = (values: ICreateUpdateTeamRequest) => {
    createTeam(values);
  };

  return (
    <Modal
      title={<h3 style={{ paddingLeft: '.5rem' }}>Создание команды</h3>}
      open={isOpen}
      onCancel={handleCancel}
      footer={null}
      centered
    >
      <ModalContainer>
        <TeamForm type="create" result={result} onFinish={handleFinish} />
      </ModalContainer>
    </Modal>
  );
}

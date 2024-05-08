'use client';

import React from 'react';
import { Modal } from 'antd';
import styles from './TeamViewModal.module.css';
import { skipToken } from '@reduxjs/toolkit/query';
import { useGetTeamPublicProfileByIdQuery } from '@/redux/services/api';
import LoadingErrorStub from '@/components/LoadingErrorStub';
import { TeamUsersTable } from '@/components/TableWithFilterNew/Tables/Admin/TeamUsersTable';

type TeamViewModalProps = {
  isOpen: boolean;
  teamId?: string | null;
  setModalOpen: (open: boolean) => void;
};

export default function TeamViewModal({
  isOpen,
  teamId,
  setModalOpen,
}: TeamViewModalProps) {
  const { data, isLoading, isSuccess, isError } =
    useGetTeamPublicProfileByIdQuery(teamId && isOpen ? teamId : skipToken);
  console.log(data);

  const handleCancel = () => {
    setModalOpen(false);
  };

  if (!isSuccess) {
    return <LoadingErrorStub isError={isError} isLoading={isLoading} />;
  }

  return (
    <Modal
      title={
        <h3 style={{ paddingLeft: '.5rem' }}>
          Команда №{data?.team?.number || ' -'}
        </h3>
      }
      open={isOpen}
      onCancel={handleCancel}
      footer={null}
      centered
    >
      <div className={styles.container}>
        {data?.team?.projectTheme && (
          <div className={styles.property}>
            <p className={styles.propertyName}>Тема проекта</p>
            <p className={styles.propertyTextValue}>
              {data.team.projectTheme || 'Lorem ipsum'}
            </p>
          </div>
        )}
        {data?.team?.description && (
          <div className={styles.property}>
            <p className={styles.propertyName}>Описание</p>
            <p className={styles.propertyTextValue}>
              {data.team.description ||
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
            </p>
          </div>
        )}
        <div className={styles.property}>
          <p className={styles.propertyName}>Ученики</p>
          <TeamUsersTable users={data?.team?.students} />
        </div>
        <div className={styles.property}>
          <p className={styles.propertyName}>Трекеры</p>
          <TeamUsersTable users={data?.team?.trackers} />
        </div>
      </div>
    </Modal>
  );
}

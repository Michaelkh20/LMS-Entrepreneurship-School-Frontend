import React from 'react';
import { Modal } from 'antd';
import { useGetTeamQuery } from '@/redux/services/learnerApi';
import styles from './TeamViewModal.module.css';

type TeamViewModalProps = {
  open: boolean;
  teamId: string;
  setModalOpen: (open: boolean) => void;
};

//TODO: Добавить таблицы с учениками и трекерами
export default function TeamViewModal({
  open,
  teamId,
  setModalOpen,
}: TeamViewModalProps) {
  const { data } = useGetTeamQuery(teamId);

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      title={`Команда №${data?.teamNumber}`}
      open={open}
      onCancel={handleCancel}
      footer={null}
      centered
    >
      <div className={styles.container}>
        <div className={styles.property}>
          <p className={styles.propertyName}>Тема проекта</p>
          <p className={styles.propertyTextValue}>{data?.projectTheme}</p>
        </div>
        <div className={styles.property}>
          <p className={styles.propertyName}>Ученики</p>
          <p className={styles.propertyTextValue}>
            Здесь будет таблица c учениками
          </p>
        </div>
        <div className={styles.property}>
          <p className={styles.propertyName}>Трекеры</p>
          <p className={styles.propertyTextValue}>
            Здесь будет таблица c трекерами
          </p>
        </div>
      </div>
    </Modal>
  );
}

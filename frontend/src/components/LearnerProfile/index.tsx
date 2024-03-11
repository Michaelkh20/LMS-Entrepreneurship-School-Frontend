'use client';

import React, { useState } from 'react';
import styles from './LearnerProfile.module.css';
import { useGetProfileQuery } from '@/redux/services/learnerApi';
import cn from 'classnames/bind';
import { getRoleString } from './helpers';
import TeamViewModal from '../Modals/TeamViewModal';

const cx = cn.bind(styles);

export default function LearnerProfile() {
  const { data } = useGetProfileQuery('1');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTeamClick = () => {
    setIsModalOpen(true);
  };

  console.log(data);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Профиль</h1>
      <div className={styles.profileCard}>
        <div className={styles.header}>
          <div>
            <p className={styles.name}>{data?.fullName}</p>
            <p className={styles.role}>{getRoleString(data?.role)}</p>
          </div>
          <div className={styles.balance}>
            Баланс:
            <span className={styles.balanceNumber}>{data?.balance} ШП</span>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.propertiesContainer}>
            <div className={styles.property}>
              <p className={styles.propertyTitle}>Email</p>
              <p className={styles.propertyValue}>{data?.email}</p>
            </div>
            <div className={styles.property}>
              <p className={styles.propertyTitle}>Команда</p>
              <p
                onClick={handleTeamClick}
                className={cx('propertyValue', 'teamValue')}
              >
                №{data?.team?.number}
              </p>
            </div>
            <div className={styles.property}>
              <p className={styles.propertyTitle}>Телефон</p>
              <p className={styles.propertyValue}>{data?.phone}</p>
            </div>
            <div className={styles.property}>
              <p className={styles.propertyTitle}>Мессенджер</p>
              <p className={styles.propertyValue}>{data?.messenger}</p>
            </div>
          </div>
          <div>Здесь будет таблица с итоговыми оценками</div>
        </div>
      </div>
      {data?.team?.id && (
        <TeamViewModal
          open={isModalOpen}
          setModalOpen={setIsModalOpen}
          teamId={data.team.id}
        />
      )}
    </div>
  );
}

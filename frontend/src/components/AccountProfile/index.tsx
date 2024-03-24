'use client';

import React, { useState } from 'react';
import styles from './LearnerProfile.module.css';
import { useGetProfileQuery } from '@/redux/services/learnerApi';
import cn from 'classnames/bind';
import { getRoleString } from './helpers';
import TeamViewModal from '../Modals/TeamViewModal';
import { Button } from 'antd';
import {
  ArrowUpOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { FinalGradeTable } from '../TableWithFilterNew';

const cx = cn.bind(styles);

type Props = {
  id: string;
  isEditable?: boolean;
};

export default function AccountProfile({ id, isEditable = false }: Props) {
  const { data } = useGetProfileQuery(id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTeamClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Профиль</h1>
        {isEditable && (
          <Button
            size="large"
            type="default"
            icon={<EditOutlined />}
            href={`/admin/accounts/${id}/edit`}
          >
            Редактировать
          </Button>
        )}
      </div>
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
            {isEditable && (
              <div className={styles.deleteBtnContainer}>
                <Button
                  size="large"
                  type="primary"
                  danger
                  icon={<DeleteOutlined />}
                >
                  Удалить
                </Button>
              </div>
            )}
          </div>
          <div className={styles.finalGradeContainer}>
            <FinalGradeTable />
            {isEditable && (
              <div className={styles.riseBtnContainer}>
                <Button size="large" type="default" icon={<ArrowUpOutlined />}>
                  Повысить итоговую
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <TeamViewModal
        isOpen={isModalOpen}
        setModalOpen={setIsModalOpen}
        teamId={data?.team?.id}
      />
    </div>
  );
}

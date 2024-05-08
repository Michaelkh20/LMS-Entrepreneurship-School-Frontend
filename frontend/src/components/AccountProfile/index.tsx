'use client';

import React, { useState } from 'react';
import styles from './LearnerProfile.module.css';
import { useGetUserByIdQuery } from '@/redux/services/api';
import cn from 'classnames/bind';
import { getRoleString } from './helpers';
import TeamViewModal from '../Modals/TeamViewModal';
import { Button } from 'antd';
import {
  ArrowUpOutlined,
  DeleteOutlined,
  EditOutlined,
  MessageOutlined,
  PhoneOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { FinalGradeTable } from '../TableWithFilterNew';
import AccountDeleteBtn from '../Buttons/DeleteButtons/AccountDeleteBtn';
import { BasePageLayout } from '../Layouts/BasePageLayout/BasePageLayout';

const cx = cn.bind(styles);

type Props = {
  id: string;
  isEditable?: boolean;
};

export default function AccountProfile({ id, isEditable = false }: Props) {
  const { data } = useGetUserByIdQuery(id);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamId, setTeamId] = useState<string>();

  const handleTeamClick = (teamId: string) => {
    setTeamId(teamId);
    setIsModalOpen(true);
  };

  return (
    <BasePageLayout
      header={
        <>
          <h1 className={styles.title}>Профиль</h1>
          {isEditable && (
            <Button
              size="large"
              type="default"
              icon={<EditOutlined />}
              href={`/admin/users/${id}/edit`}
            >
              Редактировать
            </Button>
          )}
        </>
      }
    >
      <div className={styles.profileCard}>
        <div className={styles.header}>
          <div>
            <p className={styles.name}>
              {data?.user?.surname +
                ' ' +
                data?.user?.name +
                ' ' +
                data?.user?.patronymic}
            </p>
            <p className={styles.role}>{getRoleString(data?.user?.role)}</p>
          </div>
          <div className={styles.balance}>
            Баланс:
            <span className={styles.balanceNumber}>
              {data?.user?.balance} ШП
            </span>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.propertiesContainer}>
            <div className={styles.property}>
              <span className={styles.propertyTitle}>
                <UserOutlined></UserOutlined>
                <p>Email</p>
              </span>
              <p className={styles.propertyValue}>{data?.user?.email}</p>
            </div>
            <div className={styles.property}>
              <span className={styles.propertyTitle}>
                <TeamOutlined></TeamOutlined>
                <p className={styles.propertyTitle}>Команда</p>
              </span>

              {data?.user?.memberOfTeams[0]
                ? data?.user?.memberOfTeams.map((team) => {
                    return (
                      <p
                        onClick={() => handleTeamClick(team.id)}
                        className={cx('propertyValue', 'teamValue')}
                      >
                        {team.number}
                      </p>
                    );
                  })
                : 'Не в команде'}
            </div>
            <div className={styles.property}>
              <span className={styles.propertyTitle}>
                <PhoneOutlined></PhoneOutlined>
                <p className={styles.propertyTitle}>Телефон</p>
              </span>
              <p className={styles.propertyValue}>{data?.user?.phoneNumber}</p>
            </div>
            <div className={styles.property}>
              <span className={styles.propertyTitle}>
                <MessageOutlined></MessageOutlined>
                <p className={styles.propertyTitle}>Мессенджер</p>
              </span>

              <p className={styles.propertyValue}>
                {data?.user?.messengerContact}
              </p>
            </div>
            {isEditable && (
              <div className={styles.deleteBtnContainer}>
                <AccountDeleteBtn id={id} />
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
        teamId={teamId}
      />
    </BasePageLayout>

    // <div className={styles.container}>
    //   <div className={styles.titleContainer}>
    //     <h1 className={styles.title}>Профиль</h1>
    //     {isEditable && (
    //       <Button
    //         size="large"
    //         type="default"
    //         icon={<EditOutlined />}
    //         href={`/admin/users/${id}/edit`}
    //       >
    //         Редактировать
    //       </Button>
    //     )}
    //   </div>
    //   <div className={styles.profileCard}>
    //     <div className={styles.header}>
    //       <div>
    //         <p className={styles.name}>
    //           {data?.user?.surname +
    //             ' ' +
    //             data?.user?.name +
    //             ' ' +
    //             data?.user?.patronymic}
    //         </p>
    //         <p className={styles.role}>{getRoleString(data?.user?.role)}</p>
    //       </div>
    //       <div className={styles.balance}>
    //         Баланс:
    //         <span className={styles.balanceNumber}>
    //           {data?.user?.balance} ШП
    //         </span>
    //       </div>
    //     </div>
    //     <div className={styles.content}>
    //       <div className={styles.propertiesContainer}>
    //         <div className={styles.property}>
    //           <span className={styles.propertyTitle}>
    //             <UserOutlined></UserOutlined>
    //             <p>Email</p>
    //           </span>
    //           <p className={styles.propertyValue}>{data?.user?.email}</p>
    //         </div>
    //         <div className={styles.property}>
    //           <span className={styles.propertyTitle}>
    //             <TeamOutlined></TeamOutlined>
    //             <p className={styles.propertyTitle}>Команда</p>
    //           </span>

    //           <p
    //             onClick={handleTeamClick}
    //             className={cx('propertyValue', 'teamValue')}
    //           >
    //             {data?.user?.memberOfTeams[0]
    //               ? '№' + data.user.memberOfTeams[0].number
    //               : 'Не в команде'}
    //           </p>
    //         </div>
    //         <div className={styles.property}>
    //           <span className={styles.propertyTitle}>
    //             <PhoneOutlined></PhoneOutlined>
    //             <p className={styles.propertyTitle}>Телефон</p>
    //           </span>
    //           <p className={styles.propertyValue}>{data?.user?.phoneNumber}</p>
    //         </div>
    //         <div className={styles.property}>
    //           <span className={styles.propertyTitle}>
    //             <MessageOutlined></MessageOutlined>
    //             <p className={styles.propertyTitle}>Мессенджер</p>
    //           </span>

    //           <p className={styles.propertyValue}>
    //             {data?.user?.messengerContact}
    //           </p>
    //         </div>
    //         {isEditable && (
    //           <div className={styles.deleteBtnContainer}>
    //             <AccountDeleteBtn id={id} />
    //           </div>
    //         )}
    //       </div>
    //       <div className={styles.finalGradeContainer}>
    //         <FinalGradeTable />
    //         {isEditable && (
    //           <div className={styles.riseBtnContainer}>
    //             <Button size="large" type="default" icon={<ArrowUpOutlined />}>
    //               Повысить итоговую
    //             </Button>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>

    //   {/* <TeamViewModal
    //     isOpen={isModalOpen}
    //     setModalOpen={setIsModalOpen}
    //     teamId={data?.team?.id}
    //   /> */}
    // </div>
  );
}

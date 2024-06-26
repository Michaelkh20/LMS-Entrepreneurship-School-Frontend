'use client';

import { TeamTableWithFilter } from '@/components/TableWithFilterNew';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState } from 'react';

import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

import TeamCreateModal from '@/components/Modals/TeamCreateModal';
import { useCreateTeamMutation } from '@/redux/services/api';
import { ICreateUpdateTeamRequest } from '@/types/proto';

export default function TeamsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const [createTeam, result] = useCreateTeamMutation();

  // const handleFinish = (values: ICreateUpdateTeamRequest) => {
  //   createTeam(values);
  // };

  const handleOnClick = () => {
    setIsModalOpen(true);
  };

  return (
    <BasePageLayout
      header={
        <>
          <h2>Команды</h2>
          <Button
            icon={<PlusOutlined height={10} />}
            size="large"
            type="primary"
            onClick={() => handleOnClick()}
          >
            Создать
          </Button>
        </>
      }
    >
      <TeamTableWithFilter />
      <TeamCreateModal isOpen={isModalOpen} setModalOpen={setIsModalOpen} />
    </BasePageLayout>
  );
}

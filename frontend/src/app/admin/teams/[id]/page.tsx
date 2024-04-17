'use client';

import { TeamUsersTable } from '@/components/TableWithFilterNew/Tables/Admin/TeamUsersTable';
import { useGetTeamQuery } from '@/redux/services/adminApi';

import styles from '@/app/admin/main.module.css';
import { Button } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { TeamUsersEditTable } from '@/components/TableWithFilterNew/Tables/Admin/TeamUsersEditTable';

export default function TeamPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data } = useGetTeamQuery(id);
  console.log("data", data);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Команда {id}</h2>
        <Button icon={<EditOutlined height={10} />} size="large">
          Редактировать
        </Button>
      </div>
      <h3>
        Тема проекта: {data?.theme} 
      </h3>

      <h3>Ученики</h3>
      <TeamUsersTable users={data?.learners}></TeamUsersTable>

      <h3>Трекеры</h3>
      <TeamUsersTable users={data?.trackers}></TeamUsersTable>
    </div>
  );
}

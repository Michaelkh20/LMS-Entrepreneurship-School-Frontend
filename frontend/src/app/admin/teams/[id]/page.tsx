'use client';

import { TeamUsersTable } from '@/components/TableWithFilterNew/Tables/Admin/TeamUsersTable';
import { useGetTeamByIdQuery } from '@/redux/services/api';

import styles from '@/app/admin/main.module.css';
import { Button } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { TeamUsersEditTable } from '@/components/TableWithFilterNew/Tables/Admin/TeamUsersEditTable';

export default function TeamPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data } = useGetTeamByIdQuery(id);
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
        Тема проекта: {data?.team?.projectTheme} 
      </h3>

      <h3>Ученики</h3>
      <TeamUsersTable users={data?.team?.students}></TeamUsersTable>

      <h3>Трекеры</h3>
      <TeamUsersTable users={data?.team?.trackers}></TeamUsersTable>
    </div>
  );
}

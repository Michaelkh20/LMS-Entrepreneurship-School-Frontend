'use client';

import styles from '@/app/admin/main.module.css';
import { Button } from 'antd';
import { CheckOutlined, PlusOutlined } from '@ant-design/icons';
import { TeamUsersEditTable } from '@/components/TableWithFilterNew/Tables/Admin/TeamUsersEditTable';
import { useState } from 'react';
import { useGetTeamByIdQuery } from '@/redux/services/api';

export default function TeamPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data } = useGetTeamByIdQuery(id);
  const [formData, setFormData] = useState({}); //TODO: form for edit team members

  console.log('data', data);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Редактировать команду {id}</h2>
        {/* <Button icon={<EditOutlined height={10} />} size="large">
          Отменить
        </Button> */}
      </div>
      <h3>Тема проекта: {data?.team?.projectTheme || '-'}</h3>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h3>Ученики</h3>
        <Button icon={<PlusOutlined />} size="large">
          Добавить ученика
        </Button>
      </div>

      <TeamUsersEditTable users={data?.team?.students} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h3>Трекеры</h3>
        <Button icon={<PlusOutlined />} size="large">
          Добавить трекера
        </Button>
      </div>

      <TeamUsersEditTable users={data?.team?.trackers}></TeamUsersEditTable>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Button icon={<CheckOutlined />} size="large" danger>
          Удалить команду
        </Button>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Button size="large">Назад</Button>
        <Button type="primary" icon={<CheckOutlined />} size="large">
          Подтвердить
        </Button>
      </div>
    </div>
  );
}

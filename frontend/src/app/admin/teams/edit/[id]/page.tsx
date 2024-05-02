'use client';

import styles from '@/app/admin/main.module.css';
import { Button } from 'antd';
import { CheckOutlined, PlusOutlined } from '@ant-design/icons';
import { TeamUsersEditTable } from '@/components/TableWithFilterNew/Tables/Admin/TeamUsersEditTable';
import { useState } from 'react';
import { useGetTeamByIdQuery } from '@/redux/services/api';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function TeamPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data } = useGetTeamByIdQuery(id);
  const [formData, setFormData] = useState({}); //TODO: form for edit team members

  console.log('data', data);
  return (
    <BasePageLayout header={<h2>Редактировать команду {id}</h2>}>
      <h3 className={styles.header}>
        Тема проекта: {data?.team?.projectTheme || ' -'}
      </h3>

      <section className={styles.section}>
        <div className={styles.header}>
          <h3>Ученики</h3>
          <Button icon={<PlusOutlined />} size="large">
            Добавить ученика
          </Button>
        </div>

        <TeamUsersEditTable users={data?.team?.students} />
      </section>

      <section className={styles.section}>
        <div className={styles.header}>
          <h3>Трекеры</h3>
          <Button icon={<PlusOutlined />} size="large">
            Добавить трекера
          </Button>
        </div>

        <TeamUsersEditTable users={data?.team?.trackers}></TeamUsersEditTable>
      </section>

      <div className={styles.buttons_group}>
        <Button icon={<CheckOutlined />} size="large" danger>
          Удалить команду
        </Button>
      </div>

      <div className={styles.buttons_group_end}>
        <Button size="large">Назад</Button>
        <Button type="primary" icon={<CheckOutlined />} size="large">
          Подтвердить
        </Button>
      </div>
    </BasePageLayout>
  );
}

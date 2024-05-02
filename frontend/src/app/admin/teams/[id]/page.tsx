'use client';

import { TeamUsersTable } from '@/components/TableWithFilterNew/Tables/Admin/TeamUsersTable';
import { useGetTeamByIdQuery } from '@/redux/services/api';

import styles from '../../main.module.css';
import { Button } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { useRouter } from 'next/navigation';

export default function TeamPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data } = useGetTeamByIdQuery(id);
  const router = useRouter();

  return (
    <BasePageLayout
      header={
        <>
          <h2>Команда {id}</h2>
          <Button
            icon={<EditOutlined height={10} />}
            size="large"
            onClick={() => {
              router.push(`edit/${id}`);
            }}
          >
            Редактировать
          </Button>
        </>
      }
    >
      <section className={styles.section}>
        <h3 className={styles.header}>
          Тема проекта: {data?.team?.projectTheme}
        </h3>
      </section>
      <section className={styles.section}>
        <h3 className={styles.header}>Ученики</h3>
        <TeamUsersTable users={data?.team?.students}></TeamUsersTable>
      </section>
      <section className={styles.section}>
        <h3 className={styles.header}>Трекеры</h3>
        <TeamUsersTable users={data?.team?.trackers}></TeamUsersTable>
      </section>
    </BasePageLayout>
  );
}

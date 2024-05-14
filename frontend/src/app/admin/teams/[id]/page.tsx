'use client';

import {
  TeamUsersColumnsType,
  TeamUsersTable,
} from '@/components/TableWithFilterNew/Tables/Admin/TeamUsersTable';
import { useGetTeamByIdQuery } from '@/redux/services/api';

import styles from '../../main.module.css';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { useRouter } from 'next/navigation';
import { User } from '@proto/users/users_api';

export const usersToTeamTableItem = (users: User[]): TeamUsersColumnsType[] => {
  return users.map<TeamUsersColumnsType>((user) => ({
    userId: user.id,
    userBalance: user.balance,
    userEmail: user.email,
    userName: `${user.surname} ${user.name}`,
  }));
};

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
          <h2>Команда {data?.team?.number}</h2>
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
          Тема проекта
        </h3>
        <div style={{paddingLeft: '1rem'}}>{data?.team?.projectTheme}</div>
      </section>
      <section className={styles.section}>
        <h3 className={styles.header}>
          Описание
        </h3>
        <div style={{paddingLeft: '1rem'}}>{data?.team?.description}</div>
      </section>
      <section className={styles.section}>
        <h3 className={styles.header}>Ученики</h3>
        <TeamUsersTable
          tableData={usersToTeamTableItem(data?.team?.students || [])}
        ></TeamUsersTable>
      </section>
      <section className={styles.section}>
        <h3 className={styles.header}>Трекеры</h3>
        <TeamUsersTable
          tableData={usersToTeamTableItem(data?.team?.trackers || [])}
        ></TeamUsersTable>
      </section>
    </BasePageLayout>
  );
}

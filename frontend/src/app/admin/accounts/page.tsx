'use client';

import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from '../main.module.css';

import {
  useGetAccountsListQuery,
  useGetAccountsShortListQuery,
} from '@/redux/services/adminApi';
import { AccountsTableWithFilter } from '@/components/TableWithFilterNew';
import { useRouter } from 'next/navigation';

export default function Accounts() {
  const router = useRouter();

  const handleCreateClick = () => {
    router.push('/admin/accounts/create');
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Аккаунты</h2>
          <Button
            icon={<PlusOutlined height={10} />}
            size="large"
            type="primary"
            onClick={handleCreateClick}
          >
            Создать
          </Button>
        </div>
        <AccountsTableWithFilter />
      </div>
    </>
  );
}

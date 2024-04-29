'use client';

import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from '../main.module.css';

import { AccountsTableWithFilter } from '@/components/TableWithFilterNew';
import { useRouter } from 'next/navigation';

export default function Users() {
  const router = useRouter();

  const handleCreateClick = () => {
    router.push('/admin/users/create');
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
        <AccountsTableWithFilter
          onRow={(record, rowIndex) => {
            return {
              onClick: (ev) => {
                console.log('ABOBADOBSAODBSABD');
                router.push(`/admin/users/${record.id}`);
              }, // click row
            };
          }}
        />
      </div>
    </>
  );
}

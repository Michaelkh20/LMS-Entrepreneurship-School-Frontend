'use client';

import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from '../main.module.css';

import { AccountsTableWithFilter } from '@/components/TableWithFilterNew';
import { useRouter } from 'next/navigation';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function Users() {
  const router = useRouter();

  const handleCreateClick = () => {
    router.push('/admin/users/create');
  };

  return (
    <BasePageLayout
      header={
        <>
          <h2>Аккаунты</h2>
          <Button
            icon={<PlusOutlined height={10} />}
            size="large"
            type="primary"
            onClick={handleCreateClick}
          >
            Создать
          </Button>
        </>
      }
    >
      <AccountsTableWithFilter
        onRow={(record, rowIndex) => {
          return {
            onClick: (ev) => {
              router.push(`/admin/users/${record.id}`);
            },
          };
        }}
      />
    </BasePageLayout>
  );
}

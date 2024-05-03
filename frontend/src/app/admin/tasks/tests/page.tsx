'use client';

import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { TestsTableWithFilter } from '@/components/TableWithFilterNew/Components/TestsTableWithFilter';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { useRouter } from 'next/navigation';

export default function TestsPage() {
  const router = useRouter();

  const handleCreateClick = () => {
    router.push('/admin/tasks/tests/create');
  };

  return (
    <BasePageLayout
      header={
        <>
          <h2>Задания: Тесты</h2>
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
      <TestsTableWithFilter
        onRow={(record) => {
          return {
            onClick: () => {
              router.push(`/admin/tasks/tests/${record.id}`);
            },
          };
        }}
      />
    </BasePageLayout>
  );
}

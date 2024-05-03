'use client';

import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

import { HWTableWithFilter } from '@/components/TableWithFilterNew/Components/HWTableWithFilter';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { useRouter } from 'next/navigation';

export default function HomeworksPage() {
  const router = useRouter();

  const handleCreateClick = () => {
    router.push('/admin/tasks/homeworks/create');
  };

  return (
    <BasePageLayout
      header={
        <>
          <h2>Задания: ДЗ</h2>
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
      <HWTableWithFilter
        onRow={(record) => {
          return {
            onClick: () => {
              router.push(`/admin/tasks/homeworks/${record.id}`);
            },
          };
        }}
      />
    </BasePageLayout>
  );
}

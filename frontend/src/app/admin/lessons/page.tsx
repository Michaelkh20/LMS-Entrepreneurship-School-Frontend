'use client';

import React from 'react';
import { LessonsTableWithFilter } from '@/components/TableWithFilterNew/Components/LessonsTableWithFilter';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { useRouter } from 'next/navigation';

export default function LessonsPage() {
  const router = useRouter();

  const handleCreateClick = () => {
    router.push('lessons/create');
  };

  return (
    <BasePageLayout
      header={
        <>
          <h2>Уроки</h2>
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
      <LessonsTableWithFilter
        onRow={(record) => {
          return {
            onClick: () => {
              router.push(`/admin/lessons/${record.id}`);
            },
          };
        }}
      />
    </BasePageLayout>
  );
}

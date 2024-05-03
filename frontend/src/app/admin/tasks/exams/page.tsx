import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

import { ExamsTableWithFilter } from '@/components/TableWithFilterNew/Components/ExamsTableWithFilter';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { useRouter } from 'next/navigation';

export default function ExamsPage() {
  const router = useRouter();

  const handleCreateClick = () => {
    router.push('/admin/tasks/exams/create');
  };

  return (
    <BasePageLayout
      header={
        <>
          <h2>Задания: Экзамены</h2>
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
      <ExamsTableWithFilter />
    </BasePageLayout>
  );
}

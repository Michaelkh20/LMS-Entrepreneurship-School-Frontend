import React from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { CompetitionsTableWithFilter } from '@/components/TableWithFilterNew/Components/CompetitionsTableWithFilter';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { useRouter } from 'next/navigation';

export default function CompetitionsPage() {
  const router = useRouter();

  const handleCreateClick = () => {
    router.push('/admin/tasks/competitions/create');
  };

  return (
    <BasePageLayout
      header={
        <>
          <h2>Задания: Конкурсы</h2>
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
      <CompetitionsTableWithFilter />
    </BasePageLayout>
  );
}

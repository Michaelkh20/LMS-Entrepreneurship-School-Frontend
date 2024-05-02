import React from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { CompetitionsTableWithFilter } from '@/components/TableWithFilterNew/Components/CompetitionsTableWithFilter';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function CompetitionsPage() {
  return (
    <BasePageLayout
      header={
        <>
          <h2>Задания: Конкурсы</h2>
          <Button
            icon={<PlusOutlined height={10} />}
            size="large"
            type="primary"
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

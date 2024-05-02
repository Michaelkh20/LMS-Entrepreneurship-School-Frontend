import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

import { ExamsTableWithFilter } from '@/components/TableWithFilterNew/Components/ExamsTableWithFilter';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function ExamsPage() {
  return (
    <BasePageLayout
      header={
        <>
          <h2>Задания: Экзамены</h2>
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
      <ExamsTableWithFilter />
    </BasePageLayout>
  );
}

import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { TestsTableWithFilter } from '@/components/TableWithFilterNew/Components/TestsTableWithFilter';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function TestsPage() {
  return (
    <BasePageLayout
      header={
        <>
          <h2>Задания: Тесты</h2>
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
      <TestsTableWithFilter />
    </BasePageLayout>
  );
}

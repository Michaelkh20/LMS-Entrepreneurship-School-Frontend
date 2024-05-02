import { LessonsTableWithFilter } from '@/components/TableWithFilterNew/Components/LessonsTableWithFilter';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function LessonsPage() {
  return (
    <BasePageLayout
      header={
        <>
          <h2>Уроки</h2>
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
      <LessonsTableWithFilter />
    </BasePageLayout>
  );
}

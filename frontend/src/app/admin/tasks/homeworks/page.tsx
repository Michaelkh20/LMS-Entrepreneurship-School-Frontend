import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

import styles from '@/app/admin/main.module.css';
import { HWTableWithFilter } from '@/components/TableWithFilterNew/Components/HWTableWithFilter';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function HomeworksPage() {
  return (
    <BasePageLayout
      header={
        <>
          <h2>Задания: ДЗ</h2>
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
      <HWTableWithFilter />
    </BasePageLayout>
  );
}

import { TeamTableWithFilter } from '@/components/TableWithFilterNew';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function TeamsPage() {
  return (
    <BasePageLayout
      header={
        <>
          <h2>Команды</h2>
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
      <TeamTableWithFilter />
    </BasePageLayout>
  );
}

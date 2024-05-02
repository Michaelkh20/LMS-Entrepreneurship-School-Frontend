import { LotTableWithFilter } from '@/components/TableWithFilterNew/Components/LotTableWithFilter';
import React from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function LotsPage() {
  return (
    <BasePageLayout
      header={
        <>
          <h2>Лоты</h2>
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
      <LotTableWithFilter />
    </BasePageLayout>
  );
}

import { LotTableWithFilter } from '@/components/TableWithFilterNew/Components/LotTableWithFilter';
import React from 'react';

import styles from '@/app/admin/main.module.css';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';


export default function LotsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Лоты</h2>
        <Button icon={<PlusOutlined height={10} />} size="large" type="primary">
          Создать
        </Button>
      </div>
      <LotTableWithFilter />
    </div>
  );
}

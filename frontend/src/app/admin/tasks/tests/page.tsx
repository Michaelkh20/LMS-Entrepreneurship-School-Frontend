import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

import styles from '@/app/admin/main.module.css';
import { TestsTableWithFilter } from '@/components/TableWithFilterNew/Components/TestsTableWithFilter';

export default function TestsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Задания: Тесты</h2>
        <Button icon={<PlusOutlined height={10} />} size="large" type="primary">
          Создать
        </Button>
      </div>
      <TestsTableWithFilter />
    </div>
  );
}

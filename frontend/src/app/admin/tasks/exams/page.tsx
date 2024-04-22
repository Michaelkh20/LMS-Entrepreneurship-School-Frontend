import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

import styles from '@/app/admin/main.module.css';
import { ExamsTableWithFilter } from '@/components/TableWithFilterNew/Components/ExamsTableWithFilter';

export default function ExamsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Задания: Экзамены</h2>
        <Button icon={<PlusOutlined height={10} />} size="large" type="primary">
          Создать
        </Button>
      </div>
      <ExamsTableWithFilter />
    </div>
  );
}

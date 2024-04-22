import React from 'react';

import styles from '@/app/admin/main.module.css';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { CompetitionsTableWithFilter } from '@/components/TableWithFilterNew/Components/CompetitionsTableWithFilter';

export default function CompetitionsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Задания: Конкурсы</h2>
        <Button icon={<PlusOutlined height={10} />} size="large" type="primary">
          Создать
        </Button>
      </div>
      <CompetitionsTableWithFilter />
    </div>
  );
}

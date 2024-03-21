import { LessonsTableWithFilter } from '@/components/TableWithFilterNew/Components/LessonsTableWithFilter';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

import styles from '@/app/admin/main.module.css';

export default function LessonsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Уроки</h2>
        <Button icon={<PlusOutlined height={10} />} size="large" type="primary">
          Создать
        </Button>
      </div>
      <LessonsTableWithFilter />
    </div>
  );
}

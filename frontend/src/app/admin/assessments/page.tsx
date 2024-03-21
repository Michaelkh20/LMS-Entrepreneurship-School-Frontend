import React from 'react';

import styles from '../main.module.css';
import { AssessmentAllTasksTableWithFilter } from '@/components/TableWithFilterNew/Components/AssessmentAllTasksTableWithFilter';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export default function AssessmentAllPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Оценки</h2>
        <Button icon={<PlusOutlined height={10} />} size="large" type="primary">
          Создать
        </Button>
      </div>
      <AssessmentAllTasksTableWithFilter />
    </div>
  );
}

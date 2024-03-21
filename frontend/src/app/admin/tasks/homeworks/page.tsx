import { TasksTableWithFilter } from '@/components/TableWithFilterNew/Components/TasksTableWithFilter';
import { TaskType } from '@/types/common';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

import styles from '@/app/admin/main.module.css';


export default function HomeworksPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Задания: ДЗ</h2>
        <Button icon={<PlusOutlined height={10} />} size="large" type="primary">
          Создать
        </Button>
      </div>
      <TasksTableWithFilter taskType={TaskType.HW}/>
    </div>
  );
}

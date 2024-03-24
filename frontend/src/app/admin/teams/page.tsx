import { TeamTableWithFilter } from '@/components/TableWithFilterNew';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

import styles from '@/app/admin/main.module.css';

export default function TeamsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Команды</h2>
        <Button icon={<PlusOutlined height={10} />} size="large" type="primary">
          Создать
        </Button>
      </div>
      <TeamTableWithFilter />
    </div>
  );
}

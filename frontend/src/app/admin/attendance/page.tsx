import { AttendanceTable } from '@/components/TableWithFilterNew';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

import styles from '@/app/admin/main.module.css';
import { AttendanceLessonsTableWithFilter } from '@/components/TableWithFilterNew/Components/AttendanceLessonsTableWithFilter';


export default function AttendenceLessonsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Посещаемость</h2>
      </div>
      <AttendanceLessonsTableWithFilter/>
    </div>
  );
}

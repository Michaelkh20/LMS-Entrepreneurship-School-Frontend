import { AttendanceTable } from '@/components/TableWithFilterNew';
import { LeftOutlined, PlusOutlined, RollbackOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import styles from '@/app/admin/main.module.css';
import { LessonNumber } from '@/types/common';

export default function AttendencePage({
  params: { lessonId },
}: {
  params: { lessonId: LessonNumber };
}) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Посещаемость</h2>
        <Button icon={<RollbackOutlined height={10} />} size="large">
          Назад
        </Button>
      </div>
      <AttendanceTable lessonId={lessonId} />
    </div>
  );
}

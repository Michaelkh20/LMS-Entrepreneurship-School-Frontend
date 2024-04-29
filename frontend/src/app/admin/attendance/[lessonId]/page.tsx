import { AttendanceTable } from '@/components/TableWithFilterNew';
import { RollbackOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import styles from '@/app/admin/main.module.css';

export default function AttendencePage({
  params: { lessonId },
}: {
  params: { lessonId: string };
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

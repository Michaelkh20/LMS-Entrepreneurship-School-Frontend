import { AttendanceTable } from '@/components/TableWithFilterNew';
import { RollbackOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function AttendencePage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <BasePageLayout
      header={
        <>
          <h2>Посещаемость</h2>
          {/* <Button icon={<RollbackOutlined height={10} />} size="large">
            Назад
          </Button> */}
        </>
      }
    >
      <AttendanceTable lessonId={id} />
    </BasePageLayout>
  );
}

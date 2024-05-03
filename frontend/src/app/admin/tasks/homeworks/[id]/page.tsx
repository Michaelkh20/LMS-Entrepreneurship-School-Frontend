'use client';

import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { HomeworkPage } from '@/components/Pages/HomeworkPage';

export default function HomeworkPageAdmin({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <BasePageLayout>
      <HomeworkPage hwId={id} />
    </BasePageLayout>
  );
}

'use client';

import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { ExamPage } from '@/components/Pages/ExamPage';

export default function ExamPageAdmin({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <BasePageLayout>
      <ExamPage examId={id} />
    </BasePageLayout>
  );
}

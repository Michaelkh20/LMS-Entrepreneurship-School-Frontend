'use client';

import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { TestPage } from '@/components/Pages/TestPage';

export default function TestPageAdmin({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <BasePageLayout>
      <TestPage testId={id} />
    </BasePageLayout>
  );
}

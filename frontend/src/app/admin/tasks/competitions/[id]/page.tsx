'use client';

import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { CompetitionPage } from '@/components/Pages/CompetitionPage';

export default function CompetitionPageAdmin({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <BasePageLayout>
      <CompetitionPage competitionId={id} />
    </BasePageLayout>
  );
}

'use client';
import { LearnerLotBuyTable } from '@/components/TableWithFilterNew/Tables/LearnerLotBuyTable';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function LotsBuyPage() {
  return (
    <BasePageLayout header={<h2>Лоты: купленные</h2>}>
      <LearnerLotBuyTable></LearnerLotBuyTable>
    </BasePageLayout>
  );
}

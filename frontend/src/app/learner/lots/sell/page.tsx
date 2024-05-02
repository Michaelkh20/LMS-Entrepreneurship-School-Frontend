'use client';
import { LearnerLotSellTable } from '@/components/TableWithFilterNew/Tables/LearnerLotSellTable';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function LotsBuyPage() {
  return (
    <BasePageLayout header={<h2>Лоты: продаю</h2>}>
      <LearnerLotSellTable />
    </BasePageLayout>
  );
}

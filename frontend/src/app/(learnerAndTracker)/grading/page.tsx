'use client';

import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { GradeTrackerTableWithFilter } from '@/components/TableWithFilterNew/Components/GradeTrackerTableWithFilter';
import React, { useState } from 'react';

export default function GradingPage() {
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);
  const [gradeId, setGradeId] = React.useState<string | null>(null);

  const handleOnRowClick = (id: string) => {
    setGradeId(id);
    setIsModalFormOpen(true);
  };

  const handleCancel = () => {
    setIsModalFormOpen(false);
  };
  return (
    <BasePageLayout header={<h2>Оценивание</h2>}>
      <GradeTrackerTableWithFilter
        onRow={(record, rowindex) => {
          return {
            onClick: () => handleOnRowClick(record.id),
          };
        }}
        modalProps={{
          gradeId,
          isOpen: isModalFormOpen,
          onCancel: handleCancel,
          onOk: handleCancel,
        }}
      />
    </BasePageLayout>
  );
}

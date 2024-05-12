'use client';
import React, { useState } from 'react';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { GradeAdminTableWithFilter } from '@/components/TableWithFilterNew/Components/GradeAdminTableWithFilter';

export default function GradesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gradeId, setGradeId] = React.useState<string | null>(null);

  const handleOnRowClick = (id: string) => {
    setGradeId(id);
    setIsModalOpen(true);
  };

  return (
    <BasePageLayout header={<h2>Оценки</h2>}>
      <GradeAdminTableWithFilter
        onRow={(record) => {
          return {
            onClick: () => handleOnRowClick(record.id),
          };
        }}
        modalProps={{
          gradeId,
          isOpen: isModalOpen,
          onCancel: () => setIsModalOpen(false),
          onOk: () => setIsModalOpen(false),
        }}
      />
    </BasePageLayout>
  );
}

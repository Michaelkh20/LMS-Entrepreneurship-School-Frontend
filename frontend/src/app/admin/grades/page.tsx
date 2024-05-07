'use client';
import React, { useState } from 'react';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { GradeAdminTableWithFilter } from '@/components/TableWithFilterNew/Components/GradeAdminTableWithFilter';
import GradeViewModal from '@/components/Modals/Grades/GradeViewModal';

export default function AttendenceLessonsPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [submitionId, setSubmitionId] = React.useState<string | null>(null);

  const handleOnRowClick = (id: string) => {
    setSubmitionId(id);
    setIsModalOpen(true);
  };
  return (
    <BasePageLayout header={<h2>Оценки</h2>}>
      <GradeAdminTableWithFilter
        onRow={(record, rowindex) => {
          return {
            onClick: () => handleOnRowClick(record.id),
          };
        }}
      />
      <GradeViewModal
        submissionId={submitionId}
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => setIsModalOpen(false)}
      />
    </BasePageLayout>
  );
}

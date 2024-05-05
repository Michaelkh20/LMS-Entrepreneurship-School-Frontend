'use client';

import React from 'react';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { SubmissionsTableWithFilter } from '@/components/TableWithFilterNew/Components/SubmissionsTableWithFilter';
import SubmisssionModal from '@/components/Modals/SubmissionModal';

export default function SubmissionsPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [submissionId, setSubmissionId] = React.useState<string | null>(null);

  return (
    <BasePageLayout
      header={
        <>
          <h2>Решения</h2>
        </>
      }
    >
      <SubmissionsTableWithFilter
        onRow={(record) => {
          return {
            onClick: () => {
              setSubmissionId(record.id);
              setIsModalOpen(true);
            },
          };
        }}
      />
      <SubmisssionModal
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => setIsModalOpen(false)}
        submissionId={submissionId}
      />
    </BasePageLayout>
  );
}

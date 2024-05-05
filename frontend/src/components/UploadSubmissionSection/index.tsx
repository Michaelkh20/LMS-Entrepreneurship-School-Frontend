import React from 'react';
import SimpleSection from '../SimpleSection';
import SubmissionLearnerForm from '../Forms/SubmissionLearner';

export default function UploadSubmissionSection({ hwId }: { hwId: string }) {
  return (
    <SimpleSection title="Загрузить файлы">
      <SubmissionLearnerForm hwId={hwId} />
    </SimpleSection>
  );
}

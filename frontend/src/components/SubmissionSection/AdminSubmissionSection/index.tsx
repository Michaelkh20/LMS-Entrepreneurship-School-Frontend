import React from 'react';
import SubmissionSection from '..';
import { useGetSubmissionByIdQuery } from '@/redux/services/api';
import LoadingErrorStub from '@/components/LoadingErrorStub';

type Props = {
  submissionId: string;
};

export default function AdminSubmissionSection({ submissionId }: Props) {
  const { data, isError, isLoading, isSuccess } =
    useGetSubmissionByIdQuery(submissionId);

  if (!isSuccess) {
    return <LoadingErrorStub isError={isError} isLoading={isLoading} />;
  }

  return <SubmissionSection submission={data} />;
}

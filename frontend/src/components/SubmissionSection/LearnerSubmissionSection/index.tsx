import React from 'react';
import SubmissionSection from '..';
import { useGetSubmissionByHWIdAndOwnerIdQuery } from '@/redux/services/api';
import { useAuth } from '@/redux/features/authSlice';
import LoadingErrorStub from '@/components/LoadingErrorStub';

type Props = {
  hwId: string;
};

export default function LearnerSubmissionSection({ hwId }: Props) {
  const [authState] = useAuth();
  const { data, isError, isLoading, isSuccess, error } =
    useGetSubmissionByHWIdAndOwnerIdQuery({
      hwId,
      ownerId: authState.userId!,
    });

  console.log(error);

  if (error && 'status' in error && error.status === 404) {
    return <SubmissionSection submission={undefined} />;
  }

  if (!isSuccess) {
    return <LoadingErrorStub isError={isError} isLoading={isLoading} />;
  }

  return <SubmissionSection submission={data} />;
}

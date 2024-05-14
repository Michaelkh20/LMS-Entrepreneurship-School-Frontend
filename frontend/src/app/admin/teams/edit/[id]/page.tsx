'use client';

import { useGetTeamByIdQuery } from '@/redux/services/api';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

import TeamForm from '@/components/Forms/Teams';
import LoadingErrorStub from '@/components/LoadingErrorStub';

export default function TeamPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data, isSuccess, isLoading, isError } = useGetTeamByIdQuery(id);

  return (
    <BasePageLayout>
      {isSuccess ? (
        <TeamForm data={data} />
      ) : (
        <LoadingErrorStub isError={isError} isLoading={isLoading} />
      )}
    </BasePageLayout>
  );
}

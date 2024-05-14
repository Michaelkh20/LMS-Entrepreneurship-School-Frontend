'use client';

import {
  useGetTeamByIdQuery,
  useUpdateTeamMutation,
} from '@/redux/services/api';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

import TeamForm from '@/components/Forms/Teams';
import LoadingErrorStub from '@/components/LoadingErrorStub';
import { ICreateUpdateTeamRequest } from '@/types/proto';

export default function TeamPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data, isSuccess, isLoading, isError } = useGetTeamByIdQuery(id);
  const [updateTeam, result] = useUpdateTeamMutation();

  const handleFinish = (values: ICreateUpdateTeamRequest) => {
    updateTeam({ id: data?.team?.id!, updateRequestBody: values });
  };

  return (
    <BasePageLayout>
      {isSuccess ? (
        <TeamForm
          type="edit"
          data={data}
          result={result}
          onFinish={handleFinish}
        />
      ) : (
        <LoadingErrorStub isError={isError} isLoading={isLoading} />
      )}
    </BasePageLayout>
  );
}

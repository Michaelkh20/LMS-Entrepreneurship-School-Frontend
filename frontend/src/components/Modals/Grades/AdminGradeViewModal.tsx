import React, { MouseEventHandler, useMemo } from 'react';
import { Modal } from 'antd';
import GradeViewModalContent from './GradeViewModalContent';
import { useGetGradesQuery } from '@/redux/services/api';
import LoadingErrorStub from '@/components/LoadingErrorStub';
import { skipToken } from '@reduxjs/toolkit/query';
import { GetGradesApiArg } from '@/types/api';
import { GradeFormValues } from '@/types/forms';

export type Props = {
  gradeId: string | null;
  isOpen: boolean;
  onCancel: MouseEventHandler;
  onOk: MouseEventHandler;
  requestParameters: GetGradesApiArg;
};

export default function AdminGradeViewModal({
  gradeId,
  isOpen,
  onCancel,
  onOk,
  requestParameters,
}: Props) {
  const { grade, isLoading, isSuccess, isError } = useGetGradesQuery(
    gradeId && isOpen ? requestParameters : skipToken,
    {
      selectFromResult: ({ data, isLoading, isSuccess, isError }) => ({
        grade: data?.grades.find((grade) => grade.id === gradeId),
        isLoading,
        isSuccess,
        isError,
      }),
    }
  );

  console.log('Select from result', grade, isLoading, isSuccess, isError);

  const content = useMemo(() => {
    if (isSuccess && grade) {
      let currentGrade: GradeFormValues | undefined = undefined;

      if (grade.adminGrade) {
        currentGrade = {
          grade: grade.adminGrade,
          comment: grade.adminComment,
        };
      }

      return (
        <GradeViewModalContent grade={grade} currentGrade={currentGrade} />
      );
    } else {
      return <LoadingErrorStub isLoading={isLoading} isError={isError} />;
    }
  }, [grade, isError, isLoading, isSuccess]);

  return (
    <Modal
      title={`Оценка`}
      open={isOpen}
      onCancel={onCancel}
      footer={null}
      centered
    >
      {content}
    </Modal>
  );
}

import React, { MouseEventHandler, useMemo } from 'react';
import { Modal } from 'antd';
import GradeViewModalContent from './GradeViewModalContent';
import { useGetGradesQuery } from '@/redux/services/api';
import LoadingErrorStub from '@/components/LoadingErrorStub';
import { useAuth } from '@/redux/features/authSlice';
import { GetGradesApiArg } from '@/types/api';
import { skipToken } from '@reduxjs/toolkit/query';
import { GradeFormValues } from '@/types/forms';

export type Props = {
  gradeId: string | null;
  isOpen: boolean;
  onCancel: MouseEventHandler;
  onOk: MouseEventHandler;
  requestParameters: GetGradesApiArg;
};

export default function TrackerGradeViewModal({
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

  const [authState] = useAuth();

  const content = useMemo(() => {
    if (isSuccess && grade) {
      const currTrackerGrade = grade.trackerGrades.find(
        (trackerGrade) => trackerGrade.tracker.id === authState.userId
      );
      let currentGrade: GradeFormValues | undefined = undefined;

      if (currTrackerGrade) {
        currentGrade = {
          grade: currTrackerGrade.grade,
          comment: currTrackerGrade.comment,
        };
      }

      return (
        <GradeViewModalContent grade={grade} currentGrade={currentGrade} />
      );
    } else {
      return <LoadingErrorStub isLoading={isLoading} isError={isError} />;
    }
  }, [authState.userId, grade, isError, isLoading, isSuccess]);

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

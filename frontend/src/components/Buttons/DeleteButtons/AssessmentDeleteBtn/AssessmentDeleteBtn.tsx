import React, { useEffect } from 'react';
import BaseDeleteButton from '../BaseDeleteButton';
import { useDeleteAssessmentByIdMutation } from '@/redux/services/api';
import { message } from 'antd';
import { useRouter } from 'next/navigation';

export default function AssessmentDeleteBtn({ id }: { id: string }) {
  const router = useRouter();
  const [deleteAssessment, result] = useDeleteAssessmentByIdMutation();

  useEffect(() => {
    if (result.isSuccess) {
      message.success('Оценка успешно удалена');
      router.push('/admin/users');
    }

    if (result.isError) {
      message.error('Ошибка при удалении оценки');
    }
  }, [result, router]);

  function onConfirm() {
    deleteAssessment(id);
  }

  return (
    <BaseDeleteButton
      title="Удалить оценку?"
      description="Вы уверены, что хотите удалить оценку?"
      isLoading={result.isLoading}
      onConfirm={onConfirm}
    />
  );
}

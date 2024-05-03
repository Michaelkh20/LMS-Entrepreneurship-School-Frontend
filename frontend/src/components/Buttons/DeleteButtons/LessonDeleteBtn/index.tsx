'use client';

import React, { useEffect } from 'react';
import BaseDeleteButton from '../BaseDeleteButton';
import { useDeleteLessonByIdMutation } from '@/redux/services/api';
import { message } from 'antd';
import { useRouter } from 'next/navigation';

export default function LessonDeleteBtn({ id }: { id: string }) {
  const router = useRouter();
  const [deleteLesson, result] = useDeleteLessonByIdMutation();

  useEffect(() => {
    if (result.isSuccess) {
      message.success('Урок успешно удалён');
      router.push('/admin/lessons');
    }

    if (result.isError) {
      message.error('Ошибка при удалении урока');
    }
  }, [result, router]);

  function onConfirm() {
    deleteLesson(id);
  }

  return (
    <BaseDeleteButton
      title="Удалить урок?"
      description="Вы уверены, что хотите удалить урок?"
      isLoading={result.isLoading}
      onConfirm={onConfirm}
    />
  );
}

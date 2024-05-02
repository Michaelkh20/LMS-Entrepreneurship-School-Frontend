import React from 'react';
import LoadingErrorStub from '@/components/LoadingErrorStub';
import LessonForm from '@/components/Forms/Lessons';
import {
  useGetLessonByIdQuery,
  useUpdateLessonMutation,
} from '@/redux/services/api';
import { ICreateUpdateLessonRequest } from '@/types/proto';

import styles from './page.module.css';

export default function EditLessonPage({
  params: { lessonId },
}: {
  params: { lessonId: string };
}) {
  const { data, isSuccess, isError, isLoading } =
    useGetLessonByIdQuery(lessonId);
  const [updateLesson, result] = useUpdateLessonMutation();

  const handleFinish = (values: ICreateUpdateLessonRequest) => {
    updateLesson({ id: lessonId, updateRequestBody: values });
  };

  if (!isSuccess) {
    return <LoadingErrorStub isError={isError} isLoading={isLoading} />;
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Изменить урок</h1>
      <LessonForm
        type="edit"
        onFinish={handleFinish}
        result={result}
        lesson={data}
      />
    </div>
  );
}

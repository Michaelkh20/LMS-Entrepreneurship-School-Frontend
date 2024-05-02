'use client';

import React from 'react';
import LessonForm from '@/components/Forms/Lessons';

import styles from './page.module.css';
import { useCreateLessonMutation } from '@/redux/services/api';
import { ICreateUpdateLessonRequest } from '@/types/proto';

export default function CreateLessonPage() {
  const [createLesson, result] = useCreateLessonMutation();

  const handleFinish = (values: ICreateUpdateLessonRequest) => {
    createLesson(values);
  };
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Создать урок</h1>
      <LessonForm type="create" onFinish={handleFinish} result={result} />
    </div>
  );
}

'use client';

import styles from './lessons.module.css';
import { LessonPage } from '@/components/Pages/LessonPage/LessonPage';

export default function LessonPageAdmin({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className={styles.main__container}>
      <LessonPage params={{ id: id }}></LessonPage>
    </div>
  );
}

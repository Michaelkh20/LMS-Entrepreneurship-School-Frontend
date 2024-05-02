'use client';

import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import styles from './lessons.module.css';
import { LessonPage } from '@/components/Pages/LessonPage/LessonPage';

export default function LessonPageAdmin({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <BasePageLayout>
      <LessonPage params={{ id: id }}></LessonPage>
    </BasePageLayout>
  );
}

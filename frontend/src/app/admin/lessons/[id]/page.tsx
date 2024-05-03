'use client';
import { LessonPage } from '@/components/Pages/LessonPage/LessonPage';

export default function LessonPageAdmin({
  params: { id },
}: {
  params: { id: string };
}) {
  return <LessonPage params={{ id: id }}></LessonPage>;
}

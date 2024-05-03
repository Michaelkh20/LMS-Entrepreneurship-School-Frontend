import { LessonPage } from '@/components/Pages/LessonPage';

export default function LessonPageLearner({
  params: { id },
}: {
  params: { id: string };
}) {
  return <LessonPage params={{ id: id }} />;
}

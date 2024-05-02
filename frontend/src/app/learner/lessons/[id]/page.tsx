import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { LessonPage } from '@/components/Pages/LessonPage/LessonPage';

export default function LessonPageLearner({
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

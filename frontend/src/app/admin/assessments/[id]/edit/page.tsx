import EditAssessmentForm from '@/components/Forms/Assessments/EditAssessmentForm';
import styles from './page.module.css';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function Page({ params: { id } }: { params: { id: number } }) {
  return (
    <BasePageLayout header={<h1>РЕДАКТИРОВАНИЕ ОЦЕНКИ</h1>}>
      <EditAssessmentForm id={id} />
    </BasePageLayout>
  );
}

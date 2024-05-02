import style from './page.module.css';
import CreateAssessmentForm from '@/components/Forms/Assessments/CreateAssessmentForm';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function CreateAccountPage() {
  return (
    <BasePageLayout header={<h2>СОЗДАНИЕ ОЦЕНКИ</h2>}>
      <CreateAssessmentForm />
    </BasePageLayout>
  );
}

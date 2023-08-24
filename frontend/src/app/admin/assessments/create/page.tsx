import { Jura } from 'next/font/google';
import style from './page.module.css';
import CreateAssessmentForm from '@/components/Forms/Assessments/CreateAssessmentForm';

const jura = Jura({
  subsets: ['cyrillic'],
});

export default function CreateAccountPage() {
  return (
    <>
      <h1 className={`${style.title} ${jura.className}`}>СОЗДАНИЕ ОЦЕНКИ</h1>
      <CreateAssessmentForm />
    </>
  );
}

import { Jura } from 'next/font/google';
import EditAssessmentForm from '@/components/Forms/Assessments/EditAssessmentForm';
import styles from './page.module.css';

const jura = Jura({
  subsets: ['cyrillic'],
});

export default function Page({ params: { id } }: { params: { id: number } }) {
  return (
    <>
      <h1 className={`${styles.title} ${jura.className}`}>
        РЕДАКТИРОВАНИЕ ОЦЕНКИ
      </h1>
      <EditAssessmentForm id={id} />
    </>
  );
}

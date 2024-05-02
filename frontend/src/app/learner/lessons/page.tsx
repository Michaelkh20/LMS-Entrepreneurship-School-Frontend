'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LessonSnippet } from '@proto/lessons/lessons_api';

import styles from './lessons.module.css';

import { useGetLessonsSnippetsQuery } from '@/redux/services/api';
import { useGetExamSnippetsQuery } from '@/redux/services/api';
import { useGetCompetitionSnippetsQuery } from '@/redux/services/api';
import { ExamSnippet } from '@proto/assignments/exam_api';
import { CompetitionSnippet } from '@proto/assignments/competition_api';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { competitionsMockData, examsMockData, lessonsMockData } from './mock';

export default function LessonsPage() {
  const { data: lessonsSnippets } = useGetLessonsSnippetsQuery();
  const { data: examsSnippets } = useGetExamSnippetsQuery();
  const { data: competitionsSnippets } = useGetCompetitionSnippetsQuery();

  // lessonsSnippets = lessonsMockData;
  // examsSnippets = examsMockData;
  // competitionsSnippets = competitionsMockData;

  return (
    <BasePageLayout>
      <h2 className={styles.main__header}>Уроки </h2>
      <div className={styles.lessons_container}>
        {lessonsSnippets?.map((lesson) => {
          return (
            <LessonCard
              key={lesson.id}
              to={`lessons/${lesson.id}`}
              lessonData={lesson}
            />
          );
        }) || (
          <div style={{ paddingLeft: '1rem' }}>Уроки пока отсутствуют 🧑‍🎓</div>
        )}
      </div>
      <h2 className={styles.main__header}>Экзамены</h2>
      <div className={styles.lessons_container}>
        {examsSnippets?.map((exam) => {
          return (
            <ExamCard key={exam.id} to={`lessons/${exam.id}`} examData={exam} />
          );
        }) || (
          <div style={{ paddingLeft: '1rem' }}>Экзаменов нет, выдыхаем 🤩</div>
        )}
      </div>
      <h2 className={styles.main__header}>Конкурсы</h2>
      <div className={styles.lessons_container}>
        {competitionsSnippets?.map((competition) => {
          return (
            <CompetitionCard
              key={competition.id}
              to={`lessons/${competition.id}`}
              competitionData={competition}
            />
          );
        }) || (
          <div style={{ paddingLeft: '1rem' }}>Конкурсы скоро начнутся...</div>
        )}
      </div>
    </BasePageLayout>
  );
}

const LessonCard = ({
  lessonData,
  to,
}: {
  lessonData: LessonSnippet;
  to: string;
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(to);
      }}
      className={styles.lessonCard__wrapper}
    >
      <p className={styles.lessonCard__header}>
        Урок {lessonData.lessonNumber}
      </p>
      <p className={styles.lessonCard__body}>{lessonData.title}</p>
    </div>
  );
};

const ExamCard = ({ examData, to }: { examData: ExamSnippet; to: string }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(to);
      }}
      className={styles.lessonCard__wrapper}
    >
      <p className={styles.lessonCard__header}>{examData.title}</p>
    </div>
  );
};

const CompetitionCard = ({
  competitionData,
  to,
}: {
  competitionData: CompetitionSnippet;
  to: string;
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(to);
      }}
      className={styles.lessonCard__wrapper}
    >
      <p className={styles.lessonCard__header}>{competitionData.title}</p>
    </div>
  );
};

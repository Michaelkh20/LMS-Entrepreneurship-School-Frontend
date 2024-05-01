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

export default function LessonsPage() {
  const { data: lessonsSnippets } = useGetLessonsSnippetsQuery();
  const { data: examsSnippets } = useGetExamSnippetsQuery();
  const { data: competitionsSnippets } = useGetCompetitionSnippetsQuery();

  return (
    <div className={styles.main__container}>
      <h1 className={styles.main__header}>Уроки</h1>
      <div className={styles.lessons_container}>
        {lessonsSnippets?.map((lesson) => {
          {
            /* {lessonsMockData?.map((lesson) => { */
          }
          return (
            <LessonCard
              key={lesson.id}
              to={`lessons/${lesson.id}`}
              lessonData={lesson}
            />
          );
        })}
      </div>
      <h1 className={styles.main__header}>Экзамены</h1>
      <div className={styles.lessons_container}>
        {examsSnippets?.map((exam) => {
          {
            /* {examsMockData?.map((exam) => { */
          }
          return (
            <ExamCard key={exam.id} to={`lessons/${exam.id}`} examData={exam} />
          );
        })}
      </div>
      <h1 className={styles.main__header}>Конкурсы</h1>
      <div className={styles.lessons_container}>
        {competitionsSnippets?.map((competition) => {
          {
            /* {competitionsMockData.map((competition) => { */
          }
          return (
            <CompetitionCard
              key={competition.id}
              to={`lessons/${competition.id}`}
              competitionData={competition}
            />
          );
        })}
      </div>
    </div>
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

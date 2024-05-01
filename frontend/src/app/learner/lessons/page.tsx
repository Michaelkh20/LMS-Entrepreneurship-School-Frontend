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

// type lessonItemList = {
//   id: number | string;
//   lessonNumber: number;
//   title: string;
// };

export default function LessonsPage() {
  const { data: lessonsSnippets } = useGetLessonsSnippetsQuery();
  const { data: examsSnippets } = useGetExamSnippetsQuery();
  const { data: competitionsSnippets } = useGetCompetitionSnippetsQuery();

  const examsMockData: ExamSnippet[] = [
    {
      id: 'e1',
      title: 'Экзамен зима',
      deadlineDate: undefined,
    },
    {
      id: 'e2',
      title: 'Экзамен лето',
      deadlineDate: undefined,
    },
  ];

  const competitionsMockData: CompetitionSnippet[] = [
    {
      id: 'с1',
      title: 'Конкурс зима',
      deadlineDate: undefined,
    },
    {
      id: 'с2',
      title: 'Конкурс лето',
      deadlineDate: undefined,
    },
  ];

  const lessonsMockData: LessonSnippet[] = [
    {
      id: '1',
      lessonNumber: 1,
      title: 'Генерация идей',
      publishDate: new Date(),
    },
    {
      id: '2',
      lessonNumber: 2,
      title: 'Ошибки при выводе продуктов на рынок',
      publishDate: new Date(),
    },
    {
      id: '3',
      lessonNumber: 3,
      title: 'Модели монетизации и ценообразование',
      publishDate: new Date(),
    },
    {
      id: '4',
      lessonNumber: 4,
      title: 'Модели монетизации и ценообразование',
      publishDate: undefined,
    },
    {
      id: '5',
      lessonNumber: 5,
      title: 'Модели монетизации и ценообразование',
      publishDate: undefined,
    },
    {
      id: '6',
      lessonNumber: 6,
      title: 'Модели монетизации и ценообразование',
      publishDate: undefined,
    },
    {
      id: '7',
      lessonNumber: 7,
      title: 'Модели монетизации и ценообразование',
      publishDate: undefined,
    },
    {
      id: '8',
      lessonNumber: 8,
      title: 'Модели монетизации и ценообразование',
      publishDate: undefined,
    },
    {
      id: '9',
      lessonNumber: 9,
      title: 'Модели монетизации и ценообразование',
      publishDate: undefined,
    },
  ];
  return (
    <div className={styles.main__container}>
      <h1 className={styles.main__header}>Уроки</h1>
      <div className={styles.lessons_container}>
        {/* {lessonsSnippets?.map((lesson) => { */}
        {lessonsMockData?.map((lesson) => {
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
        {/* {examsSnippets?.map((exam) => { */}
        {examsMockData?.map((exam) => {
          return (
            <ExamCard key={exam.id} to={`lessons/${exam.id}`} examData={exam} />
          );
        })}
      </div>
      <h1 className={styles.main__header}>Конкурсы</h1>
      <div className={styles.lessons_container}>
        {/* {competitionsSnippets.map((lesson) => { */}
        {competitionsMockData.map((competition) => {
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

'use client';

import styles from './lessons.module.css';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

type lessonItemList = {
  id: number | string;
  lessonNumber: number;
  lessonTheme: string;
};

export default function LessonsPage() {
  const lessonsData: lessonItemList[] = [
    {
      id: 1,
      lessonNumber: 1,
      lessonTheme: 'Генерация идей',
    },
    {
      id: 2,
      lessonNumber: 2,
      lessonTheme: 'Ошибки при выводе продуктов на рынок',
    },
    {
      id: 3,
      lessonNumber: 3,
      lessonTheme: 'Модели монетизации и ценообразование',
    },
    {
      id: 4,
      lessonNumber: 4,
      lessonTheme: 'Модели монетизации и ценообразование',
    },
    {
      id: 5,
      lessonNumber: 5,
      lessonTheme: 'Модели монетизации и ценообразование',
    },
    {
      id: 6,
      lessonNumber: 6,
      lessonTheme: 'Модели монетизации и ценообразование',
    },
    {
      id: 7,
      lessonNumber: 7,
      lessonTheme: 'Модели монетизации и ценообразование',
    },
    {
      id: 8,
      lessonNumber: 8,
      lessonTheme: 'Модели монетизации и ценообразование',
    },
    {
      id: 9,
      lessonNumber: 9,
      lessonTheme: 'Модели монетизации и ценообразование',
    },
  ];
  return (
    <div className={styles.main__container}>
      <h1 className={styles.main__header}>Уроки</h1>
      <div className={styles.lessons_container}>
        {lessonsData.map((lesson) => {
          return (
            <LessonCard
              key={lesson.id}
              to={`lessons/${lesson.id}`}
              lessonData={lesson}
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
  lessonData: lessonItemList;
  to: string;
}) => {
  const router = useRouter();
  return (
    // <Link href={to} className={styles.lessonCard__wrapper}>
    //   <p className={styles.lessonCard__header}>
    //     Урок {lessonData.lessonNumber}
    //   </p>
    //   <p className={styles.lessonCard__body}>{lessonData.lessonTheme}</p>
    // </Link>
    <div
      onClick={() => {
        router.push(to);
      }}
      className={styles.lessonCard__wrapper}
    >
      <p className={styles.lessonCard__header}>
        Урок {lessonData.lessonNumber}
      </p>
      <p className={styles.lessonCard__body}>{lessonData.lessonTheme}</p>
    </div>
  );
};

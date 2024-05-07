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
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { ReactNode, useState } from 'react';
import React from 'react';
import { ExamCompetitionsViewModal } from '@/components/Modals/ExamCompetitionsViewModal';

export default function LessonsPage() {
  const { data: lessonsSnippets } = useGetLessonsSnippetsQuery();
  const { data: examsSnippets } = useGetExamSnippetsQuery();
  const { data: competitionsSnippets } = useGetCompetitionSnippetsQuery();

  // lessonsSnippets = lessonsMockData;
  // examsSnippets = examsMockData;
  // competitionsSnippets = competitionsMockData;

  //TODO: модалки для конкурсов и экзаменов
  const [isExamCompetitionModalOpen, setExamCompetitionModalOpen] =
    useState(false);
  const [examId, setExamId] = React.useState<string | null>(null);
  const [competitionId, setCompetitionId] = React.useState<string | null>(null);

  const handleOnRowClick = (
    examId: string | null,
    competitionId: string | null
  ) => {
    {
      examId
        ? () => {
            setCompetitionId(null);
            setExamId(examId);
          }
        : () => {
            setExamId(null);
            setCompetitionId(competitionId);
          };
    }
    setExamCompetitionModalOpen(true);
  };

  return (
    <BasePageLayout>
      <div className={styles.mainSectionContainer}>
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
      </div>

      <div className={styles.mainSectionContainer}>
        <h2 className={styles.main__header}>Экзамены</h2>
        <div className={styles.lessons_container}>
          {examsSnippets?.map((exam) => {
            return (
              <ExamCard
                key={exam.id}
                onClick={() => handleOnRowClick(examId, null)}
                examData={exam}
              />
            );
          }) || (
            <div style={{ paddingLeft: '1rem' }}>
              Экзаменов нет, выдыхаем 🤩
            </div>
          )}
        </div>
      </div>

      <div className={styles.mainSectionContainer}>
        <h2 className={styles.main__header}>Конкурсы</h2>
        <div className={styles.lessons_container}>
          {competitionsSnippets?.map((competition) => {
            return (
              <CompetitionCard
                key={competition.id}
                competitionData={competition}
                onClick={() => handleOnRowClick(examId, null)}
              />
            );
          }) || (
            <div style={{ paddingLeft: '1rem' }}>
              Конкурсы скоро начнутся...
            </div>
          )}
        </div>
      </div>
      <ExamCompetitionsViewModal
        isOpen={isExamCompetitionModalOpen}
        examId={examId}
        competitionId={competitionId}
        onExit={() => setExamCompetitionModalOpen(false)}
      />
    </BasePageLayout>
  );
}

const CircleTag = ({ icon, text }: { icon: ReactNode; text: string }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div
        style={{
          border: '1px solid #d9d9d9',
          // borderRadius: '16px',
          borderRadius: 16,
          padding: '4px 8px',
          display: 'flex',
          gap: 4,
        }}
      >
        {icon}
        {text}
      </div>
    </div>
  );
};

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
      <CircleTag
        icon={<CalendarOutlined />}
        text={lessonData.publishDate?.toLocaleDateString('ru-RU') || ''}
      />
    </div>
  );
};

const ExamCard = ({
  examData,
  onClick,
}: {
  examData: ExamSnippet;
  onClick?: () => void;
}) => {
  return (
    <div onClick={onClick} className={styles.lessonCard__wrapper}>
      <p className={styles.lessonCard__header}>{examData.title}</p>
      <p  className={styles.lessonCard__body}></p>
      <CircleTag
        icon={<CalendarOutlined />}
        text={examData.deadlineDate?.toLocaleDateString('ru-RU') || ''}
      />
    </div>
  );
};

const CompetitionCard = ({
  competitionData,
  onClick,
}: {
  competitionData: CompetitionSnippet;
  onClick?: () => void;
}) => {
  const router = useRouter();
  return (
    <div onClick={onClick} className={styles.lessonCard__wrapper}>
      <p className={styles.lessonCard__header}>{competitionData.title}</p>
      <p  className={styles.lessonCard__body}></p>
      <CircleTag
        icon={<CalendarOutlined />}
        text={competitionData.deadlineDate?.toLocaleDateString('ru-RU') || ''}
      />
    </div>
  );
};

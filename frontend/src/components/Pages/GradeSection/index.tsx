import React from 'react';
import SimpleSection from '@/components/SimpleSection';
import { Grade } from '@/types/api';

type Props = {
  grade: Grade;
};

export default function GradeSection({ grade }: Props) {
  return (
    <>
      <SimpleSection title="Финальная оценка">
        {grade.adminGrade ? (
          <>
            <p>{grade.adminComment || '-'}</p>
            <p>Оценка: {grade.adminGrade}</p>
          </>
        ) : (
          <>Не оценено</>
        )}
      </SimpleSection>
      {grade.trackerGrades.length > 0 && (
        <h3 style={{ paddingTop: 8 }}>Комментарии трекеров</h3>
      )}
      {grade.trackerGrades.map((trackerGrade) => {
        return (
          <SimpleSection
            key={trackerGrade.id}
            title={`${trackerGrade.tracker.surname} ${trackerGrade.tracker.name}`}
          >
            <p>{trackerGrade.comment}</p>
            <p>Оценка: {trackerGrade.grade}</p>
          </SimpleSection>
        );
      })}
    </>
  );
}

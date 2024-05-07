import React from 'react';
import { useGetSubmissionByIdQuery } from '@/redux/services/api';
import LoadingErrorStub from '@/components/LoadingErrorStub';
import SimpleSection from '@/components/SimpleSection';

type Props = {
  submissionId: string;
};

export default function GradeSection({ submissionId }: Props) {
  //TODO: useGrade
  const { data, isError, isLoading, isSuccess } =
    useGetSubmissionByIdQuery(submissionId);

  const dataFuture: {
    trackerGrades: {
      trackerId: string;
      trackerName: string;
      trackerSurname: string;
      comment: string;
      grade: string;
    }[];
    finalGrade?: { comment?: string; grade?: string };
  } = {
    trackerGrades: [
      {
        trackerId: 'tr1',
        trackerName: 'Трекер',
        trackerSurname: 'Трекерович',
        comment:
          'Консультации по подготовке заявки для участия в олимпиаде/конкурсе. Консультации по подготовке заявки для участия в олимпиаде/конкурсе',
        grade: '7',
      },
      {
        trackerId: 'tr2',
        trackerName: 'Трекер',
        trackerSurname: 'Трекерович',
        comment:
          'Консультации по подготовке заявки для участия в олимпиаде/конкурсе',
        grade: '9',
      },
    ],
    finalGrade: undefined
    // finalGrade: {
    //   //   comment:
    //   //     '2. Длительность видео больше одной минуты (за это снимается 1 балл); 3. Несоблюдение дедлайна Каждый просроченный день -1 балл;',
    //   //   grade: '8',
    // },
  };

  if (!isSuccess) {
    return <LoadingErrorStub isError={isError} isLoading={isLoading} />;
  }

  return (
    <>
      <SimpleSection title="Финальная оценка">
        {dataFuture?.finalGrade ? (
          <>
            <p>{dataFuture?.finalGrade?.comment}</p>
            <p>Оценка: {dataFuture?.finalGrade?.grade}</p>
          </>
        ) : (
          <>Не оценено</>
        )}
      </SimpleSection>
      {dataFuture?.trackerGrades.length > 0 && (
        <h3 style={{ paddingTop: 8 }}>Комментарии трекеров</h3>
      )}
      {dataFuture?.trackerGrades?.map((trackerGrade) => {
        return (
          <SimpleSection
            key={trackerGrade.trackerId}
            title={`${trackerGrade.trackerSurname} ${trackerGrade.trackerName}`}
          >
            <p>{trackerGrade.comment}</p>
            <p>Оценка: {trackerGrade.grade}</p>
          </SimpleSection>
        );
      })}
    </>
  );
}

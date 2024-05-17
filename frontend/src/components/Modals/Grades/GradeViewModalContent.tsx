import React, { MouseEventHandler } from 'react';
import { Divider, Modal } from 'antd';
import AdminSubmissionSection from '@/components/SubmissionSection/AdminSubmissionSection';
import { ModalProperty } from '../Components/ModalProperty';
import GradeSection from '@/components/Pages/GradeSection';
import { ModalContainer } from '../Components/ModalContainer';
import { Grade } from '@/types/api';
import { getTitleFromTask } from '@/util/getTaskTitleFromGrade';
import GradeForm from '@/components/Forms/Grades';
import { GradeFormValues } from '@/types/forms';
import SubmissionSection from '@/components/SubmissionSection';

type Props = {
  grade: Grade;
  currentGrade?: GradeFormValues;
};

export default function GradeViewModalContent({ grade, currentGrade }: Props) {
  return (
    <>
      <ModalContainer>
        <ModalProperty
          title="Статус"
          value={`${currentGrade ? 'Оценено' : 'Не оценено'}`}
        />
        <ModalProperty
          title="Название ДЗ"
          value={getTitleFromTask(grade.task)}
        />
        <ModalProperty
          title="Ученик"
          value={`${grade.gradeOwner.surname} ${grade.gradeOwner.name}`}
        />
      </ModalContainer>

      <Divider style={{ margin: '8px 0' }} />

      {grade.submissionForGrading && (
        <>
          {/* <AdminSubmissionSection
            submissionId={grade.submissionForGrading.id}
          /> */}
          <SubmissionSection submission={grade.submissionForGrading} />
          <Divider style={{ margin: '8px 0' }} />
        </>
      )}

      <GradeSection grade={grade} />

      <Divider style={{ margin: '8px 0' }} />

      <GradeForm gradeId={grade.id} initialVlaues={currentGrade} />
    </>
  );
}

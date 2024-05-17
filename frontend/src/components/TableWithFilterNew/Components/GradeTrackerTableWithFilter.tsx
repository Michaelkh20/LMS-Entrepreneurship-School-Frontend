'use client';

import {
  IsGradedFormItem,
  TaskTypeFormItem,
} from '@/components/Forms/FormItems/Filters';

import { useState, useMemo } from 'react';

import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { ColumnsType, TableProps } from 'antd/es/table';
import type {
  GetGradesApiArg,
  Grade,
  HomeworkSnippet,
  Submission,
} from '@/types/api';
import { useGetGradesQuery } from '@/redux/services/api';
import { getTitleFromTask } from '@/util/getTaskTitleFromGrade';
import { useAuth } from '@/redux/features/authSlice';
import { TaskSelectionFormItem } from '@/components/Forms/FormItems/Selection/TaskSelectionFormItem';
import { LearnerSelectionFormItem } from '@/components/Forms/FormItems/Selection/LearnerSelectionFormItem';
import { TeamSelectionFormItem } from '@/components/Forms/FormItems/Selection/TeamSelectionFormItem';
import type { Props as ModalProps } from '@/components/Modals/Grades/TrackerGradeViewModal';
import TrackerGradeViewModal from '@/components/Modals/Grades/TrackerGradeViewModal';

type GradeTrackerColumnsDataType = Grade;

type Props = {
  onRow?: TableProps['onRow'];
  modalProps: Omit<ModalProps, 'requestParameters'>;
};

export function GradeTrackerTableWithFilter({ onRow, modalProps }: Props) {
  const [formData, setFormData] = useState<GetGradesApiArg>({
    page: 1,
    size: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);

  const { data, isLoading, isError, isFetching } =
    useGetGradesQuery(dataForReq);

  const [authState] = useAuth();

  const colums = useMemo<ColumnsType<GradeTrackerColumnsDataType>>(
    () => [
      {
        title: 'Задание',
        dataIndex: 'assignment',
        key: 'assignment',
        render: (_value, record, _index) => {
          return `${getTitleFromTask(record.task)}`;
        },
      },
      {
        title: 'Ученик',
        dataIndex: 'learner',
        key: 'learner',
        sorter: true,
        render: (_value, record, _index) => {
          return `${record.gradeOwner.surname} ${record.gradeOwner.name}`;
        },
      },
      {
        title: 'Статус',
        dataIndex: 'gradeStatus',
        key: 'gradeStatus',
        render: (_value, record, _index) => {
          return `${
            record.trackerGrades.some(
              (trackerGrade) => trackerGrade.tracker.id === authState.userId
            )
              ? 'Проверено'
              : 'Не проверено'
          }`;
        },
      },
      {
        title: 'Оценка',
        dataIndex: 'grade',
        key: 'grade',
        render: (_value, record, _index) => {
          return `${
            record.trackerGrades.find(
              (trackerGrade) => trackerGrade.tracker.id === authState.userId
            )?.grade || '-'
          }`;
        },
      },
    ],
    [authState.userId]
  );

  return (
    <>
      <BasicTableWithFilter
        totalNumber={data?.page?.totalElements}
        filterFormItems={
          <>
            <TaskSelectionFormItem
              name="taskId"
              type="filter"
              placeholder={'Задание'}
            />
            <LearnerSelectionFormItem
              name="ownerId"
              type="filter"
              placeholder={'Ученик'}
            />
            <TeamSelectionFormItem
              name="teamId"
              type="filter"
              placeholder={'Команда'}
            />
            <IsGradedFormItem name="graded" />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: colums,
          pagination: { total: data?.page.totalElements },
          dataSource: data?.grades,
          rowKey: 'id',
          onRow: onRow,
        }}
        formData={formData}
        setFormData={setFormData}
        setDataForReq={setDataForReq}
      />
      <TrackerGradeViewModal {...modalProps} requestParameters={dataForReq} />
    </>
  );
}

'use client';

import {
  IsGradedFormItem,
  TaskTypeFormItem,
} from '@/components/Forms/FormItems/Filters';

import { useState } from 'react';

import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { ColumnsType, TableProps } from 'antd/es/table';
import type { GetGradesApiArg, Grade, IGradesList } from '@/types/api';
import { useGetGradesQuery } from '@/redux/services/api';
import { taskTypeToString } from '@/util/enumsToString';
import { LearnerSelectionFormItem } from '@/components/Forms/FormItems/Selection/LearnerSelectionFormItem';
import { TeamSelectionFormItem } from '@/components/Forms/FormItems/Selection/TeamSelectionFormItem';
import { TaskSelectionFormItem } from '@/components/Forms/FormItems/Selection/TaskSelectionFormItem';
import { getTitleFromTask } from '@/util/getTaskTitleFromGrade';
import AdminGradeViewModal from '@/components/Modals/Grades/AdminGradeViewModal';
import type { Props as ModalProps } from '@/components/Modals/Grades/AdminGradeViewModal';

type GradeAdminColumnsDataType = Grade;

const GradeAdminColumns: ColumnsType<GradeAdminColumnsDataType> = [
  {
    title: 'Задание',
    dataIndex: 'assignment',
    key: 'assignment',
    render: (_value, record, _index) => {
      return `${getTitleFromTask(record.task)}`;
    },
  },
  {
    title: 'Тип задания',
    dataIndex: 'assignment',
    key: 'assignment',
    render: (_value, record, _index) => {
      return `${taskTypeToString(record.task.$case)}`;
    },
    width: 150,
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
      return `${record.adminGrade ? 'Проверено' : 'Не проверено'}`;
    },
  },
  {
    title: 'Оценка',
    dataIndex: 'grade',
    key: 'grade',
    render: (_value, record, _index) => {
      return `${record.adminGrade || '-'}`;
    },
    width: 50,
  },
];

type Props = {
  onRow?: TableProps['onRow'];
  modalProps: Omit<ModalProps, 'requestParameters'>;
};

const mockData: IGradesList = {
  page: {
    totalPages: 0,
    totalElements: 0,
  },
  grades: [
    {
      id: '',
      gradeOwner: {
        id: '',
        name: 'Михаил',
        surname: 'Хооллгм',
        patronymic: undefined,
      },
      task: {
        $case: 'homework',
        homework: {
          id: '1',
          lesson: {
            id: '11',
            title: 'Урок №1, Введение в предпринимательство',
            lessonNumber: 1,
            publishDate: new Date(2024, 4, 15),
          },
          title: 'Домашнее задание №1',
          deadlineDate: new Date(2024, 4, 23),
        },
      },
      submissionForGrading: {
        homework: {
          id: '',
          lesson: {
            id: '',
            title: '',
            lessonNumber: 0,
            publishDate: new Date(2024, 4, 15),
          },
          title: '',
          deadlineDate: new Date(2024, 4, 20),
        },
        id: '',
        owner: {
          id: '',
          name: '',
          surname: '',
          patronymic: undefined,
        },
        payload: {
          textAnswer: '',
          attachmentUrls: [],
        },
        publishedAt: new Date(2024, 4, 15),
        publisher: {
          id: '',
          name: 'Михаил',
          surname: 'Хооллгм',
          patronymic: undefined,
        },
        team: undefined,
      },
      adminGrade: undefined,
      adminComment: undefined,
      trackerGrades: [],
    },
    {
      id: '',
      gradeOwner: {
        id: '',
        name: 'Михаил',
        surname: 'Хооллгм',
        patronymic: undefined,
      },
      task: {
        $case: 'homework',
        homework: {
          id: '1',
          lesson: {
            id: '11',
            title: 'Урок №1, Введение в предпринимательство',
            lessonNumber: 1,
            publishDate: new Date(2024, 4, 15),
          },
          title: 'Домашнее задание №2',
          deadlineDate: new Date(2024, 4, 23),
        },
      },
      submissionForGrading: {
        homework: {
          id: '',
          lesson: {
            id: '',
            title: '',
            lessonNumber: 0,
            publishDate: new Date(2024, 4, 15),
          },
          title: '',
          deadlineDate: new Date(2024, 4, 20),
        },
        id: '',
        owner: {
          id: '',
          name: '',
          surname: '',
          patronymic: undefined,
        },
        payload: {
          textAnswer: '',
          attachmentUrls: [],
        },
        publishedAt: new Date(2024, 4, 15),
        publisher: {
          id: '',
          name: 'Михаил',
          surname: 'Хооллгм',
          patronymic: undefined,
        },
        team: undefined,
      },
      adminGrade: 7,
      adminComment: undefined,
      trackerGrades: [],
    },
  ],
};

export function GradeAdminTableWithFilter({ onRow, modalProps }: Props) {
  const [formData, setFormData] = useState<GetGradesApiArg>({
    page: 1,
    size: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);

  const { data, isLoading, isError, isFetching } =
    useGetGradesQuery(dataForReq);
  // const data = mockData;
  
  const dataForTable = data?.grades;

  return (
    <>
      <BasicTableWithFilter
        totalNumber={data?.page?.totalElements}
        filterFormItems={
          <>
            <TaskTypeFormItem name="taskType" />
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
          columns: GradeAdminColumns,
          pagination: { total: data?.page?.totalElements },
          dataSource: dataForTable,
          rowKey: 'id',
          onRow: onRow,
        }}
        formData={formData}
        setFormData={setFormData}
        setDataForReq={setDataForReq}
      />
      <AdminGradeViewModal {...modalProps} requestParameters={dataForReq} />
    </>
  );
}

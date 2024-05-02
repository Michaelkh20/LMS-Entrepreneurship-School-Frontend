'use client';

import {
  TeamNumberFormItem,
  NameFormItem,
} from '@/components/Forms/FormItems/Filters';

import type { AssessmentsPage, GetAssessmentsApiArg } from '@/types/api';
import { useGetAssessmentsQuery } from '@/redux/services/api';
import { useEffect, useMemo, useState } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { ColumnsType, TableProps } from 'antd/es/table';
import type { AssessmentTableSnippet } from '@/types/api';
import {
  AssignmentTypeToString,
  assessmentTypeToString,
} from '@/util/enumsToString';

//TODO: ЗАДАНИЯ И ОЦЕНКИ ОТСУТСТВУЮТ В СНИППЕТЕ
type AssessmentTableItem = AssessmentTableSnippet;

const AssessmentColumns: ColumnsType<AssessmentTableItem> = [
  {
    title: 'Задание',
    dataIndex: 'assignment',
    key: 'assignment',
    render: (_value, record, _index) => {
      return <>{record.assignment.title}</>;
    },
  },
  {
    title: 'Тип задания',
    dataIndex: 'assignmentType',
    key: 'assignmentType',
    render: (_value, record, _index) => {
      return <></>;
    },
  },
  {
    title: 'Имя',
    dataIndex: 'learner',
    key: 'learner',
    sorter: true,
    render: (_value, record, _index) => {
      return (
        <>
          `${record.learner.surname} ${record.learner.surname}`
        </>
      );
    },
  },
  {
    title: 'Команда',
    dataIndex: 'team',
    key: 'team',
    render: (_value, record, _index) => {
      return <></>;
    },
  },
  {
    title: 'Тип оценки',
    dataIndex: 'assessmentType',
    key: 'assessmentType',
    render: (_value, record, _index) => {
      return <>{assessmentTypeToString(record.assessmentType)}</>;
    },
  },
  {
    title: 'Оценка',
    dataIndex: 'assessment',
    key: 'assessment',
    render: (_value, record, _index) => {
      return <>{record.assessment}</>;
    },
  },
];

export function AssessmentTableWithFilter({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetAssessmentsApiArg>({
    page: 1,
    size: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<AssessmentTableItem[]>([]);
  const { data, isLoading, isError, isFetching } =
    useGetAssessmentsQuery(dataForReq);

  //TODO: Из респонза достаем данные и формируем таблицу
  const dataForTable = useMemo(() => {
    return data?.content.map<AssessmentTableItem>((assessment) => {
      const res: AssessmentTableItem = {
        id: assessment.id,
        learner: assessment.learner,
        assignment: assessment.assignment,
        assessmentType: assessment.assessmentType,
        assessment: assessment.assessment,
      };
      return res;
    });
  }, [data]);

  return (
    <>
      <BasicTableWithFilter
        totalNumber={data?.pagination.total_elements}
        filterFormItems={
          <>
            <NameFormItem name="learnerId" />
            <TeamNumberFormItem />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: AssessmentColumns,
          pagination: { total: data?.pagination?.total_elements },
          dataSource: dataTable,
          rowKey: 'id',
          onRow: onRow,
        }}
        formData={formData}
        setFormData={setFormData}
        setDataForReq={setDataForReq}
      />
    </>
  );
}

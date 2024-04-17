'use client';

import {
  TeamNumberFormItem,
  NameFormItem,
} from '@/components/Forms/FormItems/Filters';
// import { useGetAssessmentsQuery } from '@/redux/services/adminApi';
import type { GetAssessmentsApiArg } from '@/types/requests';
import { useEffect, useState } from 'react';
import { BasicTableWithFilter } from '../BasicTableWithFilterComponent';
import { TeamNumber, Id, Assessment, AssessmentType } from '@/types/common';
import { ColumnsType, TableProps } from 'antd/es/table';
import { AssessmentsPage } from '@/types/responses';

// import type { AssessmentTableItem } from '@/types/responses';

//todo:

type AssessmentTableItem = {
  id: Id;
  learner: string;
  team: TeamNumber;
  assessment: Assessment;
};

const AssessmentColumns: ColumnsType<AssessmentTableItem> = [
  {
    title: 'Имя',
    dataIndex: 'learner',
    key: 'learner',
    sorter: true,
  },
  { title: 'Команда', dataIndex: 'team', key: 'team' },
  { title: 'Оценка', dataIndex: 'assessment', key: 'assessment' },
];

const mockData: AssessmentsPage = {
  pagination: {
    page: 1,
    pageSize: 10,
    totalPages: 1,
    totalElements: 10,
  },
  content: [
    {
      id: 1,
      learner: {
        id: 2,
        name: 'Иван Иванов',
      },
      task: {
        id: 1,
        title: 'TaskTitle',
      },
      issueDate: 'DateTime',
      assessmentType: AssessmentType.FinalGrade,
      assessment: 10,
    },
  ],
};

export function AssessmentTableWithFilter({
  onRow,
}: {
  onRow?: TableProps['onRow'];
}) {
  const [formData, setFormData] = useState<GetAssessmentsApiArg>({
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<AssessmentTableItem[]>([]);
  // const { data, isLoading, isError, isFetching } =
  //   useGetAssessmentsQuery(dataForReq);

  useEffect(() => {
    console.log('dataForReq:', dataForReq);
  }, [dataForReq]);

  useEffect(() => {
    console.log('FormData1:', formData);
  }, [formData]);

  //TODO: Из респонза достаем данные и формируем таблицу

  useEffect(() => {
    setDataTable(
      mockData.content.map((el): AssessmentTableItem => {
        return {
          id: el.id,
          learner: el.learner.name,
          team: 1,
          assessment: el.assessment,
        };
      })
    );
  }, [mockData]);

  return (
    <>
      <BasicTableWithFilter
        // totalNumber={data?.totalElems}
        filterFormItems={
          <>
            <NameFormItem name="learnerId" />
            <TeamNumberFormItem />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: AssessmentColumns,
          // pagination: { total: data?.pagination?.totalElements },
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

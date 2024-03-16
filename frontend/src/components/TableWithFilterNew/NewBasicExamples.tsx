'use client';
import { useEffect, useState, SetStateAction, useMemo, Key } from 'react';
// @ts-ignore
import _debounce from 'lodash.debounce';
import { accountsColumns, AttendanceColumnsNew } from '../TableWithFilter/TableColumns';
import { LessonNumber, SortOrder } from '@/types/common';
import { NameFormItem, EmailFormItem } from '../Forms/FormItems/Filters';
import {
  useGetAccountsQuery,
  useGetAttendanceQuery,
} from '@/redux/services/adminApi';
import type { GetAccountsApiArg, AttendanceRequest } from '@/types/requests';
import {
  AttendanceColumnsDataType,
  AttendanceColumnsDataMock,
} from '../TableWithFilter/TableColumns/AttendanceColumns';
import { BasicTableWithFilter } from './NewBasic';
import { DEBOUNCE_DURATION } from '../TableWithFilter/entity';

export function FilledExampleBasicTableWithFilter() {
  const [formData, setFormData] = useState<GetAccountsApiArg>({
    page: 1,
    pageSize: 10,
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<(typeof accountsColumns)[]>([]);
  const { data, isLoading, isError, isFetching } =
    useGetAccountsQuery(dataForReq);

  useEffect(() => {
    console.log('FormData1:', formData);
  }, [formData]);

  return (
    <>
      <BasicTableWithFilter
        filterFormItems={
          <>
            <NameFormItem />
            <EmailFormItem />
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: accountsColumns,
          pagination: { total: data?.pagination?.totalElements },
          dataSource: [
            {
              key: '123123',
              name: 'ivan',
              email: 'ivan',
              team: '#1',
              role: 'BABY',
              balance: 100,
            },
            {
              key: '12312312',
              name: 'ivan2',
              email: 'ivan2',
              team: '#12',
              role: 'BABY2',
              balance: 1002,
            },
          ],
        }}
        formData={formData}
        setFormData={setFormData}
        setDataForReq={setDataForReq}
      />
    </>
  );
}

export function FilledExample2BasicTableWithFilter({
  lessonId = 123,
}: {
  lessonId: LessonNumber;
}) {
  const [formData, setFormData] = useState<AttendanceRequest>({
    lessonId: lessonId,
    learners: [],
  });

  const [dataForReq, setDataForReq] = useState<typeof formData>(formData);
  const [dataTable, setDataTable] = useState<AttendanceColumnsDataType[]>(
    AttendanceColumnsDataMock
  );
  const { data, isLoading, isError, isFetching } =
    useGetAttendanceQuery(lessonId);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    console.log("Table:", dataTable)
    setFormData((prevState): AttendanceRequest => {
        return {
            ...prevState,
            learners:
                dataTable
                    .filter(st => st.didCome)
                    .map(st => {
                        return {
                            learnerId: st.key,
                            accruedCurrency: st.accruedCurrency || null
                        }
                    })
        }
    })
}, [dataTable])


  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>(() => {
    // const students: number[] = [];
    const students = dataTable.filter((e) => e.didCome).map((e) => e.key);
    console.log('students did come:', students);
    return students;
  });

  const onSelectChange = (
    newSelectedRowKeys: Key[],
    selectRows: AttendanceColumnsDataType[]
  ) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const handleOnSelect = (record: any, selected: any) => {
    record.didCome = selected;

    if (selected) {
      if (record.cachedAccruedCurrency) {
        record.accruedCurrency = record.cachedAccruedCurrency;
      } else {
        record.accruedCurrency = 0;
      }
    } else {
      record.cachedAccruedCurrency = record.accruedCurrency;
      record.accruedCurrency = 0;
    }

    setDataTable((prevState) => [
      ...prevState.map((student) =>
        student.key === record.key ? record : student
      ),
    ]);
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    console.log('FormData2:', formData);
  }, [formData]);

  useEffect(() => {
    console.log('dataForReq2:', dataForReq);
  }, [dataForReq]);

  const debounceDataForReq = useMemo(
    () =>
      _debounce((data: any) => {
        setDataForReq(data);
      }, 700),
    []
  );

  useEffect(() => {
    debounceDataForReq(formData);
  }, [formData, debounceDataForReq]);

  return (
    <>
      <BasicTableWithFilter
        filterFormItems={
          <>
            {/* <NameFormItem />
            <EmailFormItem />
            <EmailFormItem />
            <EmailFormItem /> */}
          </>
        }
        tableProps={{
          scroll: { x: true },
          columns: AttendanceColumnsNew({ setDataTable: setDataTable }),
          dataSource: dataTable,
          pagination: false,
          rowSelection: {
            selectedRowKeys,
            onChange: onSelectChange,
            onSelect: handleOnSelect,
            hideSelectAll: true,
          },
        }}
        formData={formData}
        setFormData={setFormData}
        setDataForReq={setDataForReq}
      />
    </>
  );
}

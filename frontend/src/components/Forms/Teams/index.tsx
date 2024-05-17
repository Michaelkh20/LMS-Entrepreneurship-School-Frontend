import {
  TeamUsersEditColumnsType,
  TeamUsersEditTable,
} from '@/components/TableWithFilterNew/Tables/Admin/TeamUsersEditTable';
import { useDeleteTeamByIdMutation } from '@/redux/services/api';
import { CheckOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Form, message, Button, Input, InputNumber, Popconfirm } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  ICreateUpdateTeamRequest,
  ICreateUpdateTeamResponse,
  IGetTeamResponse,
} from '@/types/proto';
import {
  UserSelection,
  type Option as UserSelectionOption,
} from '@/components/Selections/UserSelection';

import styles from '@/app/admin/main.module.css';
import { formValuesToRequest, getUserIds } from './helpers';
import { useForm } from 'antd/es/form/Form';
import { useRouter } from 'next/navigation';
import { MutationResultType, UpdateTeamApiArg } from '@/types/api';

type FormFields = {
  description: string;
  number: number;
  projectTheme: string;
};

type TeamFormProps = {
  onFinish: (values: ICreateUpdateTeamRequest) => void;
} & (
  | {
      type: 'create';
      data?: undefined;
      result: MutationResultType<
        ICreateUpdateTeamResponse,
        ICreateUpdateTeamRequest
      >;
    }
  | {
      type: 'edit';
      data: IGetTeamResponse;
      result: MutationResultType<ICreateUpdateTeamResponse, UpdateTeamApiArg>;
    }
);

export default function TeamForm({
  onFinish,
  result,
  type,
  data,
}: TeamFormProps) {
  const [students, setStudents] = useState(
    data?.team?.students.map<TeamUsersEditColumnsType>((student) => ({
      userId: student.id,
      userBalance: student.balance,
      userEmail: student.email,
      userName: `${student.surname} ${student.name}`,
    })) || []
  );

  const [trackers, setTrackers] = useState(
    data?.team?.trackers.map<TeamUsersEditColumnsType>((tracker) => ({
      userId: tracker.id,
      userBalance: tracker.balance,
      userEmail: tracker.email,
      userName: `${tracker.surname} ${tracker.name}`,
    })) || []
  );

  const [form] = useForm<FormFields>();
  const [deleteTeam, deleteResult] = useDeleteTeamByIdMutation();

  const router = useRouter();

  useEffect(() => {
    if (result.isError) {
      const errorDetails = result.error;

      if ('status' in errorDetails && errorDetails.status === 409) {
        let fieldsError = [];
        console.log(errorDetails.data);

        fieldsError.push({
          name: 'title',
          errors: ['Команда с таким номером уже существует'],
        });
        message.error('Команда с таким номером уже существует', 5);

        form.setFields(fieldsError);
      } else {
        message.error('Что-то пошло не так', 5);
      }
    }

    if (result.isLoading || deleteResult.isLoading) {
      message.loading({ content: 'Загрузка...', duration: 0, key: 'Loading' });
    } else {
      message.destroy('Loading');
    }

    if (result.isSuccess) {
      const teamId = data?.team?.id;
      type === 'edit'
        ? message.success('Команда успешно изменена')
        : message.success('Команда успешно создана');

      router.push(`/admin/teams/${teamId}`);
    }

    if (deleteResult.isError) {
      const errorDetails = deleteResult.error;
      console.log('ERR DETAILS: ', errorDetails);

      if (
        'originalStatus' in errorDetails &&
        errorDetails.originalStatus === 200
      ) {
        message.success('Команда успешно удалена');
        router.push(`/admin/teams/`);
      } else {
        message.error('Что-то пошло не так', 5);
      }
    }
    if (deleteResult.isSuccess) {
      message.success('Команда успешно удалена');
      router.push(`/admin/teams/`);
    }
  }, [data?.team?.id, result, deleteResult, router, type, form]);

  const handleFinish = () => {
    const { number, description, projectTheme } = form.getFieldsValue();
    const request = formValuesToRequest({
      students,
      trackers,
      number,
      description,
      projectTheme,
    });
    onFinish(request);
  };

  const handleDeleteTeam = (id: string) => {
    deleteTeam(id);
  };

  const handleDeleteStudent = (id: string) => {
    setStudents((prev) => prev?.filter((student) => student.userId !== id));
  };

  const handleDeleteTracker = (id: string) => {
    setTrackers((prev) => prev?.filter((tracker) => tracker.userId !== id));
  };

  const handleSelectStudent = (value: string, option: UserSelectionOption) => {
    setStudents((prev) => [
      ...prev.filter((student) => student.userId !== option.value),
      {
        userName: option.label,
        userId: option.value,
        userBalance: '',
        userEmail: '',
      },
    ]);
  };

  const handleSelectTracker = (value: string, option: UserSelectionOption) => {
    setTrackers((prev) => [
      ...prev.filter((tracker) => tracker.userId !== option.value),
      {
        userName: option.label,
        userId: option.value,
        userBalance: '',
        userEmail: '',
      },
    ]);
  };

  return (
    <>
      {type === 'edit' && (
        <>
          <h2>Редактировать команду №{data?.team?.number}</h2>
        </>
      )}

      <Form<FormFields> layout="vertical" form={form}>
        <Form.Item
          name={'number'}
          label={'Номер команды'}
          initialValue={data?.team?.number}
        >
          <InputNumber
            style={{ minWidth: '150px' }}
            placeholder="Номер команды"
          />
        </Form.Item>
        <Form.Item
          name={'projectTheme'}
          label={'Тема проекта'}
          rules={[
            {
              max: 128,
              message: 'Тема должна иметь длину не более 128 символов',
            },
          ]}
          initialValue={data?.team?.projectTheme}
        >
          <Input placeholder="Тема проекта" />
        </Form.Item>
        <Form.Item
          name={'description'}
          label={'Описание'}
          rules={[
            {
              max: 256,
              message: 'Описание должно иметь длину не более 256 символов',
            },
          ]}
          initialValue={data?.team?.description}
        >
          <Input.TextArea rows={4} placeholder="Описание" />
        </Form.Item>
      </Form>

      <section className={styles.section}>
        <div className={styles.header}>
          <h3>Ученики</h3>

          <UserSelection
            type="filter"
            placeholder="Добавить ученика"
            onSelect={handleSelectStudent}
            selectedUsersIds={getUserIds(students, trackers)}
          />
        </div>

        <TeamUsersEditTable
          tableData={students}
          onDelete={handleDeleteStudent}
        />
      </section>

      <section className={styles.section}>
        <div className={styles.header}>
          <h3>Трекеры</h3>
          <UserSelection
            type="filter"
            placeholder="Добавить трекера"
            onSelect={handleSelectTracker}
            selectedUsersIds={getUserIds(students, trackers)}
          />
        </div>

        <TeamUsersEditTable
          tableData={trackers}
          onDelete={handleDeleteTracker}
        />
      </section>

      <div className={styles.buttons_group_end}>
        {type === 'edit' && (
          <Popconfirm
            title={'Вы действительно хотите удалить команду?'}
            onConfirm={() => handleDeleteTeam(data.team?.id!)}
            okText={'Удалить'}
            cancelText={'Назад'}
          >
            <Button icon={<DeleteOutlined />} size="large" danger>
              Удалить команду
            </Button>
          </Popconfirm>
        )}

        <Button
          type="primary"
          icon={type === 'edit' ? <CheckOutlined /> : <PlusOutlined />}
          size="large"
          onClick={handleFinish}
        >
          {type === 'edit' ? 'Изменить' : 'Создать'}
        </Button>
      </div>
    </>
  );
}

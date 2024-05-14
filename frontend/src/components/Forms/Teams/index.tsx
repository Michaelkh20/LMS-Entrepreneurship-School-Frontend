import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import {
  TeamUsersEditColumnsType,
  TeamUsersEditTable,
} from '@/components/TableWithFilterNew/Tables/Admin/TeamUsersEditTable';
import { useUpdateTeamMutation } from '@/redux/services/api';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { Form, message, Button, Input, InputNumber } from 'antd';
import React, { useEffect, useState } from 'react';
import { IGetTeamResponse } from '@/types/proto';
import {
  UserSelection,
  type Option as UserSelectionOption,
} from '@/components/Selections/UserSelection';

import styles from '@/app/admin/main.module.css';
import formValuesToRequest from './helpers';
import { useForm } from 'antd/es/form/Form';
import { useRouter } from 'next/navigation';

type FormFields = {
  description: string;
  number: number;
  projectTheme: string;
};

export default function TeamForm({ data }: { data: IGetTeamResponse }) {
  const [students, setStudents] = useState(
    data.team?.students.map<TeamUsersEditColumnsType>((student) => ({
      userId: student.id,
      userBalance: student.balance,
      userEmail: student.email,
      userName: `${student.surname} ${student.name}`,
    })) || []
  );

  const [trackers, setTrackers] = useState(
    data.team?.trackers.map<TeamUsersEditColumnsType>((tracker) => ({
      userId: tracker.id,
      userBalance: tracker.balance,
      userEmail: tracker.email,
      userName: `${tracker.surname} ${tracker.name}`,
    })) || []
  );

  const [form] = useForm<FormFields>();
  const [updateTeam, result] = useUpdateTeamMutation();
  const router = useRouter();

  useEffect(() => {
    if (result.isError) {
      message.error('Что-то пошло не так', 5);
    }

    if (result.isLoading) {
      message.loading({ content: 'Загрузка...', duration: 0, key: 'Loading' });
    } else {
      message.destroy('Loading');
    }

    if (result.isSuccess) {
      const teamId = data.team?.id;
      message.success('Команда успешно изменена');
      router.push(`/admin/teams/${teamId}`);
    }
  }, [data.team?.id, result, router]);

  console.log('data', data);

  const handleEdit = () => {
    const { number, description, projectTheme } = form.getFieldsValue();
    const request = formValuesToRequest({
      students,
      trackers,
      number,
      description,
      projectTheme,
    });
    updateTeam({ id: data.team?.id!, updateRequestBody: request });
  };

  const handleDeleteStudent = (id: string) => {
    setStudents((prev) => prev?.filter((student) => student.userId !== id));
  };

  const handleDeleteTracker = (id: string) => {
    setTrackers((prev) => prev?.filter((tracker) => tracker.userId !== id));
  };

  const handleSelectStudent = (value: string, option: UserSelectionOption) => {
    setStudents((prev) => [
      ...prev,
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
      ...prev,
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
      <h2>Редактировать команду №{data.team?.number}</h2>

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
              max: 200,
              message: 'Тема должна иметь длину не более 200 символов',
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
              max: 1_000,
              message: 'Описание должно иметь длину не более 1000 символов',
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
            placeholder="Выберите ученика"
            onSelect={handleSelectStudent}
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
            placeholder="Выберите трекера"
            onSelect={handleSelectTracker}
          />
        </div>

        <TeamUsersEditTable
          tableData={trackers}
          onDelete={handleDeleteTracker}
        />
      </section>

      <div className={styles.buttons_group_end}>
        <Button icon={<DeleteOutlined />} size="large" danger>
          Удалить команду
        </Button>
        <Button
          type="primary"
          icon={<CheckOutlined />}
          size="large"
          onClick={handleEdit}
        >
          Изменить
        </Button>
      </div>
    </>
  );
}

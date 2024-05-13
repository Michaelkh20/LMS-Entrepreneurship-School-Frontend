import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import {
  TeamUsersEditColumnsType,
  TeamUsersEditTable,
} from '@/components/TableWithFilterNew/Tables/Admin/TeamUsersEditTable';
import {
  useGetTeamByIdQuery,
  useUpdateTeamMutation,
} from '@/redux/services/api';
import { UpdateTeamApiArg } from '@/types/api';
import { PlusOutlined, CheckOutlined } from '@ant-design/icons';
import { Form, message, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { LearnerSelectionFormItem } from '../FormItems/Selection/LearnerSelectionFormItem';
import { IGetTeamResponse } from '@/types/proto';

export default function TeamForm({ data }: { data: IGetTeamResponse }) {
  const [students, setStudents] = useState(
    data.team?.students.map<TeamUsersEditColumnsType>((student) => ({
      userId: student.id,
      userBalance: student.balance,
      userEmail: student.email,
      userName: `${student.surname} ${student.name}`,
    }))
  );

  const [trackers, setTrackers] = useState(
    data.team?.trackers.map<TeamUsersEditColumnsType>((tracker) => ({
      userId: tracker.id,
      userBalance: tracker.balance,
      userEmail: tracker.email,
      userName: `${tracker.surname} ${tracker.name}`,
    }))
  );
  const [updateTeam, result] = useUpdateTeamMutation();
  const [open, setOpen] = useState(false);
  const [formLearner] = Form.useForm();

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
      message.success('Оценка успешно выставлена');
    }
  }, [result]);

  console.log('data', data);

  const showModal = () => {
    setOpen(true);
  };

  const handleDeleteStudent = (id: string) => {
    setStudents((prev) => prev?.filter((student) => student.userId !== id));
  };

  const handleDeleteTracker = (id: string) => {
    setTrackers((prev) => prev?.filter((tracker) => tracker.userId !== id));
  };


  const handleOnSelect = () => {};

  return (
    <BasePageLayout header={<h2>Редактировать команду {id}</h2>}>
      <h3 className={styles.header}>
        Тема проекта: {data?.team?.projectTheme || ' -'}
      </h3>

      <section className={styles.section}>
        <div className={styles.header}>
          <h3>Ученики</h3>

          <Form form={formLearner}>
            <LearnerSelectionFormItem
              placeholder="Выберите ученика"
              type={'form'}
              name="learnerId"
              label=""
              onSelect={() => {}}
            />
          </Form>

          {/* <Button icon={<PlusOutlined />} size="large">
              Добавить ученика
            </Button> */}
        </div>

        <TeamUsersEditTable
          tableData={students}
          onDelete={handleDeleteStudent}
        />
      </section>

      <section className={styles.section}>
        <div className={styles.header}>
          <h3>Трекеры</h3>
          <Button icon={<PlusOutlined />} size="large">
            Добавить трекера
          </Button>
        </div>

        <TeamUsersEditTable
          tableData={trackers}
          onDelete={handleDeleteTracker}
        />
      </section>

      <div className={styles.buttons_group}>
        <Button icon={<CheckOutlined />} size="large" danger>
          Удалить команду
        </Button>
      </div>

      <div className={styles.buttons_group_end}>
        <Button size="large">Назад</Button>
        <Button type="primary" icon={<CheckOutlined />} size="large">
          Подтвердить
        </Button>
      </div>

      {/* <Modal
          open={open}
          title="Title"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={(_, { OkBtn, CancelBtn }) => (
            <>
              <Button>Custom Button</Button>
              <CancelBtn />
              <OkBtn />
            </>
          )}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal> */}
    </BasePageLayout>
  );
}

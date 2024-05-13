'use client';

import styles from '@/app/admin/main.module.css';
import { Button, Form, Modal, Popconfirm, message } from 'antd';
import { CheckOutlined, PlusOutlined } from '@ant-design/icons';
import { TeamUsersEditTable } from '@/components/TableWithFilterNew/Tables/Admin/TeamUsersEditTable';
import { useEffect, useState } from 'react';
import { useGetTeamByIdQuery } from '@/redux/services/api';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';
import { LearnerSelectionFormItem } from '@/components/Forms/FormItems/Selection/LearnerSelectionFormItem';

import type { UpdateTeamMembers_Request } from '@proto/teams/teams_api';

import { useUpdateTeamMutation } from '@/redux/services/api';
import { UpdateTeamApiArg } from '@/types/api';

export default function TeamPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data } = useGetTeamByIdQuery(id);

  const [updateTeam, result] = useUpdateTeamMutation();
  const [open, setOpen] = useState(false);
  const [formLearner] = Form.useForm();

  // useEffect(() => {
  //   const formDataInit = data?.team?.students
  //     .map<string>((student) => student.id)
  //     .concat(data.team.trackers.map((tracker) => tracker.id));
  //   setFormData({ userIds: formDataInit || [] });
  // }, [data]);

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

  const handleUserAddOk = () => {
    const requestData: UpdateTeamApiArg = {
      id: id,
      updateRequestBody: {
        userIds:
          data?.team?.students
            .map<string>((student) => student.id)
            .concat(data.team.trackers.map((tracker) => tracker.id))
            .concat(formLearner.getFieldValue('learnerId')) || [],
        number: undefined,
        projectTheme: undefined,
        description: undefined,
      },
    };

    console.log('submit: ', requestData);
    updateTeam(requestData);

    // setFormData(formDataInit);
  };

  const handleCancel = () => {
    setOpen(false);
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

        <TeamUsersEditTable users={data?.team?.students} />
      </section>

      <section className={styles.section}>
        <div className={styles.header}>
          <h3>Трекеры</h3>
          <Button icon={<PlusOutlined />} size="large">
            Добавить трекера
          </Button>
        </div>

        <TeamUsersEditTable users={data?.team?.trackers} />
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

'use client';

import DownloadButton from '@/components/Buttons/DownloadButton/DownloadButton';
import FormComponent from '@/components/Forms/form';
import UploadButton from '@/components/Buttons/UploadButton/UploadButton';
import TradeLotCard from '@/components/LotCard/lot-card';
import Navbar from '@/components/NavBars/Navbar/Navbar';
import { DatePicker, Form } from 'antd';
import { AccountRequest } from '@/types/requests';
import { Role } from '@/types/common';
import { useCreateAccountMutation } from '@/redux/services/adminApi';
import { useAuthMutation } from '@/redux/services/commonApi';
import { useEffect, useMemo } from 'react';
import { UserSelectionFormItem } from '@/components/Forms/FormItems/Filters';
import dayjs from 'dayjs';

export default function Test() {
  const [auth, { isSuccess: isAuthSuccess }] = useAuthMutation();
  const [createUser, { isSuccess }] = useCreateAccountMutation();

  const users: AccountRequest[] = useMemo(
    () => [
      {
        id: null,
        name: 'Ivan',
        surname: 'Ivanov',
        middleName: 'Ivanovich',
        email: 'hfggvuwef@gmail.com',
        role: Role.Learner,
        phone: '123456789',
        messenger: 'telegram',
        gender: true,
        password: '123456789',
      },
      {
        id: null,
        name: 'Petr',
        surname: 'Petrov',
        middleName: 'Petrovich',
        email: 'hfg2efwfuwef@gmail.com',
        role: Role.Learner,
        phone: '123456789',
        messenger: 'telegram',
        gender: true,
        password: '123456789',
      },
      {
        id: null,
        name: 'Semen',
        surname: 'Semenov',
        middleName: 'Semenovich',
        email: 'fwef@gmail.com',
        role: Role.Learner,
        phone: '123456789',
        messenger: 'telegram',
        gender: true,
        password: '123456789',
      },
    ],
    []
  );

  // useEffect(() => {
  //   async function authUser() {
  //     await auth({ login: 'admin', password: 'password' }).unwrap();

  //     users.forEach((user) => {
  //       createUser(user);
  //     });
  //   }

  //   authUser();
  // }, [auth, createUser, users]);

  function onValuesChangeHandler(changedValues: any, values: any) {
    console.log(values);
  }

  return (
    <main>
      <TradeLotCard
        number={12345}
        description="Торговый лот описания"
        performer="Имя исполнителя"
        price={100}
        conditions="Условия торгового лота"
      />
      <FormComponent />
      <UploadButton />
      {/* <DownloadButton /> */}
      <Navbar balance={50} name={'Ivan'} isTrackerPage={false} />
      <h1>Test</h1>
      <div>Auth: {isAuthSuccess ? 'true' : 'false'}</div>
      <div>Create user: {isSuccess ? 'true' : 'false'}</div>
      <Form onValuesChange={onValuesChangeHandler}>
        <UserSelectionFormItem
          placeholder="Выберите пользователя"
          name="user"
        />
        <Form.Item
          name="gvergvre"
          // normalize={(value, prevValue, allValues) => {
          //   return 1;
          // }}
          // getValueFromEvent={(date) => date.format('YYYY-MM-DD')}
          getValueFromEvent={(date) => date.toISOString()}
          // getValueFromEvent={(date) => console.log(date)}
        >
          <DatePicker placeholder="fvwefew" />
        </Form.Item>
      </Form>
    </main>
  );
}

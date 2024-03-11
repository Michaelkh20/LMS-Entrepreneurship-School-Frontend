'use client';

import FormComponent from '@/components/Forms/form';
import UploadButton from '@/components/Buttons/UploadButton/UploadButton';
import TradeLotCard from '@/components/LotCard/lot-card';
import Navbar from '@/components/NavBars/Navbar/Navbar';
import { DatePicker, DatePickerProps, Form } from 'antd';
import { UserSelectionFormItem } from '@/components/Forms/FormItems/Filters';
import { useState } from 'react';
import { usePersonMutation } from '@/redux/services/commonApi';

export default function Test() {
  // function onValuesChangeHandler(changedValues: any, values: any) {
  //   console.log(values);
  // }

  // const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  //   console.log(date?.toISOString().slice(0, 10), dateString);
  // };

  const [id, setid] = useState(0);

  const [getPerson, { data }] = usePersonMutation();

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = Number(value);
    if (!isNaN(parsedValue)) {
      setid(parsedValue);
    }
  };

  return (
    <main>
      {/* <TradeLotCard
          number={12345}
          description="Торговый лот описания"
          performer="Имя исполнителя"
          price={100}
          conditions="Условия торгового лота"
        />
        <FormComponent />
        <UploadButton />
        <Navbar balance={50} name={'Ivan'} isTrackerPage={false} />
        <h1>Test</h1>
        <Form onValuesChange={onValuesChangeHandler}>
          <UserSelectionFormItem
            placeholder="Выберите пользователя"
            name="user"
          />
          <DatePicker onChange={onChange} />
        </Form> */}
      <input type="text" placeholder="id" onChange={handleChanges} value={id} />
      <button onClick={() => getPerson({ id })}>Get person</button>
      <div>
        <h1>Person</h1>
        <p>id: {id}</p>
        <p>name: {data?.name}</p>
        <p>surname: {data?.surname}</p>
      </div>
    </main>
  );
}

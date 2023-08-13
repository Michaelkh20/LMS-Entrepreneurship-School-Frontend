'use client';

import FormComponent from '@/components/Forms/form';
import UploadButton from '@/components/Buttons/UploadButton/UploadButton';
import TradeLotCard from '@/components/LotCard/lot-card';
import Navbar from '@/components/NavBars/Navbar/Navbar';
import { Form } from 'antd';
import { UserSelectionFormItem } from '@/components/Forms/FormItems/Filters';

export default function Test() {
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
      <Navbar balance={50} name={'Ivan'} isTrackerPage={false} />
      <h1>Test</h1>
      <Form onValuesChange={onValuesChangeHandler}>
        <UserSelectionFormItem
          placeholder="Выберите пользователя"
          name="user"
        />
      </Form>
    </main>
  );
}

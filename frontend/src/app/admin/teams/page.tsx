import { TeamTableWithFilter } from '@/components/TableWithFilterNew';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

export default function TeamsPage() {
  return (
    <>
      {/* <div className={styles.container}>
      <div style={{
        display:'flex',
        gap: '1rem',
        alignItems: 'center',
        paddingLeft: '1rem'
      }}> */}
      <h2>Аккаунты</h2>
      <Button icon={<PlusOutlined height={10} />} size="large" type="primary">
        Создать
      </Button>
      {/* </div> */}
      <TeamTableWithFilter />
      {/* </div> */}
    </>
  );
}

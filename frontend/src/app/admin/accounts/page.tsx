import { BasicTableWithFilter } from '@/components/TableWithFilterNew/NewBasic';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { FilledExampleBasicTableWithFilter, FilledExample2BasicTableWithFilter } from '@/components/TableWithFilterNew/NewBasicExamples';

import { AccountsTableWithFilter } from '@/components/TableWithFilterNew';
import { AttendanceTable } from '@/components/TableWithFilterNew';

export default function Accounts() {
  return (
    <>
      <div className={styles.container}>
      <div style={{
        display:'flex',
        gap: '1rem',
        alignItems: 'center',
        paddingLeft: '1rem'
      }}>
        <h2>Аккаунты</h2>
        <Button icon={<PlusOutlined height={10}/>} size='large' type='primary'>Создать</Button>
      </div>
        <AccountsTableWithFilter />
        <AttendanceTable lessonId={123}/>
        {/* <AttendanceTable lessonId={1123}/>
        <FilledExampleBasicTableWithFilter />
        <FilledExample2BasicTableWithFilter lessonId={123}/> */}
      </div>
    </>
  );
}

import { BasicTableWithFilter, FilledExampleBasicTableWithFilter, FilledExample2BasicTableWithFilter } from '@/components/TableWithFilter/NewBasic';
import { AccountsTableWithFilter } from '@/components/TableWithFilter/AccountsTableWithFilter';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';




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
        {/* <AccountsTableWithFilter /> */}
        <FilledExampleBasicTableWithFilter></FilledExampleBasicTableWithFilter>
        <FilledExample2BasicTableWithFilter lessonId={123}/>
      </div>
    </>
  );
}

import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from '../main.module.css';

import {
  useGetAccountsListQuery,
  useGetAccountsShortListQuery,
} from '@/redux/services/adminApi';
import { AccountsTableWithFilter } from '@/components/TableWithFilterNew';

export default function Accounts() {
  const { data: accountsList } = useGetAccountsListQuery();
  const { data: accountsShortList } = useGetAccountsShortListQuery();
  console.log('Account list', accountsList);
  console.log('Account short list', accountsShortList);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Аккаунты</h2>
          <Button
            icon={<PlusOutlined height={10} />}
            size="large"
            type="primary"
          >
            Создать
          </Button>
        </div>
        <AccountsTableWithFilter />
      </div>
    </>
  );
}

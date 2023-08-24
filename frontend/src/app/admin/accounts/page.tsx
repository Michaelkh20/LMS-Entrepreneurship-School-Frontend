import { AccountsTableWithFilter } from '@/components/TableWithFilter/AccountsTableWithFilter';
import Link from 'next/link';
import Image from 'next/image';
import addIcon from '../../../../public/add.svg';
import styles from './page.module.css';
import { Jura } from 'next/font/google';

const jura = Jura({
  subsets: ['cyrillic'],
});

export default function Accounts() {
  return (
    <>
      <h1 className={`${styles.title} ${jura.className}`}>Аккаунты</h1>
      <div className={styles.container}>
        <div className={styles.createContainer}>
          <Link href={'/admin/accounts/create'} className={styles.createButton}>
            <Image src={addIcon} height={25} width={25} alt="create icon" />
            Создать
          </Link>
        </div>
        <AccountsTableWithFilter />
      </div>
    </>
  );
}

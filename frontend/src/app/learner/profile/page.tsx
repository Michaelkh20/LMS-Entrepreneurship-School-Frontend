import styles from './page.module.css';
import { Jura } from 'next/font/google';
import UserData from '@/components/ProfileComponents/UserData/user-data';
import Team from '@/components/ProfileComponents/Team/team';

const jura = Jura({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.page_label} ${jura.className}`}>
        ЛИЧНЫЙ КАБИНЕТ
      </h1>
      <div className={styles.content_container}>
        <div className={styles.balance_container}>
          <p>Баланс шпрот - 15 ШП</p>
          <button>Сделать перевод</button>
        </div>
        <div className={styles.user_data_container}>
          <p className={styles.user_data_label}>Мои данные</p>
          <div className={styles.user_data}>
            <UserData props={'Иван Иванов Иванович'} />
            <UserData props={'E-mail: ivanivanov@mail.ru'} />
            <UserData props={'Телефон: 8 (812) 000 - 00 - 00'} />
            <UserData props={'VK: @ivanivanov04'} />
          </div>
        </div>
        <Team></Team>
      </div>
    </div>
  );
}

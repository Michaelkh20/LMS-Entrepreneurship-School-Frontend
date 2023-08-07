import styles from './page.module.css';
import { Jura } from 'next/font/google';
import UserData from '@/components/ProfileComponents/UserData/user-data';
import Team, { TeamProps } from '@/components/ProfileComponents/Team/team';
import { Role } from '@/types/common';
import { TeamMemberProps } from '@/components/ProfileComponents/TeamMember/team-member';

const jura = Jura({
  subsets: ['cyrillic'],
});

const team_props: TeamProps = {
  number: 11,
  theme: 'Тема',
};

const team_members: TeamMemberProps[] = [
  {
    name: 'Андрей Иванов Иванович',
    email: 'ivanivanov@mail.ru',
    messenger: '@ivanivanov04',
    role: Role.Learner,
  },
  {
    name: 'Иван Иванов Иванович',
    email: 'ivanivanov@mail.ru',
    messenger: '@ivanivanov04',
    role: Role.Learner,
  },
  {
    name: 'Иван Иванов Иванович',
    email: 'ivanivanov@mail.ru',
    messenger: '@ivanivanov04',
    role: Role.Learner,
  },
  {
    name: 'Иван Иванов Иванович',
    email: 'ivanivanov@mail.ru',
    messenger: '@ivanivanov04',
    role: Role.Tracker,
  },
  {
    name: 'Андрей Иванов Иванович',
    email: 'ivanivanov@mail.ru',
    messenger: '@ivanivanov04',
    role: Role.Tracker,
  },
];

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
        <Team props={team_props} members={team_members}></Team>
      </div>
    </div>
  );
}

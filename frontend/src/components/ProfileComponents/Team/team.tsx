import styles from './team.module.css';
import { Jura } from 'next/font/google';
import TeamMember from '@/components/ProfileComponents/TeamMember/team-member';

const jura = Jura({
  subsets: ['latin'],
});

export default function Team() {
  return (
    <div className={styles.team_container}>
      <p className={styles.theme_number}>Команда №1</p>
      <p className={styles.team_label}>Тема проекта: Тема проекта</p>
      <div className={styles.team_members_content}>
        <div>
          <h1 className={styles.team_members_label}>Участники команды</h1>
          <div className={styles.team_members_container}>
            <TeamMember
              name={'Иван Иванов Иванович'}
              email={'ivanivanov@mail.ru'}
              messenger={'@ivanivanov04'}
            />
            <TeamMember
              name={'Иван Иванов Иванович'}
              email={'ivanivanov@mail.ru'}
              messenger={'@ivanivanov04'}
            />
            <TeamMember
              name={'Иван Иванов Иванович'}
              email={'ivanivanov@mail.ru'}
              messenger={'@ivanivanov04'}
            />
          </div>
        </div>
        <div>
          <h1 className={styles.team_members_label}>Трекеры команды</h1>
          <div className={styles.team_members_container}>
            <TeamMember
              name={'Иван Иванов Иванович'}
              email={'ivanivanov@mail.ru'}
              messenger={'@ivanivanov04'}
            />
            <TeamMember
              name={'Иван Иванов Иванович'}
              email={'ivanivanov@mail.ru'}
              messenger={'@ivanivanov04'}
            />
            <TeamMember
              name={'Иван Иванов Иванович'}
              email={'ivanivanov@mail.ru'}
              messenger={'@ivanivanov04'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

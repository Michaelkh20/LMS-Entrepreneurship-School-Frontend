import styles from './team.module.css';
import { Jura } from 'next/font/google';
import TeamMember, {
  TeamMemberProps,
} from '@/components/ProfileComponents/TeamMember/team-member';
import { Role } from '@/types/common';

const jura = Jura({
  subsets: ['latin'],
});

export interface TeamProps {
  number: number;
  theme: string;
}

export default function Team({
  props,
  members,
}: {
  props: TeamProps;
  members: TeamMemberProps[];
}) {
  return (
    <div className={styles.team_container}>
      <p className={styles.theme_number}>Команда №{props.number}</p>
      <p className={styles.team_label}>Тема проекта: {props.theme}</p>
      <div className={styles.team_members_content}>
        <div>
          <h1 className={styles.team_members_label}>Участники команды</h1>
          <div className={styles.team_members_container}>
            {members
              .filter((member) => member.role === Role.Learner)
              .map((member) => (
                <TeamMember
                  key={member.email}
                  name={member.name}
                  email={member.email}
                  messenger={member.messenger}
                  role={member.role}
                />
              ))}
          </div>
        </div>
        <div>
          <h1 className={styles.team_members_label}>Трекеры команды</h1>
          <div className={styles.team_members_container}>
            {members
              .filter((member) => member.role === Role.Tracker)
              .map((member) => (
                <TeamMember
                  key={member.email}
                  name={member.name}
                  email={member.email}
                  messenger={member.messenger}
                  role={member.role}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

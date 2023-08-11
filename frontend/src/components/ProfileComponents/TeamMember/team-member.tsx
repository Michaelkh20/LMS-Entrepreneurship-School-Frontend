import styles from './team-member.module.css';
import Image from 'next/image';
import UserData from '@/components/ProfileComponents/UserData/user-data';
import { Role } from '@/types/common';

export interface TeamMemberProps {
  name: string;
  email: string;
  messenger: string;
  role: Role;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, email, messenger }) => {
  return (
    <div className={styles.team_members}>
      <Image
        src="/student/imgs/purple_circle.svg"
        width={15}
        height={15}
        alt=""
      />
      <div className={styles.team_members_props}>
        <p>{name}</p>
        <p>{`E-mail: ${email}`}</p>
        <p>{`VK: ${messenger}`}</p>
      </div>
    </div>
  );
};

export default TeamMember;

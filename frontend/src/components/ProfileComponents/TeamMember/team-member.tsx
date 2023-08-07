import styles from './team-member.module.css';
import Image from 'next/image';
import UserData from '@/components/ProfileComponents/UserData/user-data';

interface TeamMemberProps {
  name: string;
  email: string;
  messenger: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, email, messenger }) => {
  return (
    <div className={styles.team_members}>
      <UserData props={name} />
      <UserData props={`E-mail: ${email}`} />
      <UserData props={`VK: ${messenger}`} />
    </div>
  );
};

export default TeamMember;

import styles from './user-data.module.css';
import Image from 'next/image';

interface UserProps {
  props: string;
}

const UserData: React.FC<UserProps> = ({ props }) => {
  return (
    <div className={styles.user_data_component}>
      <Image
        src="/student/imgs/purple_circle.svg"
        width={15}
        height={15}
        alt=""
      />
      <p>{props}</p>
    </div>
  );
};

export default UserData;

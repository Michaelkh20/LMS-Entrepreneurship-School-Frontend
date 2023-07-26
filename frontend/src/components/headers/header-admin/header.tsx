import React from 'react';
import BackButton from '../../Buttons/BackButton/back-button';
import AdminIcon from '../../Icons/person-icon';
import ExitButton from '../../Buttons/ExitButton/exit-button';
import styles from './header.module.css';

interface NavBarProps {
  isHomePage: boolean;
}

const NavBarAdmin: React.FC<NavBarProps> = ({ isHomePage }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <span className={styles.adminIcon}>
          <AdminIcon />
        </span>
        <span className={styles.adminLabel}>Администратор</span>
      </div>
      <div className={styles.right}>
        {!isHomePage && <BackButton />}
        <ExitButton />
      </div>
    </nav>
  );
};

export default NavBarAdmin;

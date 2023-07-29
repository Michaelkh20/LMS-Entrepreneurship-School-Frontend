"use client"

import React from 'react';
import { usePathname } from 'next/navigation'
import BackButton from '../../Buttons/BackButton/back-button';
import AdminIcon from '../../Icons/person-icon';
import ExitButton from '../../Buttons/ExitButton/exit-button';
import styles from './header.module.css';
import { ADMIN_HOME_PAGE } from '../../../../constants';
import Link from 'next/link'


const NavBarAdmin: React.FC = () => {
  const path = usePathname()
  const isHomePage = path === ADMIN_HOME_PAGE;

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <span className={styles.adminIcon}>
          <AdminIcon />
        </span>
        <span className={styles.adminLabel}>Администратор</span>
      </div>
      <div className={styles.right}>
        {!isHomePage && <Link href = {ADMIN_HOME_PAGE}><BackButton/></Link>}
        <ExitButton />
      </div>
    </nav>
  );
};

export default NavBarAdmin;


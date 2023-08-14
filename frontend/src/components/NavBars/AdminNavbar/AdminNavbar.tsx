'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import HomeButton from '../../Buttons/HomeButton/HomeButton';
import ExitButton from '../../Buttons/ExitButton/ExitButton';
import styles from './adminNavbar.module.css';
import { ADMIN_HOME_PAGE } from '../../../../constants';
import icon from '../../../../public/icon.svg';
import Image from 'next/image';
import { Role } from '@/types/common';

export default function AdminNavbar() {
  const path = usePathname();
  const isHomePage = path === ADMIN_HOME_PAGE;

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <span className={styles.adminIcon}>
          <Image src={icon} alt="Profile icon" width={40} height={40} />
        </span>
        <span className={styles.adminLabel}>Администратор</span>
      </div>
      <div className={styles.right}>
        {!isHomePage && <HomeButton role={Role.Admin} />}
        <ExitButton />
      </div>
    </nav>
  );
}

'use client';
import React from 'react';
import styles from './navbar.module.css';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Dropdown, MenuProps, Space } from 'antd';
import HomeButton from '../../Buttons/HomeButton/HomeButton';
import { LEARNER_HOME_PAGE, TRACKER_HOME_PAGE } from '../../../../constants';
import marketIcon from '../../../../public/market.svg';
import icon from '../../../../public/icon.svg';

export default function Navbar({
  balance,
  name,
  isTrackerPage,
}: {
  balance: number;
  name: string;
  isTrackerPage: boolean;
}) {
  const path = usePathname();
  const isHomePage = isTrackerPage
    ? path === TRACKER_HOME_PAGE
    : path === LEARNER_HOME_PAGE;

  return (
    <nav className={styles.nav}>
      {!isHomePage && <HomeButton />}
      <div className={styles.right}>
        {isTrackerPage && <span className={styles.markIcon}>A+</span>}
        <div className={styles.market}>
          <Image src={marketIcon} alt="Market icon" width={40} height={40} />
          <span>{balance} $</span>
        </div>
        <Dropdown menu={{ items }}>
          <div className={styles.profile}>
            <Image src={icon} alt="Icon" width={37} height={37} />
            <span>{name}</span>
          </div>
        </Dropdown>
      </div>
    </nav>
  );
}

const items: MenuProps['items'] = [
  {
    label: <>Профиль</>,
    key: '0',
  },
  {
    label: <>Выход</>,
    key: '1',
  },
];

'use client';

import PersonIcon from '../../Icons/person-icon';
import MarketIcon from '../../Icons/market-icon';
import styles from './header.module.css';
import BackButton from '../../Buttons/BackButton/back-button';
import MarkIcon from '../../Icons/mark-icon';
import { Dropdown, Space } from 'antd';
import { usePathname } from 'next/navigation';
import { items } from '../DropdownItems';
import { LEARNER_HOME_PAGE, TRACKER_HOME_PAGE } from '../../../../constants';
import Link from 'next/link';
import marketIcon from '../../../../public/SVGRepo_iconCarrier.svg'
import Image from 'next/image';

interface HeaderBigProps {
  balance: number;
  name: string;
  isTrackerPage: boolean;
}

const NavBar: React.FC<HeaderBigProps> = ({ balance, name, isTrackerPage }) => {
  const path = usePathname();
  const isHomePage = isTrackerPage
    ? path === TRACKER_HOME_PAGE
    : path === LEARNER_HOME_PAGE;
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        {!isHomePage && (
          <Link href={isTrackerPage ? TRACKER_HOME_PAGE : LEARNER_HOME_PAGE}>
            <BackButton />
          </Link>
        )}
      </div>
      <div className={styles.right}>
        <span className={styles.markIcon}>{!isTrackerPage && 
        <h1>
          A+
        </h1>}</span>
        <span className={styles.iconMarket}>
          <Image src = {marketIcon} alt = "marketIcon" width={30} height={30}/>
        </span>
        <span className={styles.balance}>{balance} $</span>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <div className={styles.menu}>
                <span className={styles.icon}>
                  <PersonIcon />
                </span>
                <span className={styles.name}> {name} </span>
              </div>
            </Space>
          </a>
        </Dropdown>
      </div>
    </nav>
  );
};

export default NavBar;

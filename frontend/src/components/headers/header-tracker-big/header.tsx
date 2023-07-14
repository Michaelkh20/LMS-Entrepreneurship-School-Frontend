"use client"

import PersonIcon from '../../Icons/person-icon';
import MarketIcon from '../../Icons/market-icon';
import styles from './header.module.css';
import BackButton from '../../BackButton/back-button';
import MarkIcon from '../../Icons/mark-icon';

export default function HeaderTrackerBig() {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <BackButton/>
            </div>
            <div className={styles.right}>
                <span className={styles.icon}> <MarkIcon/> </span>
                <span className={styles.iconMarket}><MarketIcon/></span>
                <span className={styles.balance}>15 $</span>
                <span className={styles.icon}><PersonIcon/></span>
                <span className={styles.name}> Иван </span>
            </div>
        </nav>
    )
}
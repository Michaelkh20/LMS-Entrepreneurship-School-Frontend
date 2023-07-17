"use client"

import PersonIcon from '../../Icons/person-icon';
import MarketIcon from '../../Icons/market-icon';
import styles from './header.module.css';
import BackButton from '../../BackButton/back-button';
import { Dropdown, Space } from 'antd';
import { items } from '../DropdownItems';

export default function HeaderLernerBig() {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <BackButton />
            </div>
            <div className={styles.right}>
                <span className={styles.iconMarket}><MarketIcon /></span>
                <span className={styles.balance}>15 $</span>
                <Dropdown menu={{ items }}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <div className={styles.menu}>
                                <span className={styles.icon}><PersonIcon /></span>
                                <span className={styles.name}> Иван </span>
                            </div>
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </nav>
    )
}
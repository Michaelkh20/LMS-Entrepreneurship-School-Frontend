import Image from 'next/image';
import styles from './page.module.css';
import { Mulish, Jura } from 'next/font/google';
import Link from 'next/link';
import NavBar from '@/components/headers/header-tracker-learner/header';
import TradeLotCard from '@/components/LotCard/lot-card';
import LotApplication from '@/components/LotApplication/lot-application';

const mulish = Mulish({
  subsets: ['latin'],
});

const jura = Jura({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className={mulish.className}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <NavBar balance={15} name="Иван" isTrackerPage={false} />
          <div className={jura.className}>
            <h1 className={styles.page_label}>МАГАЗИН</h1>
          </div>

          <div className={styles.lots_container}>
            <TradeLotCard
              number={12345}
              description="Торговый лот описания"
              performer="Имя исполнителя"
              price={200}
              conditions="Условия торгового лота"
            />
            <TradeLotCard
              number={12345}
              description="Торговый лот описания"
              performer="Имя исполнителя"
              price={200}
              conditions="Условия торгового лота"
            />
            <TradeLotCard
              number={12345}
              description="Торговый лот описания"
              performer="Имя исполнителя"
              price={200}
              conditions="Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота "
            />
            <TradeLotCard
              number={12345}
              description="Торговый лот описания"
              performer="Имя исполнителя"
              price={200}
              conditions="Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота "
            />
          </div>
          <LotApplication />
        </div>
      </div>
    </main>
  );
}
